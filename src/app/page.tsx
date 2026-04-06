"use client";

import React, { useState, useEffect } from 'react';
import { LayoutDashboard, List, Trophy, Activity, Circle, Shield, Sparkles, Sun, Moon, Plus, X, UserPlus, Check } from 'lucide-react';

// Hardcoded initial data from your HTML
const INITIAL_BETS = [
  { id: 1, title: "MI vs CSK – Highest First Innings Score", desc: "Bet on whether MI will outscore CSK.", sport: "IPL", type: "Head-to-Head", stake: 200, date: "2025-03-22", participants: ["Manan", "Rahul"], status: "won", winner_actual: "Manan", created: "2025-03-22T10:00:00Z" },
  { id: 2, title: "Lakers vs Warriors – Point Spread", desc: "Lakers to win by 8+ points.", sport: "NBA", type: "Head-to-Head", stake: 300, date: "2025-04-01", participants: ["Manan", "Priya", "Arjun"], status: "lost", winner_actual: "Priya", created: "2025-04-01T18:00:00Z" },
];

export default function StakeTrackApp() {
  const [activeView, setActiveView] = useState('dashboard');
  const [bets, setBets] = useState(INITIAL_BETS);
  const [theme, setTheme] = useState('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newParticipants, setNewParticipants] = useState<string[]>(['Manan']);
  const [newParticipantInput, setNewParticipantInput] = useState('');

  // Form State
  const [formData, setFormData] = useState({ title: '', desc: '', sport: 'IPL', type: 'Head-to-Head', stake: '', date: '', winner: '' });

  // Toggle Dark Mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Stats Calculations
  const pendingCount = bets.filter(b => b.status === 'pending').length;
  const wonCount = bets.filter(b => b.status === 'won').length;
  const lostCount = bets.filter(b => b.status === 'lost').length;
  const totalPot = bets.reduce((sum, b) => sum + (b.stake * b.participants.length), 0);

  // Form Handlers
  const handleAddParticipant = () => {
    if (newParticipantInput.trim() && !newParticipants.includes(newParticipantInput.trim())) {
      setNewParticipants([...newParticipants, newParticipantInput.trim()]);
      setNewParticipantInput('');
    }
  };

  const handleCreateBet = () => {
    if (!formData.title) return alert('Enter a title');
    const newBet = {
      id: Date.now(),
      title: formData.title,
      desc: formData.desc,
      sport: formData.sport,
      type: formData.type,
      stake: parseInt(formData.stake) || 0,
      date: formData.date || new Date().toISOString().split('T')[0],
      participants: newParticipants,
      status: 'pending',
      winner_actual: '',
      created: new Date().toISOString()
    };
    setBets([newBet, ...bets]);
    setIsModalOpen(false);
    setFormData({ title: '', desc: '', sport: 'IPL', type: 'Head-to-Head', stake: '', date: '', winner: '' });
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="avatar">ST</div>
          <div>
            <div className="brand-name">StakeTrack</div>
            <div className="brand-sub">Sports Wager Tracker</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-label">Main</div>
          <button className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveView('dashboard')}>
            <LayoutDashboard size={16} /> Dashboard
          </button>
          <button className={`nav-item ${activeView === 'bets' ? 'active' : ''}`} onClick={() => setActiveView('bets')}>
            <List size={16} /> All Bets <span className="nav-badge">{pendingCount}</span>
          </button>
          <button className={`nav-item ${activeView === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveView('leaderboard')}>
            <Trophy size={16} /> Leaderboard
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-card">
            <div className="avatar">MM</div>
            <div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>Manan Mehta</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Host</div>
            </div>
            <button className="btn-icon" onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="main-area">
        <header className="topbar">
          <h1 className="page-title" style={{ textTransform: 'capitalize' }}>{activeView}</h1>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={16} /> New Bet
          </button>
        </header>

        <main className="main-content">
          {activeView === 'dashboard' && (
            <div>
              {/* KPIs */}
              <div className="kpi-grid">
                <div className="kpi-card"><div className="kpi-label">Total Bets</div><div className="kpi-value">{bets.length}</div></div>
                <div className="kpi-card"><div className="kpi-label">Pending</div><div className="kpi-value" style={{ color: 'var(--color-gold)' }}>{pendingCount}</div></div>
                <div className="kpi-card"><div className="kpi-label">Won</div><div className="kpi-value" style={{ color: 'var(--color-success)' }}>{wonCount}</div></div>
                <div className="kpi-card"><div className="kpi-label">Total Pot</div><div className="kpi-value">₹{totalPot.toLocaleString('en-IN')}</div></div>
              </div>

              {/* Recent Bets Table */}
              <div className="section-header">
                <div className="section-title">Recent Bets</div>
              </div>
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr><th>Bet</th><th>Sport</th><th>Participants</th><th>Stake</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {bets.slice(0, 5).map(b => (
                      <tr key={b.id}>
                        <td><span style={{ fontWeight: 500 }}>{b.title}</span></td>
                        <td><span className={`badge badge-${b.sport.toLowerCase()}`}>{b.sport}</span></td>
                        <td><div className="participants">{b.participants.map(p => <span key={p} className="p-chip">{p}</span>)}</div></td>
                        <td className="amount">₹{b.stake}</td>
                        <td><span className={`badge badge-${b.status}`}>{b.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeView === 'bets' && (
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr><th>Bet</th><th>Sport</th><th>Participants</th><th>Stake</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {bets.map(b => (
                    <tr key={b.id}>
                      <td><span style={{ fontWeight: 500 }}>{b.title}</span></td>
                      <td><span className={`badge badge-${b.sport.toLowerCase()}`}>{b.sport}</span></td>
                      <td><div className="participants">{b.participants.map(p => <span key={p} className="p-chip">{p}</span>)}</div></td>
                      <td className="amount">₹{b.stake}</td>
                      <td><span className={`badge badge-${b.status}`}>{b.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {/* React Modal implementation */}
      {isModalOpen && (
        <div className="modal-overlay open" onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">Create New Bet</h2>
              <button className="btn-icon" onClick={() => setIsModalOpen(false)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Bet Title</label>
                <input className="form-input" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. MI vs CSK – Runs in first 6 overs" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Stake per Person (₹)</label>
                  <input className="form-input" type="number" value={formData.stake} onChange={e => setFormData({ ...formData, stake: e.target.value })} placeholder="100" />
                </div>
                <div className="form-group">
                  <label className="form-label">Sport</label>
                  <select className="form-input" value={formData.sport} onChange={e => setFormData({ ...formData, sport: e.target.value })}>
                    <option value="IPL">IPL</option>
                    <option value="NBA">NBA</option>
                    <option value="NFL">NFL</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Participants</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input className="form-input" value={newParticipantInput} onChange={e => setNewParticipantInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddParticipant()} placeholder="Add friend's name" />
                  <button className="btn btn-ghost" onClick={handleAddParticipant}><UserPlus size={14} /></button>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                  {newParticipants.map(p => (
                    <span key={p} className="badge badge-custom">{p} <X size={12} style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={() => setNewParticipants(newParticipants.filter(x => x !== p))} /></span>
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
    </div>
  );
}