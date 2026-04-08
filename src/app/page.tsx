'use client';

import React from 'react';
import { ChevronRight, TrendingUp, Users, CheckCircle2, Zap, Target } from 'lucide-react';

export default function LandingPage() {
  const handleSignIn = () => {
    window.location.href = '/app';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 px-6 lg:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center font-bold text-sm">
            ST
          </div>
          <span className="font-display text-xl font-semibold">StakeTrack</span>
        </div>
        <button
          onClick={handleSignIn}
          className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors duration-200"
        >
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-6 lg:px-12 py-20">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-center space-y-8">
          <div className="space-y-6">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              Keep Your Wagers <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Clean</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Track bets with friends. Resolve outcomes instantly. Know exactly who owes whom. No spreadsheets. No confusion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={handleSignIn}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-slate-950 font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/20 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              Sign in with Google <ChevronRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-lg border-2 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/50 text-white font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              See how it works
            </button>
          </div>

          <div className="pt-12 flex items-center justify-center gap-8 text-sm text-slate-400 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-cyan-500" />
              Private friend groups
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-cyan-500" />
              Zero commission
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-cyan-500" />
              Instant settlement
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-24 px-6 lg:px-12 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Three steps to track</h2>
            <p className="text-xl text-slate-400">From bet creation to final settlement</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: 1,
                title: 'Create or join',
                description: 'Start a new bet or join your friends&apos; wagers with one click. Choose the sport, stake, and participants.',
                icon: Users,
              },
              {
                step: 2,
                title: 'Resolve outcomes',
                description: 'When the game ends, mark the winner instantly. StakeTrack automatically calculates who owes whom.',
                icon: Target,
              },
              {
                step: 3,
                title: 'Settle up',
                description: 'View your personal settlement ledger. Record payments and stay on top of your friend group&apos;s finances.',
                icon: TrendingUp,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="absolute -top-8 left-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-teal-600/20 rounded-full flex items-center justify-center border border-cyan-500/50">
                    <span className="text-2xl font-bold text-cyan-400">{item.step}</span>
                  </div>
                  <div className="pt-12 space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon size={24} className="text-cyan-400 flex-shrink-0" />
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Built for accountability</h2>
            <p className="text-xl text-slate-400">Everything you need for clean sports wagering</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Private friend groups',
                description: 'Your bets stay between friends. No public leaderboards, no stranger involvement. Just your crew.',
              },
              {
                title: 'Personal ledger',
                description: 'Crystal clear view of who owes and who is owed. Never again lose track of who paid what.',
              },
              {
                title: 'Multiple sports',
                description: 'IPL, NBA, NFL, or custom bets. Track any wager your group makes with automatic stake calculations.',
              },
              {
                title: 'Zero commission',
                description: 'We don&apos;t take a cut. Every rupee you win stays yours. We&apos;re just here to keep score.',
              },
              {
                title: 'Instant Google sign-in',
                description: 'One click to join. No passwords, no forms, no friction. Start tracking in seconds.',
              },
              {
                title: 'Settlement records',
                description: 'Keep a permanent record of all payments and settlements. Proof for whenever friends dispute.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-xl border border-slate-800 hover:border-cyan-500/50 bg-slate-800/30 hover:bg-slate-800/60 transition-all duration-300 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-600/20 border border-cyan-500/50 flex items-center justify-center">
                  <Zap size={24} className="text-cyan-400" />
                </div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="relative py-24 px-6 lg:px-12 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Dashboard preview</h2>
            <p className="text-xl text-slate-400">See your bets, settlements, and who owes whom at a glance</p>
          </div>

          <div className="relative">
            {/* Mock Dashboard */}
            <div className="rounded-2xl border border-slate-700 overflow-hidden bg-slate-950 shadow-2xl">
              <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-slate-400">staketrack.app</div>
              </div>

              <div className="grid md:grid-cols-4 divide-x divide-slate-800">
                {/* Sidebar */}
                <div className="hidden md:flex col-span-1 flex-col gap-4 p-6 bg-slate-900/50 border-r border-slate-800">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Main</div>
                  <div className="text-sm text-cyan-400 font-semibold">Dashboard</div>
                  <div className="text-sm text-slate-400">All Bets</div>
                  <div className="text-sm text-slate-400">Settlements</div>
                </div>

                {/* Main Content */}
                <div className="col-span-3 p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-800/50 p-4 border border-slate-700">
                      <div className="text-xs text-slate-400 uppercase mb-2">Active Bets</div>
                      <div className="text-3xl font-bold text-cyan-400">7</div>
                    </div>
                    <div className="rounded-lg bg-slate-800/50 p-4 border border-slate-700">
                      <div className="text-xs text-slate-400 uppercase mb-2">You Are Owed</div>
                      <div className="text-3xl font-bold text-emerald-400">₹2,450</div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-slate-800/50 border border-slate-700 p-4">
                    <div className="text-sm font-semibold mb-4">Recent Activity</div>
                    <div className="space-y-3">
                      {[
                        { title: 'MI vs RCB runs', status: 'Pending', amount: '₹500' },
                        { title: 'Virat centuries', status: 'Won', amount: '+₹1000' },
                        { title: 'First boundary', status: 'Lost', amount: '-₹250' },
                      ].map((bet, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-slate-900/50 rounded border border-slate-700/50">
                          <span className="text-sm">{bet.title}</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded ${bet.status === 'Pending' ? 'bg-amber-500/20 text-amber-400' : bet.status === 'Won' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                              {bet.status}
                            </span>
                            <span className={`text-sm font-semibold ${bet.status === 'Won' ? 'text-emerald-400' : bet.status === 'Lost' ? 'text-red-400' : 'text-slate-300'}`}>
                              {bet.amount}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-5xl md:text-6xl font-bold">Stop tracking bets on sticky notes</h2>
            <p className="text-xl text-slate-400">Join your friends. Get organized. Settle fairly.</p>
          </div>
          <button
            onClick={handleSignIn}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-slate-950 font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/20 hover:shadow-2xl"
          >
            Sign in with Google <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-col md:flex-row gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center font-bold text-xs">
              ST
            </div>
            <span className="font-display font-semibold">StakeTrack</span>
          </div>
          <p className="text-sm text-slate-400">Sports wagers. Friend groups. Total transparency.</p>
        </div>
      </footer>
    </div>
  );
}
