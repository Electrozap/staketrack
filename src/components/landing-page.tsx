"use client";

import { ArrowRight } from "lucide-react";

interface LandingPageProps {
  onSignIn: () => void;
}

export default function LandingPage({ onSignIn }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
      {/* Hero Section - Full Viewport Cinematic */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image with Editorial Treatment */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: "url('/images/hero-sports.jpg')" }}
          />
          {/* Cinematic dark vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent" />
        </div>

        {/* Minimal Navigation */}
        <nav className="relative z-20 px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight">ST</span>
              </div>
              <span className="font-serif text-xl tracking-tight">StakeTrack</span>
            </div>
            <button
              onClick={onSignIn}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              Sign in
            </button>
          </div>
        </nav>

        {/* Hero Content - Editorial Asymmetric Layout */}
        <div className="relative z-10 flex-1 flex items-end pb-16 lg:pb-24">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              {/* Main Headline - Large Editorial Typography */}
              <div className="lg:col-span-7">
                <h1 className="font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.02em] mb-6">
                  Track bets.
                  <br />
                  <span className="text-[var(--color-primary)]">Settle scores.</span>
                </h1>
                
                {/* CTA integrated naturally with tagline */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
                  <button
                    onClick={onSignIn}
                    className="group flex items-center gap-3 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </span>
                    <span className="border-b border-transparent group-hover:border-[var(--color-primary)] transition-colors">
                      Continue with Google
                    </span>
                  </button>
                  <span className="hidden sm:block w-px h-6 bg-[var(--color-border)]" />
                  <span className="text-sm text-[var(--color-text-faint)]">Free. Private. No ads.</span>
                </div>
              </div>

              {/* Editorial Side Text */}
              <div className="lg:col-span-5 lg:text-right">
                <p className="text-lg lg:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-md lg:ml-auto">
                  The private ledger for sports wagers between friends. Log bets, resolve winners, settle up.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Watermark */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
          <div className="text-[18vw] font-serif font-bold text-[var(--color-text)]/[0.02] leading-none tracking-[-0.04em] whitespace-nowrap translate-y-[35%]">
            STAKETRACK
          </div>
        </div>
      </section>

      {/* Value Prop Section - Editorial Grid */}
      <section className="py-24 lg:py-40 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left Column - Statement */}
            <div className="lg:col-span-5">
              <span className="inline-block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-[0.15em] mb-6">
                How it works
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-8 text-balance">
                Built for recurring sports banter between friends
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
                Not a casino. Not a sportsbook. Just a clean way to track who owes whom in your group.
              </p>
            </div>

            {/* Right Column - Steps as Editorial List */}
            <div className="lg:col-span-7 lg:pt-12">
              <div className="space-y-12">
                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 font-serif text-5xl text-[var(--color-border)] group-hover:text-[var(--color-primary)] transition-colors">
                      1
                    </span>
                    <div className="pt-2">
                      <h3 className="text-xl font-medium mb-2">Create the action</h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed">
                        Start a bet, add your friends by name, set the stakes. Everyone in the bet sees the same info.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 font-serif text-5xl text-[var(--color-border)] group-hover:text-[var(--color-primary)] transition-colors">
                      2
                    </span>
                    <div className="pt-2">
                      <h3 className="text-xl font-medium mb-2">Resolve winners</h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed">
                        When the game ends, mark who won. The math happens automatically. No debates, no confusion.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 font-serif text-5xl text-[var(--color-border)] group-hover:text-[var(--color-primary)] transition-colors">
                      3
                    </span>
                    <div className="pt-2">
                      <h3 className="text-xl font-medium mb-2">See who owes whom</h3>
                      <p className="text-[var(--color-text-muted)] leading-relaxed">
                        Your settlement ledger shows exactly who owes what. Pay up, record it, stay square.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview - Cinematic Floating UI */}
      <section className="py-24 lg:py-32 bg-[var(--color-surface)] relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold text-[var(--color-primary)] uppercase tracking-[0.15em] mb-4">
              The Interface
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
              Clean. Fast. No clutter.
            </h2>
          </div>

          {/* Floating UI Cards - Asymmetric Composition */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Dashboard Card */}
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">ST</span>
                  </div>
                  <span className="font-serif text-lg">Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-border)]" />
                </div>
              </div>
              
              <div className="p-6">
                {/* KPI Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[var(--color-surface)] rounded-xl p-4">
                    <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-1">Active Bets</div>
                    <div className="text-3xl font-bold">7</div>
                  </div>
                  <div className="bg-[var(--color-surface)] rounded-xl p-4">
                    <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-1">Win Rate</div>
                    <div className="text-3xl font-bold text-[var(--color-success)]">64%</div>
                  </div>
                  <div className="bg-[var(--color-surface)] rounded-xl p-4">
                    <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-1">Net Position</div>
                    <div className="text-3xl font-bold text-[var(--color-success)]">+$175</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-3">Recent Activity</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-[var(--color-surface)] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-success)]">
                        MJ
                      </div>
                      <div>
                        <div className="font-medium text-sm">Lakers vs Celtics</div>
                        <div className="text-xs text-[var(--color-text-faint)]">Marcus owes you</div>
                      </div>
                    </div>
                    <span className="font-bold text-[var(--color-success)]">+$50</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[var(--color-surface)] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-gold)]">
                        SK
                      </div>
                      <div>
                        <div className="font-medium text-sm">CSK vs MI</div>
                        <div className="text-xs text-[var(--color-text-faint)]">Pending with Sarah</div>
                      </div>
                    </div>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">Pending</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Settlement Card - Offset */}
            <div className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 w-64 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl shadow-xl p-4 hidden md:block">
              <div className="text-xs text-[var(--color-text-faint)] uppercase tracking-wider mb-3">Settlement</div>
              <div className="space-y-3">
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
              <div className="mt-3 pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-xs text-[var(--color-text-muted)]">Net</span>
                <span className="font-bold text-[var(--color-success)]">+$50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Minimal & Direct */}
      <section className="py-32 lg:py-48 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 text-balance">
            Stop losing track of side bets
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-12 max-w-lg mx-auto">
            Sign in, create your first bet in seconds, and never wonder who owes what again.
          </p>
          
          <button
            onClick={onSignIn}
            className="group inline-flex items-center gap-4 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl font-medium text-base transition-all"
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

      {/* Footer - Minimal */}
      <footer className="py-8 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-[var(--color-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-xs">ST</span>
            </div>
            <span className="font-serif">StakeTrack</span>
          </div>
          <p className="text-sm text-[var(--color-text-faint)]">
            Private sports wager tracking for friend groups
          </p>
        </div>
      </footer>
    </div>
  );
}
