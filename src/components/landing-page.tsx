"use client";

import { Check, ArrowRight, Users, Target, CreditCard, Zap } from "lucide-react";

interface LandingPageProps {
  onSignIn: () => void;
}

export default function LandingPage({ onSignIn }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <span className="font-serif text-xl tracking-tight">StakeTrack</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--color-text-muted)]">
            <a href="#how-it-works" className="hover:text-[var(--color-text)] transition-colors">
              How It Works
            </a>
            <a href="#features" className="hover:text-[var(--color-text)] transition-colors">
              Features
            </a>
            <a href="#preview" className="hover:text-[var(--color-text)] transition-colors">
              Preview
            </a>
          </div>
          <button
            onClick={onSignIn}
            className="px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-lg font-medium text-sm transition-colors"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-sports.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/90 to-[var(--color-bg)]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
                Private Friend-Group Tracking
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight mb-6 text-balance">
              Track bets.
              <br />
              <span className="text-[var(--color-primary)]">Settle scores.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-lg">
              The private ledger for sports wagers between friends. Log bets, resolve winners, and
              always know exactly who owes whom.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onSignIn}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign in with Google
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-[var(--color-border)] hover:bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl font-medium text-base transition-colors"
              >
                See how it works
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-text-faint)] mb-4">
                Built for sports fans who keep score
              </p>
              <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[var(--color-success)]" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[var(--color-success)]" />
                  <span>No ads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[var(--color-success)]" />
                  <span>Private by design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <div className="text-[15vw] font-serif font-bold text-[var(--color-text)]/[0.03] leading-none tracking-tighter whitespace-nowrap translate-y-[30%]">
            STAKETRACK
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-balance">
              Three steps to organized bets
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
              No more spreadsheets. No more forgotten debts. Just clean, simple tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-b from-[var(--color-primary)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Create the action</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Start a bet, add your friends by name, set the stakes. Everyone in the bet sees
                  the same info.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-b from-[var(--color-primary)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Resolve winners</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  When the game ends, mark who won. The math happens automatically. No debates, no
                  confusion.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-b from-[var(--color-primary)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">See who owes whom</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Your settlement ledger shows exactly who owes what. Pay up, record it, stay
                  square.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-4 block">
                Why StakeTrack
              </span>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 text-balance">
                Built for friend groups who keep score
              </h2>
              <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed">
                StakeTrack is designed for recurring sports banter and accountability between
                friends. Not a casino. Not a sportsbook. Just a clean way to track your group.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Private friend groups</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Your bets are only visible to the people in them. No public feeds, no
                      strangers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Clean resolution</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      One tap to mark winners. The settlement math is done for you instantly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Settlement clarity</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Know exactly who owes you and who you owe. Record payments when they happen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast onboarding</h4>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Sign in with Google. Start tracking in seconds. No forms, no friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 rounded-3xl blur-2xl" />
              <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-2xl">
                {/* Mock Settlement Card */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-[var(--color-text-faint)] uppercase tracking-wider mb-4">
                    Your Settlements
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-[var(--color-bg)] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-success)]">
                          MJ
                        </div>
                        <div>
                          <div className="font-medium">Marcus J.</div>
                          <div className="text-xs text-[var(--color-text-muted)]">owes you</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-[var(--color-success)]">+$150</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[var(--color-bg)] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-error)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-error)]">
                          SK
                        </div>
                        <div>
                          <div className="font-medium">Sarah K.</div>
                          <div className="text-xs text-[var(--color-text-muted)]">you owe</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-[var(--color-error)]">-$75</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[var(--color-bg)] rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-success)]">
                          DT
                        </div>
                        <div>
                          <div className="font-medium">David T.</div>
                          <div className="text-xs text-[var(--color-text-muted)]">owes you</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-[var(--color-success)]">+$50</div>
                    </div>
                  </div>
                </div>
                {/* Net Position */}
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">Net position</span>
                    <span className="text-2xl font-bold text-[var(--color-success)]">+$125</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section id="preview" className="py-24 lg:py-32 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-4 block">
              Preview
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-balance">
              A clean interface for messy bets
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
              Everything you need, nothing you don&apos;t. Dashboard, bet history, and settlements.
            </p>
          </div>

          {/* App Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Dashboard Preview */}
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-medium text-[var(--color-text-muted)]">Dashboard</span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[var(--color-surface)] rounded-lg p-3">
                    <div className="text-xs text-[var(--color-text-faint)] mb-1">Your Bets</div>
                    <div className="text-2xl font-bold">12</div>
                  </div>
                  <div className="bg-[var(--color-surface)] rounded-lg p-3">
                    <div className="text-xs text-[var(--color-text-faint)] mb-1">Pending</div>
                    <div className="text-2xl font-bold text-[var(--color-gold)]">3</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-[var(--color-surface)] rounded-lg" />
                  <div className="h-8 bg-[var(--color-surface)] rounded-lg" />
                </div>
              </div>
            </div>

            {/* All Bets Preview */}
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
                <span className="text-xs font-medium text-[var(--color-text-muted)]">All Bets</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between p-3 bg-[var(--color-surface)] rounded-lg">
                  <div>
                    <div className="text-sm font-medium">Lakers vs Celtics</div>
                    <div className="text-xs text-[var(--color-text-faint)]">NBA</div>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                    PENDING
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[var(--color-surface)] rounded-lg">
                  <div>
                    <div className="text-sm font-medium">CSK vs MI</div>
                    <div className="text-xs text-[var(--color-text-faint)]">IPL</div>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-[var(--color-success)]/10 text-[var(--color-success)]">
                    WON
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[var(--color-surface)] rounded-lg">
                  <div>
                    <div className="text-sm font-medium">Chiefs vs 49ers</div>
                    <div className="text-xs text-[var(--color-text-faint)]">NFL</div>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-[var(--color-error)]/10 text-[var(--color-error)]">
                    LOST
                  </span>
                </div>
              </div>
            </div>

            {/* Settlements Preview */}
            <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-success)]" />
                <span className="text-xs font-medium text-[var(--color-text-muted)]">
                  Settlements
                </span>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="text-xs text-[var(--color-text-faint)] mb-2">You are owed</div>
                  <div className="flex items-center gap-2 p-3 bg-[var(--color-success)]/5 rounded-lg border border-[var(--color-success)]/20">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-success)]">
                      A
                    </div>
                    <span className="text-sm flex-1">Alex</span>
                    <span className="font-bold text-[var(--color-success)]">$200</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-text-faint)] mb-2">You owe</div>
                  <div className="flex items-center gap-2 p-3 bg-[var(--color-error)]/5 rounded-lg border border-[var(--color-error)]/20">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-error)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-error)]">
                      J
                    </div>
                    <span className="text-sm flex-1">Jordan</span>
                    <span className="font-bold text-[var(--color-error)]">$50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-primary)]/5 to-[var(--color-bg)]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6 text-balance">
            Stop losing track of side bets
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 max-w-xl mx-auto">
            Sign in with Google, create your first bet in seconds, and never wonder who owes what
            again.
          </p>
          <button
            onClick={onSignIn}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Get started with Google
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">ST</span>
            </div>
            <span className="font-serif text-lg">StakeTrack</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">
            Private sports wager tracking for friend groups.
          </p>
        </div>
      </footer>
    </div>
  );
}
