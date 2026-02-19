import Link from "next/link";
import Image from "next/image";
import FeatureCard from "./components/FeatureCard";
import StatCard from "./components/StatCard";

const siteUrl = "https://tabnify.vercel.app";

// JSON-LD Structured Data for SEO
function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tabnify",
    url: siteUrl,
    description:
      "Tabnify is a free Chrome extension that helps you organize browser tabs. Group tabs by domain, save sessions, enable focus mode, search history, and boost productivity.",
    publisher: {
      "@type": "Organization",
      name: "Tabnify",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tabnify",
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Smart tab manager Chrome extension. Group tabs by domain, save sessions, enable focus mode, and search browsing history. 100% free with no data collection.",
    screenshot: `${siteUrl}/og-image.png`,
    softwareVersion: "1.0",
    downloadUrl: "https://chrome.google.com/webstore",
    browserRequirements: "Requires Google Chrome",
    permissions: "tabs, storage, history",
    featureList: [
      "Smart Tab Grouping by Domain",
      "Focus Mode",
      "Session Manager",
      "Advanced History Search",
      "Quick Actions",
      "Privacy First – No Data Collection",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Tabnify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tabnify is a free Chrome extension that helps you organize browser tabs. It lets you group tabs by domain, save and restore sessions, enable focus mode to block distractions, and search your browsing history — all without collecting any data.",
        },
      },
      {
        "@type": "Question",
        name: "Is Tabnify free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Tabnify is completely free to use. There are no premium plans, no ads, and no hidden costs. It will remain free forever.",
        },
      },
      {
        "@type": "Question",
        name: "Does Tabnify collect any personal data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Tabnify does not collect, store, or transmit any personal data. All your data stays locally in your browser using Chrome's storage API. There is no tracking, no analytics, and no data sharing.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Focus Mode work in Tabnify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Focus Mode lets you add allowed domains to a whitelist. When enabled, only tabs from those domains can be opened — helping you stay distraction-free during deep work sessions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I save and restore my browser sessions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Tabnify's Session Manager lets you save all your currently open tabs as a session. You can restore any saved session with a single click, so you never lose your research or work context.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        {/* Navigation */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3" aria-label="Tabnify Home">
              <Image
                src="/logo.png"
                alt="Tabnify Logo"
                width={40}
                height={40}
                className="rounded-xl"
                priority
              />
              <span className="text-xl font-bold text-gray-900">Tabnify</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQ
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
                rel="noopener noreferrer"
              >
                Add to Chrome
              </a>
            </div>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6" aria-labelledby="hero-heading">
            <div className="max-w-7xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-indigo-700">
                  Chrome Extension Available Now
                </span>
              </div>

              {/* Main heading */}
              <h1
                id="hero-heading"
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Smart Tab Manager
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  for Productivity
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Take control of your browser tabs with <strong>Tabnify</strong>. Group tabs by domain, save sessions,
                focus on what matters, and browse your history effortlessly — all for free.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a
                  href="https://chromewebstore.google.com/detail/smart-tab-manager/mgigbjjhejcaigecdanajdmolpijbogm"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
                  rel="noopener noreferrer"
                  aria-label="Install Tabnify Chrome Extension for free"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 110 18.352 9.176 9.176 0 010-18.352zM12 6a6 6 0 100 12 6 6 0 000-12z" />
                  </svg>
                  Install Free Extension
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
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
          <section
            id="features"
            className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50/50"
            aria-labelledby="features-heading"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="features-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  Powerful Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Everything you need to manage your browser tabs efficiently and
                  boost your productivity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  icon="📁"
                  title="Smart Tab Grouping"
                  description="Automatically group your tabs by domain. Keep related tabs together and find what you need instantly. Ungroup anytime with a single click."
                  gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
                />
                <FeatureCard
                  icon="🎯"
                  title="Focus Mode"
                  description="Stay distraction-free! Add allowed domains to your focus list. Only tabs from those domains can open - perfect for deep work sessions."
                  gradient="bg-gradient-to-br from-orange-500 to-red-500"
                />
                <FeatureCard
                  icon="💾"
                  title="Session Manager"
                  description="Save your current tabs as a session. Restore your workspace anytime with a single click. Never lose your research or work context again."
                  gradient="bg-gradient-to-br from-green-500 to-emerald-500"
                />
                <FeatureCard
                  icon="🔍"
                  title="Advanced History Search"
                  description="Search your browsing history by date, week, or page name. Find that important page you visited last Tuesday in seconds."
                  gradient="bg-gradient-to-br from-purple-500 to-pink-500"
                />
                <FeatureCard
                  icon="⚡"
                  title="Quick Actions"
                  description="Close all tabs, group all, or restore sessions with lightning-fast keyboard shortcuts and one-click actions."
                  gradient="bg-gradient-to-br from-yellow-500 to-orange-500"
                />
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
          <section className="py-20 px-6" aria-labelledby="how-it-works-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="how-it-works-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  How It Works
                </h2>
                <p className="text-xl text-gray-600">
                  Get started in seconds, boost productivity forever
                </p>
              </div>

              <div className="relative">
                {/* Connector line */}
                <div
                  className="hidden md:block absolute top-16 h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
                  style={{ left: "20%", right: "20%" }}
                  aria-hidden="true"
                />

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="relative text-center p-8">
                    <div
                      className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30"
                      aria-hidden="true"
                    >
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
                    <div
                      className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30"
                      aria-hidden="true"
                    >
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
                    <div
                      className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30"
                      aria-hidden="true"
                    >
                      3
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Stay Organized
                    </h3>
                    <p className="text-gray-600">
                      Group tabs, save sessions, enable focus mode, and search history
                      — all from the popup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section — Great for SEO! */}
          <section
            id="faq"
            className="py-20 px-6 bg-gradient-to-b from-indigo-50/30 to-white"
            aria-labelledby="faq-heading"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="faq-heading" className="text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Got questions? We&apos;ve got answers.
                </p>
              </div>

              <div className="space-y-6">
                <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    What is Tabnify?
                    <span className="ml-4 text-indigo-500 group-open:rotate-45 transition-transform duration-200 text-2xl" aria-hidden="true">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Tabnify is a free Chrome extension that helps you organize browser tabs. It lets you group tabs by domain, save and restore sessions, enable focus mode to block distractions, and search your browsing history — all without collecting any data.
                  </div>
                </details>

                <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    Is Tabnify free?
                    <span className="ml-4 text-indigo-500 group-open:rotate-45 transition-transform duration-200 text-2xl" aria-hidden="true">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Yes, Tabnify is completely free to use. There are no premium plans, no ads, and no hidden costs. It will remain free forever.
                  </div>
                </details>

                <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    Does Tabnify collect any personal data?
                    <span className="ml-4 text-indigo-500 group-open:rotate-45 transition-transform duration-200 text-2xl" aria-hidden="true">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    No. Tabnify does not collect, store, or transmit any personal data. All your data stays locally in your browser using Chrome&apos;s storage API. There is no tracking, no analytics, and no data sharing.
                  </div>
                </details>

                <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    How does the Focus Mode work?
                    <span className="ml-4 text-indigo-500 group-open:rotate-45 transition-transform duration-200 text-2xl" aria-hidden="true">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Focus Mode lets you add allowed domains to a whitelist. When enabled, only tabs from those domains can be opened — helping you stay distraction-free during deep work sessions.
                  </div>
                </details>

                <details className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                    Can I save and restore my browser sessions?
                    <span className="ml-4 text-indigo-500 group-open:rotate-45 transition-transform duration-200 text-2xl" aria-hidden="true">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    Yes! Tabnify&apos;s Session Manager lets you save all your currently open tabs as a session. You can restore any saved session with a single click, so you never lose your research or work context.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white" />
              </div>

              <div className="relative">
                <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Tame Your Tabs?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
                  Join thousands of users who have transformed their browsing
                  experience with Tabnify.
                </p>
                <a
                  href="https://chromewebstore.google.com/detail/smart-tab-manager/mgigbjjhejcaigecdanajdmolpijbogm"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-indigo-600 font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  rel="noopener noreferrer"
                  aria-label="Add Tabnify to Chrome for free"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 110 18.352 9.176 9.176 0 010-18.352zM12 6a6 6 0 100 12 6 6 0 000-12z" />
                  </svg>
                  Add to Chrome — It&apos;s Free!
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-100" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-3" aria-label="Tabnify Home">
                <Image
                  src="/logo.png"
                  alt="Tabnify Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <span className="text-xl font-bold text-gray-900">Tabnify</span>
              </Link>

              <nav aria-label="Footer navigation">
                <div className="flex items-center gap-8">
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <a
                    href="mailto:devutsav0710@gmail.com"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </nav>

              <p className="text-gray-500 text-sm">
                © 2026 Tabnify. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
