import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Tabnify Privacy Policy. Learn how Tabnify Chrome extension handles your data. No data collection, no tracking, no analytics — your browsing stays private.",
    alternates: {
        canonical: "https://tabnify.vercel.app/privacy",
    },
    openGraph: {
        title: "Privacy Policy | Tabnify",
        description:
            "Tabnify does not collect, store, or transmit any personal data. All your data stays locally in your browser.",
        url: "https://tabnify.vercel.app/privacy",
        type: "website",
    },
};

export default function PrivacyPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://tabnify.vercel.app",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy",
                item: "https://tabnify.vercel.app/privacy",
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 sm:p-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                    <p className="text-gray-500 mb-8">Last updated: January 2, 2026</p>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                        Thank you for using <strong>Tabnify</strong>. Your privacy is extremely important to us.
                        This Privacy Policy explains how we handle your information when you use our Chrome extension.
                    </p>

                    {/* Section 1 */}
                    <section className="mb-8" aria-labelledby="section-1">
                        <h2 id="section-1" className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            <strong>Tabnify</strong> does <strong>NOT</strong> collect, store, or transmit any personal data to external servers.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            The extension may access the following browser data only locally on your device to provide its core functionality:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Tabs &amp; URLs</strong> – to organize tabs by domain, manage sessions, and enable focus mode.</li>
                            <li><strong>Browsing History (optional)</strong> – only to allow users to view and search their own history within the extension.</li>
                            <li><strong>Storage</strong> – to save session data, tab groups, and user preferences locally in the browser.</li>
                        </ul>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            All data is stored locally using Chrome&apos;s storage API and never sent to any server.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-8" aria-labelledby="section-2">
                        <h2 id="section-2" className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Data</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">Your data is used only for the following purposes:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Creating and restoring tab sessions</li>
                            <li>Grouping tabs by domain</li>
                            <li>Enabling focus mode (blocking or allowing specific sites)</li>
                            <li>Displaying browsing history inside the extension</li>
                            <li>Improving your browsing productivity</li>
                        </ul>
                        <p className="text-gray-700 mt-4 mb-2 leading-relaxed"><strong>We do not:</strong></p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Track users</li>
                            <li>Sell or share data</li>
                            <li>Use analytics or tracking scripts</li>
                            <li>Collect personally identifiable information</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-8" aria-labelledby="section-3">
                        <h2 id="section-3" className="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We do not share, sell, rent, or transfer your data to any third party.
                        </p>
                        <p className="text-gray-700 mt-2 leading-relaxed">
                            All data remains on your local device and under your control.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-8" aria-labelledby="section-4">
                        <h2 id="section-4" className="text-2xl font-semibold text-gray-900 mb-4">4. Permissions Explanation</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">The extension may request the following permissions:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Tabs</strong> – to read and manage open tabs.</li>
                            <li><strong>Storage</strong> – to save session data and preferences.</li>
                            <li><strong>History</strong> – to allow users to view and search their own browsing history.</li>
                            <li><strong>Host permissions</strong> – to enable domain-based grouping and focus features.</li>
                        </ul>
                        <p className="text-gray-700 mt-4 leading-relaxed">
                            These permissions are strictly used to provide the core functionality of the extension.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-8" aria-labelledby="section-5">
                        <h2 id="section-5" className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">We follow best practices to ensure your data remains secure:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>No external servers involved</li>
                            <li>No data transmission</li>
                            <li>No analytics or tracking tools</li>
                            <li>All data remains in your browser</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-8" aria-labelledby="section-6">
                        <h2 id="section-6" className="text-2xl font-semibold text-gray-900 mb-4">6. User Control</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">You can:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Delete sessions anytime</li>
                            <li>Clear stored data from Chrome settings</li>
                            <li>Uninstall the extension to remove all stored information</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-8" aria-labelledby="section-7">
                        <h2 id="section-7" className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            This Privacy Policy may be updated from time to time. Any changes will be reflected on this page with an updated date.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-4" aria-labelledby="section-8">
                        <h2 id="section-8" className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have any questions or concerns about this Privacy Policy, you can contact us at:
                        </p>
                        <p className="text-gray-700 mt-2">
                            📧{" "}
                            <a
                                href="mailto:devutsav0710@gmail.com"
                                className="text-blue-600 hover:text-blue-800 underline"
                            >
                                devutsav0710@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
