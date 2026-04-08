"use client";

import { ArrowRight, ArrowDown } from "lucide-react";

interface LandingPageProps {
  onSignIn: () => void;
}

export default function LandingPage({ onSignIn }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] overflow-x-hidden selection:bg-[var(--color-primary)]/30">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION - Full viewport cinematic
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image with heavy treatment */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 opacity-60"
            style={{ backgroundImage: "url('/images/hero-sports.jpg')" }}
          />
          {/* Heavy vignette and gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_0%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40" />
        </div>

        {/* Navigation - Minimal, editorial */}
        <nav className="relative z-20 px-6 lg:px-16 py-8">
          <div className="flex items-center justify-between max-w-[1400px] mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
                <span className="text-white font-bold text-sm tracking-tight">MB</span>
              </div>
              <span className="font-[family-name:var(--font-instrument-serif)] text-2xl tracking-tight">MoneyBall</span>
            </div>
            <button
              onClick={onSignIn}
              className="text-sm text-[#a3a3a3] hover:text-white transition-colors hidden sm:block"
            >
              Sign in
            </button>
          </div>
        </nav>

        {/* Hero Content - Asymmetric editorial layout */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-12 lg:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
            {/* Top: Tagline positioned left */}
            <div className="mb-8 lg:mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em]">
                <span className="w-8 h-px bg-[var(--color-primary)]" />
                Private sports wagers
              </span>
            </div>

            {/* Main grid - asymmetric */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-end">
              {/* Left: Big headline */}
              <div className="lg:col-span-8 xl:col-span-7">
                <h1 className="font-[family-name:var(--font-instrument-serif)] text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] tracking-[-0.03em] mb-0">
                  Track the
                  <br />
                  <span className="text-[var(--color-primary)]">action.</span>
                </h1>
              </div>

              {/* Right: Supporting copy + CTA */}
              <div className="lg:col-span-4 xl:col-span-5 lg:pb-4">
                <p className="text-lg lg:text-xl text-[#a3a3a3] leading-relaxed mb-8 max-w-md">
                  The private ledger for sports wagers between friends. Log bets, resolve winners, settle up.
                </p>
                
                {/* CTA - Integrated naturally */}
                <button
                  onClick={onSignIn}
                  className="group flex items-center gap-4 text-base font-medium"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#0a0a0a] group-hover:scale-105 transition-transform shadow-xl">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="text-white group-hover:text-[var(--color-primary)] transition-colors">Sign in with Google</span>
                    <span className="text-sm text-[#737373]">Free forever. No ads.</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom: Scroll indicator + oversized brand watermark */}
            <div className="mt-16 lg:mt-24 flex items-end justify-between">
              <button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-3 text-sm text-[#737373] hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-[#343230] flex items-center justify-center group-hover:border-[var(--color-primary)] transition-colors">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </span>
                See how it works
              </button>
            </div>
          </div>
        </div>

        {/* Oversized brand watermark at bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
          <div className="font-[family-name:var(--font-instrument-serif)] text-[22vw] font-normal text-white/[0.02] leading-none tracking-[-0.05em] whitespace-nowrap translate-y-[40%]">
            MONEYBALL
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS - Editorial split layout
      ═══════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="relative py-32 lg:py-48 border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-20 lg:mb-32">
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em]">How it works</span>
            <span className="flex-1 h-px bg-[#1a1a1a]" />
          </div>

          {/* Three steps - Editorial asymmetric grid */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Step 1 */}
            <div className="lg:col-span-4 group">
              <div className="flex items-start gap-6">
                <span className="font-[family-name:var(--font-instrument-serif)] text-8xl lg:text-9xl text-[#1a1a1a] group-hover:text-[var(--color-primary)] transition-colors leading-none">
                  1
                </span>
                <div className="pt-4">
                  <h3 className="text-2xl font-medium mb-4 text-balance">Track the bet</h3>
                  <p className="text-[#a3a3a3] leading-relaxed">
                    Create a bet in seconds. Add friends by name, set the stakes. Everyone in the action sees the same info.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 - Offset down */}
            <div className="lg:col-span-4 lg:translate-y-24 group">
              <div className="flex items-start gap-6">
                <span className="font-[family-name:var(--font-instrument-serif)] text-8xl lg:text-9xl text-[#1a1a1a] group-hover:text-[var(--color-primary)] transition-colors leading-none">
                  2
                </span>
                <div className="pt-4">
                  <h3 className="text-2xl font-medium mb-4 text-balance">Resolve the winner</h3>
                  <p className="text-[#a3a3a3] leading-relaxed">
                    When the game ends, mark who won. The math happens automatically. No debates, no confusion.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Offset more */}
            <div className="lg:col-span-4 lg:translate-y-48 group">
              <div className="flex items-start gap-6">
                <span className="font-[family-name:var(--font-instrument-serif)] text-8xl lg:text-9xl text-[#1a1a1a] group-hover:text-[var(--color-primary)] transition-colors leading-none">
                  3
                </span>
                <div className="pt-4">
                  <h3 className="text-2xl font-medium mb-4 text-balance">Settle up clean</h3>
                  <p className="text-[#a3a3a3] leading-relaxed">
                    Your settlement ledger shows exactly who owes what. Pay up, record it, stay square with your crew.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VALUE PROPS - Magazine editorial layout
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-48 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Large statement */}
            <div>
              <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 text-balance">
                Built for the bets you make with your boys.
              </h2>
              <p className="text-lg text-[#a3a3a3] leading-relaxed mb-8 max-w-lg">
                Not a casino. Not a sportsbook. Not fantasy. Just a clean, private way to track who owes whom when the game is over.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-[#1a1a1a] text-sm text-[#a3a3a3] border border-[#262626]">Private groups</span>
                <span className="px-4 py-2 rounded-full bg-[#1a1a1a] text-sm text-[#a3a3a3] border border-[#262626]">No spreadsheets</span>
                <span className="px-4 py-2 rounded-full bg-[#1a1a1a] text-sm text-[#a3a3a3] border border-[#262626]">Clean settlement math</span>
              </div>
            </div>

            {/* Right: Product preview - stylized dashboard mock */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-3xl blur-3xl scale-90" />
              
              {/* Main card */}
              <div className="relative bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">MB</span>
                    </div>
                    <span className="font-[family-name:var(--font-instrument-serif)] text-lg">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#262626]" />
                    <div className="w-3 h-3 rounded-full bg-[#262626]" />
                    <div className="w-3 h-3 rounded-full bg-[#262626]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* KPI Row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-[#0a0a0a] rounded-xl p-4 border border-[#1a1a1a]">
                      <div className="text-[10px] text-[#737373] uppercase tracking-wider mb-1">Active</div>
                      <div className="text-2xl font-bold">7</div>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-xl p-4 border border-[#1a1a1a]">
                      <div className="text-[10px] text-[#737373] uppercase tracking-wider mb-1">Win Rate</div>
                      <div className="text-2xl font-bold text-[var(--color-success)]">64%</div>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-xl p-4 border border-[#1a1a1a]">
                      <div className="text-[10px] text-[#737373] uppercase tracking-wider mb-1">Net</div>
                      <div className="text-2xl font-bold text-[var(--color-success)]">+$175</div>
                    </div>
                  </div>

                  {/* Recent bets */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#1a1a1a]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-success)]">
                          M
                        </div>
                        <div>
                          <div className="font-medium text-sm">Lakers vs Celtics</div>
                          <div className="text-xs text-[#737373]">Marcus owes you</div>
                        </div>
                      </div>
                      <span className="font-bold text-[var(--color-success)]">+$50</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#1a1a1a]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-gold)]">
                          J
                        </div>
                        <div>
                          <div className="font-medium text-sm">Chiefs vs Eagles</div>
                          <div className="text-xs text-[#737373]">Pending with Jake</div>
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">Pending</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating settlement card - offset */}
              <div className="absolute -right-4 lg:-right-8 bottom-8 w-56 bg-[#141414] border border-[#262626] rounded-xl shadow-2xl p-4 hidden md:block">
                <div className="text-[10px] text-[#737373] uppercase tracking-wider mb-3">Who owes whom</div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-[10px] font-bold text-[var(--color-success)]">D</div>
                      <span className="text-sm">David</span>
                    </div>
                    <span className="text-sm font-bold text-[var(--color-success)]">+$75</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-error)]/10 flex items-center justify-center text-[10px] font-bold text-[var(--color-error)]">A</div>
                      <span className="text-sm">Alex</span>
                    </div>
                    <span className="text-sm font-bold text-[var(--color-error)]">-$25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRODUCT PREVIEW TRIPTYCH
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-48 border-t border-[#1a1a1a] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-[0.2em]">The Interface</span>
            <span className="flex-1 h-px bg-[#1a1a1a]" />
          </div>

          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              Three views. Zero clutter.
            </h2>
            <p className="text-lg text-[#a3a3a3] max-w-xl mx-auto">
              Everything you need to track, resolve, and settle bets with your crew.
            </p>
          </div>

          {/* Three preview cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Dashboard */}
            <div className="group">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 h-64 flex flex-col hover:border-[var(--color-primary)]/50 transition-colors">
                <div className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">Dashboard</div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-4xl font-bold mb-2">7</div>
                  <div className="text-sm text-[#737373]">Active bets this week</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                  <span className="text-[var(--color-success)]">64% win rate</span>
                  <span className="text-[#737373]">/</span>
                  <span className="text-[var(--color-success)]">+$175 net</span>
                </div>
              </div>
            </div>

            {/* All Bets */}
            <div className="group">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 h-64 flex flex-col hover:border-[var(--color-primary)]/50 transition-colors">
                <div className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">All Bets</div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between p-2 bg-[#0a0a0a] rounded-lg">
                    <span className="text-sm">Lakers vs Celtics</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">Won</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#0a0a0a] rounded-lg">
                    <span className="text-sm">Chiefs vs Eagles</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">Pending</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#0a0a0a] rounded-lg">
                    <span className="text-sm">CSK vs MI</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-error)]/10 text-[var(--color-error)]">Lost</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Settlements */}
            <div className="group">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 h-64 flex flex-col hover:border-[var(--color-primary)]/50 transition-colors">
                <div className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">Settlements</div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-success)]">M</div>
                      <span className="text-sm">Marcus</span>
                    </div>
                    <span className="font-bold text-[var(--color-success)]">+$50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-success)]">D</div>
                      <span className="text-sm">David</span>
                    </div>
                    <span className="font-bold text-[var(--color-success)]">+$25</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[var(--color-error)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-error)]">J</div>
                      <span className="text-sm">Jake</span>
                    </div>
                    <span className="font-bold text-[var(--color-error)]">-$30</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
                  <span className="text-xs text-[#737373]">Net position</span>
                  <span className="font-bold text-[var(--color-success)]">+$45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-48 border-t border-[#1a1a1a]">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center relative">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight mb-6 text-balance">
            Stop losing track of the action.
          </h2>
          <p className="text-lg text-[#a3a3a3] mb-12 max-w-md mx-auto">
            Sign in with Google, create your first bet in seconds, and never wonder who owes what again.
          </p>
          
          <button
            onClick={onSignIn}
            className="group inline-flex items-center gap-4 px-8 py-5 bg-white hover:bg-[#fafafa] text-[#0a0a0a] rounded-2xl font-medium text-base transition-all shadow-xl shadow-white/10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Get started with Google
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER - Minimal
      ═══════════════════════════════════════════════════════════════ */}
      <footer className="py-8 border-t border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">MB</span>
            </div>
            <span className="font-[family-name:var(--font-instrument-serif)] text-lg">MoneyBall</span>
          </div>
          <p className="text-sm text-[#737373]">
            Private sports wager tracking for friend groups.
          </p>
        </div>
      </footer>
    </div>
  );
}
