"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { LayoutDashboard, List, Trophy, Sun, Moon, Plus, X, UserPlus, IndianRupee } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function StakeTrackApp() {
  const [activeView, setActiveView] = useState('dashboard');
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettleModalOpen, setIsSettleModalOpen] = useState(false);

  const [user, setUser] = useState<any>(null);
  const [bets, setBets] = useState<any[]>([]);
  const [settlements, setSettlements] = useState<any[]>([]);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({ title: '', sport: 'IPL', stake: '' });
  const [newParticipants, setNewParticipants] = useState<string[]>([]);
  const [newParticipantInput, setNewParticipantInput] = useState('');

  // Settlement state
  const [settleData, setSettleData] = useState({ payee: '', amount: '' });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) setNewParticipants([session.user.user_metadata?.full_name || 'Me']);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) setNewParticipants([session.user.user_metadata?.full_name || 'Me']);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchBets();
      fetchSettlements();
    } else {
      setBets([]);
      setSettlements([]);
      setLoading(false);
    }
  }, [user]);

  const fetchBets = async () => {
    const myName = user?.user_metadata?.full_name;
    if (!myName) return;
    const { data, error } = await supabase.from('bets').select('*').contains('participants', [myName]).order('created_at', { ascending: false });
    if (!error && data) setBets(data);
    setLoading(false);
  };

  const fetchSettlements = async () => {
    const { data, error } = await supabase.from('settlements').select('*');
    if (!error && data) setSettlements(data);
  };

  // The Updated Ledger Engine
  useEffect(() => {
    const stats: Record<string, { net: number, wins: number, losses: number }> = {};

    // 1. Calculate Bet Winnings/Losses
    bets.forEach(b => {
      if (b.status !== 'won' || !b.participants) return;
      const winAmount = b.stake * (b.participants.length - 1);
      b.participants.forEach((p: string) => {
        if (!stats[p]) stats[p] = { net: 0, wins: 0, losses: 0 };
        if (p === b.winner) {
          stats[p].net += winAmount;
          stats[p].wins += 1;
        } else {
          stats[p].net -= b.stake;
          stats[p].losses += 1;
        }
      });
    });

    // 2. Apply Settlements (Payments)
    settlements.forEach(s => {
      if (!stats[s.payer]) stats[s.payer] = { net: 0, wins: 0, losses: 0 };
      if (!stats[s.payee]) stats[s.payee] = { net: 0, wins: 0, losses: 0 };
      stats[s.payer].net += s.amount; // Payer's net goes UP (debt cleared)
      stats[s.payee].net -= s.amount; // Payee's net goes DOWN (received cash)
    });

    const sortedBoard = Object.entries(stats).map(([name, data]) => ({ name, ...data })).sort((a, b) => b.net - a.net);
    setLeaderboard(sortedBoard);
  }, [bets, settlements]);

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } });
  };

  const handleCreateBet = async () => {
    if (!formData.title || !user) return alert('Enter a title');
    if (newParticipants.length < 2) return alert('Add at least one friend!');
    const newBet = { title: formData.title, sport: formData.sport, stake: parseInt(formData.stake) || 0, status: 'pending', participants: newParticipants, created_by: user.id };
    const { data, error } = await supabase.from('bets').insert([newBet]).select();
    if (error) alert("Error: " + error.message);
    else if (data) {
      setBets([data[0], ...bets]);
      setIsModalOpen(false);
      setFormData({ title: '', sport: 'IPL', stake: '' });
      setNewParticipants([user.user_metadata?.full_name || 'Me']);
    }
  };

  const handleResolveBet = async (betId: string, winnerName: string) => {
    const { data, error } = await supabase.from('bets').update({ status: 'won', winner: winnerName }).eq('id', betId).select();
    if (error) alert("Error resolving: " + error.message);
    else if (data) setBets(bets.map(b => b.id === betId ? data[0] : b));
  };

  const handleSettleUp = async () => {
    if (!settleData.payee || !settleData.amount) return alert("Enter amount");
    const amount = parseInt(settleData.amount);
    const myName = user?.user_metadata?.full_name;

    const { data, error } = await supabase.from('settlements').insert([{ payer: myName, payee: settleData.payee, amount }]).select();
    if (error) alert("Error: " + error.message);
    else if (data) {
      setSettlements([...settlements, data[0]]);
      setIsSettleModalOpen(false);
    }
  };

  const handleAddParticipant = () => {
    if (newParticipantInput.trim() && !newParticipants.includes(newParticipantInput.trim())) {
      setNewParticipants([...newParticipants, newParticipantInput.trim()]);
      setNewParticipantInput('');
    }
  };

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // KPI Calculations
  const pendingCount = bets.filter(b => b.status === 'pending').length;
  const wonCount = bets.filter(b => b.winner === user?.user_metadata?.full_name).length;
  const totalPot = bets.reduce((sum, b) => sum + (b.stake * (b.participants?.length || 0)), 0);

  if (loading) return <div className="p-8 text-center">Loading app...</div>;
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-bg)]">
        <h1 className="text-4xl font-display mb-2">StakeTrack</h1>
        <p className="text-[var(--color-text-muted)] mb-8">Social Sports Wager Tracker</p>
        <button onClick={handleGoogleLogin} className="btn btn-primary">Sign in with Google</button>
      </div>
    );
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="avatar">ST</div>
          <div><div className="brand-name">StakeTrack</div><div className="brand-sub">Sports Wager Tracker</div></div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-section-label">Main</div>
          <button className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveView('dashboard')}><LayoutDashboard size={16} /> Dashboard</button>
          <button className={`nav-item ${activeView === 'bets' ? 'active' : ''}`} onClick={() => setActiveView('bets')}><List size={16} /> All Bets <span className="nav-badge">{pendingCount}</span></button>
          <button className={`nav-item ${activeView === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveView('leaderboard')}><Trophy size={16} /> Leaderboard</button>
        </nav>
        <div className="sidebar-footer">
          <div className="user-card flex flex-col items-start w-full">
            <div className="flex w-full items-center mb-2">
              <div className="avatar mr-2">{user.user_metadata?.full_name?.charAt(0) || 'U'}</div>
              <div className="overflow-hidden"><div style={{ fontSize: 'var(--text-sm)', fontWeight: 500, whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{user.user_metadata?.full_name || 'User'}</div></div>
              <button className="btn-icon" onClick={toggleTheme} style={{ marginLeft: 'auto' }}>{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button>
            </div>
            <button onClick={() => supabase.auth.signOut()} className="text-xs text-[var(--color-text-muted)] hover:text-white w-full text-left p-1">Sign Out</button>
          </div>
        </div>
      </aside>

      <div className="main-area">
        <header className="topbar">
          <h1 className="page-title" style={{ textTransform: 'capitalize' }}>{activeView}</h1>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}><Plus size={16} /> New Bet</button>
        </header>

        <main className="main-content">

          {/* DASHBOARD VIEW */}
          {activeView === 'dashboard' && (
            <>
              <div className="kpi-grid mb-8">
                <div className="kpi-card"><div className="kpi-label">Your Bets</div><div className="kpi-value">{bets.length}</div></div>
                <div className="kpi-card"><div className="kpi-label">Pending Action</div><div className="kpi-value text-[var(--color-gold)]">{pendingCount}</div></div>
                <div className="kpi-card"><div className="kpi-label">Bets Won</div><div className="kpi-value text-[var(--color-success)]">{wonCount}</div></div>
                <div className="kpi-card"><div className="kpi-label">Total Pot Volume</div><div className="kpi-value">₹{totalPot}</div></div>
              </div>
              <div className="section-header"><div className="section-title">Recent Activity</div></div>
              <div className="table-wrap">
                <table className="data-table">
                  <thead><tr><th>Bet</th><th>Sport</th><th>Stake</th><th>Status</th></tr></thead>
                  <tbody>
                    {bets.slice(0, 4).map(b => (
                      <tr key={b.id}>
                        <td><span style={{ fontWeight: 500 }}>{b.title}</span></td>
                        <td><span className={`badge badge-${b.sport.toLowerCase()}`}>{b.sport}</span></td>
                        <td className="amount">₹{b.stake}</td>
                        <td><span className={`badge badge-${b.status}`}>{b.status === 'won' ? `Won by ${b.winner}` : b.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ALL BETS VIEW (History) */}
          {activeView === 'bets' && (
            <>
              <div className="section-header"><div className="section-title">Bet History</div></div>
              <div className="table-wrap">
                <table className="data-table">
                  <thead><tr><th>Bet</th><th>Sport</th><th>Participants</th><th>Stake</th><th>Status</th><th>Action</th></tr></thead>
                  <tbody>
                    {bets.length === 0 ? (
                      <tr><td colSpan={6} className="text-center p-8 text-[var(--color-text-muted)]">No bets found. Create one.</td></tr>
                    ) : (
                      bets.map(b => (
                        <tr key={b.id}>
                          <td><span style={{ fontWeight: 500 }}>{b.title}</span></td>
                          <td><span className={`badge badge-${b.sport.toLowerCase()}`}>{b.sport}</span></td>
                          <td><div className="participants">{(b.participants || []).map((p: string) => <span key={p} className="p-chip">{p}</span>)}</div></td>
                          <td className="amount">₹{b.stake}</td>
                          <td><span className={`badge badge-${b.status}`}>{b.status === 'won' ? `Won by ${b.winner}` : b.status}</span></td>
                          <td>
                            {b.status === 'pending' && (
                              <div className="flex gap-2">
                                {(b.participants || []).map((p: string) => (
                                  <button key={p} onClick={() => handleResolveBet(b.id, p)} className="btn btn-ghost text-xs py-1 px-2 border border-[var(--color-border)]">{p} won</button>
                                ))}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* LEADERBOARD VIEW */}
          {activeView === 'leaderboard' && (
            <>
              <div className="section-header"><div className="section-title">Net P&L Standings</div></div>
              <div className="lb-list bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-sm">
                {leaderboard.length === 0 ? (
                  <div className="p-8 text-center text-[var(--color-text-muted)]">Resolve a bet to see standings.</div>
                ) : (
                  leaderboard.map((player, i) => (
                    <div key={player.name} className="lb-item flex items-center gap-4 p-4 border-b border-[var(--color-divider)] hover:bg-[var(--color-surface-offset)] transition-colors">
                      <div className={`lb-rank w-6 text-center font-bold ${i === 0 ? 'text-[var(--color-gold)] text-lg' : i === 1 ? 'text-gray-400 text-lg' : i === 2 ? 'text-amber-700 text-lg' : 'text-[var(--color-text-faint)] text-xs'}`}>
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}
                      </div>
                      <div className="avatar w-9 h-9 text-xs">{player.name.charAt(0)}</div>
                      <div className="lb-name flex-1 font-medium">{player.name}</div>

                      {/* Settlement Action (Only show if this is NOT the current user, and the current user owes them money) */}
                      {player.name !== user?.user_metadata?.full_name && player.net > 0 && (
                        <button
                          onClick={() => { setSettleData({ payee: player.name, amount: '' }); setIsSettleModalOpen(true); }}
                          className="mr-4 px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                        >
                          Pay {player.name}
                        </button>
                      )}

                      <div className="lb-stats flex gap-6 text-right">
                        <div>
                          <div className={`lb-stat-val font-bold text-sm ${player.net >= 0 ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'}`}>
                            {player.net >= 0 ? '+' : ''}₹{Math.abs(player.net)}
                          </div>
                          <div className="lb-stat-lbl text-xs text-[var(--color-text-muted)]">Net P&L</div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}

        </main>
      </div>

      {/* Modal: Create Bet */}
      {isModalOpen && (
        <div className="modal-overlay open" onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Create New Bet</h2>
              <button className="btn-icon" onClick={() => setIsModalOpen(false)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <div className="form-group"><label className="form-label">Bet Title</label><input className="form-input" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. MI vs CSK – Runs in first 6 overs" /></div>
              <div className="form-row">
                <div className="form-group"><label className="form-label">Stake per Person (₹)</label><input className="form-input" type="number" value={formData.stake} onChange={e => setFormData({ ...formData, stake: e.target.value })} placeholder="100" /></div>
                <div className="form-group"><label className="form-label">Sport</label><select className="form-input" value={formData.sport} onChange={e => setFormData({ ...formData, sport: e.target.value })}><option value="IPL">IPL</option><option value="NBA">NBA</option><option value="NFL">NFL</option><option value="Custom">Custom</option></select></div>
              </div>
              <div className="form-group">
                <label className="form-label">Who are you betting against?</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input className="form-input" value={newParticipantInput} onChange={e => setNewParticipantInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddParticipant()} placeholder="Friend's exact Google Name" />
                  <button className="btn btn-ghost" onClick={handleAddParticipant}><UserPlus size={14} /></button>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                  {newParticipants.map(p => (
                    <span key={p} className="badge badge-custom flex items-center">{p} {p !== (user.user_metadata?.full_name || 'Me') && <X size={12} className="ml-1 cursor-pointer" onClick={() => setNewParticipants(newParticipants.filter(x => x !== p))} />}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleCreateBet}>Create Bet</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Settle Up */}
      {isSettleModalOpen && (
        <div className="modal-overlay open" onClick={(e) => e.target === e.currentTarget && setIsSettleModalOpen(false)}>
          <div className="modal" style={{ maxWidth: '400px' }}>
            <div className="modal-header">
              <h2 className="modal-title flex items-center gap-2"><IndianRupee size={20} /> Settle Debt</h2>
              <button className="btn-icon" onClick={() => setIsSettleModalOpen(false)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <p className="text-sm text-[var(--color-text-muted)] mb-2">Record a payment sent to <strong>{settleData.payee}</strong>.</p>
              <div className="form-group">
                <label className="form-label">Amount Paid (₹)</label>
                <input className="form-input text-lg font-bold" type="number" autoFocus value={settleData.amount} onChange={e => setSettleData({ ...settleData, amount: e.target.value })} placeholder="e.g. 500" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-ghost" onClick={() => setIsSettleModalOpen(false)}>Cancel</button>
              <button className="btn btn-primary bg-[var(--color-success)] hover:bg-[var(--color-success-hover)]" onClick={handleSettleUp}>Record Payment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}