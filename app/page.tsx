"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer overflow-hidden group ${isHovered ? "shadow-xl scale-105 border-transparent" : "hover:shadow-md"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${gradient}`}
      />

      {/* Icon container */}
      <div
        className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${gradient} ${isHovered ? "scale-110 rotate-3" : ""
          }`}
      >
        <span className="text-white text-2xl">{icon}</span>
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="relative text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

// Animated Stats Component
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tabnify Logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-xl font-bold text-gray-900">Tabnify</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy
            </Link>
            <a
              href="https://chromewebstore.google.com/detail/smart-tab-manager/mgigbjjhejcaigecdanajdmolpijbogm"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
            >
              Add to Chrome
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-indigo-700">
              Chrome Extension Available Now
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Tab Manager
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              for Productivity
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take control of your browser tabs. Group by domain, save sessions,
            focus on what matters, and browse your history effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://chromewebstore.google.com/detail/smart-tab-manager/mgigbjjhejcaigecdanajdmolpijbogm"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 110 18.352 9.176 9.176 0 010-18.352zM12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
              Install Free Extension
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <StatCard number="100%" label="Free Forever" />
            <StatCard number="0" label="Data Collected" />
            <StatCard number="∞" label="Tabs Managed" />
            <StatCard number="5+" label="Key Features" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your browser tabs efficiently and
              boost your productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Tab Grouping */}
            <FeatureCard
              icon="📁"
              title="Smart Tab Grouping"
              description="Automatically group your tabs by domain. Keep related tabs together and find what you need instantly. Ungroup anytime with a single click."
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            />

            {/* Feature 2: Focus Mode */}
            <FeatureCard
              icon="🎯"
              title="Focus Mode"
              description="Stay distraction-free! Add allowed domains to your focus list. Only tabs from those domains can open - perfect for deep work sessions."
              gradient="bg-gradient-to-br from-orange-500 to-red-500"
            />

            {/* Feature 3: Session Management */}
            <FeatureCard
              icon="💾"
              title="Session Manager"
              description="Save your current tabs as a session. Restore your workspace anytime with a single click. Never lose your research or work context again."
              gradient="bg-gradient-to-br from-green-500 to-emerald-500"
            />

            {/* Feature 4: History Search */}
            <FeatureCard
              icon="🔍"
              title="Advanced History Search"
              description="Search your browsing history by date, week, or page name. Find that important page you visited last Tuesday in seconds."
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            />

            {/* Feature 5: Quick Actions */}
            <FeatureCard
              icon="⚡"
              title="Quick Actions"
              description="Close all tabs, group all, or restore sessions with lightning-fast keyboard shortcuts and one-click actions."
              gradient="bg-gradient-to-br from-yellow-500 to-orange-500"
            />

            {/* Feature 6: Privacy First */}
            <FeatureCard
              icon="🔒"
              title="Privacy First"
              description="All your data stays locally in your browser. No tracking, no analytics, no data collection. Your browsing is your business."
              gradient="bg-gradient-to-br from-indigo-500 to-purple-500"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in seconds, boost productivity forever
            </p>
          </div>

          <div className="relative">
            {/* Connector line spanning all steps on desktop */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300" style={{ left: '20%', right: '20%' }} />

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative text-center p-8">
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Install Extension
                </h3>
                <p className="text-gray-600">
                  Add Tabnify to Chrome with one click. No account required, no
                  setup needed.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center p-8">
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Open Your Tabs
                </h3>
                <p className="text-gray-600">
                  Browse normally. Tabnify works silently in the background,
                  ready when you need it.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center p-8">
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Stay Organized
                </h3>
                <p className="text-gray-600">
                  Group tabs, save sessions, enable focus mode, and search history
                  - all from the popup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white" />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Tame Your Tabs?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
              Join thousands of users who have transformed their browsing
              experience with Tabnify.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/smart-tab-manager/mgigbjjhejcaigecdanajdmolpijbogm"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 110 18.352 9.176 9.176 0 010-18.352zM12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
              Add to Chrome - It&apos;s Free!
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Tabnify Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-xl font-bold text-gray-900">Tabnify</span>
            </div>

            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 Tabnify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
