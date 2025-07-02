import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">Last updated: June 3, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">1. What Are Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">2. How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Excite Services uses cookies to enhance your browsing experience and improve our services. We use cookies for:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Essential website functionality</li>
                <li>Analytics and performance monitoring</li>
                <li>Remembering your preferences</li>
                <li>Security and fraud prevention</li>
                <li>Improving user experience</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">3. Types of Cookies We Use</h2>
              
              <div className="space-y-8">
                <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-medium mb-4 text-blue-200">Essential Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                  <p className="text-sm text-gray-400">Duration: Session cookies (deleted when you close your browser)</p>
                </div>

                <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-medium mb-4 text-blue-200">Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
                  </p>
                  <p className="text-sm text-gray-400">Duration: Up to 2 years</p>
                  <p className="text-sm text-gray-400">Examples: Google Analytics, internal analytics</p>
                </div>

                <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-medium mb-4 text-blue-200">Preference Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies remember your preferences and settings to provide a more personalized experience.
                  </p>
                  <p className="text-sm text-gray-400">Duration: Up to 1 year</p>
                  <p className="text-sm text-gray-400">Examples: Language preferences, theme settings</p>
                </div>

                <div className="bg-slate-800/30 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-medium mb-4 text-blue-200">Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    With your consent, we may use marketing cookies to show you relevant advertisements and measure the effectiveness of our marketing campaigns.
                  </p>
                  <p className="text-sm text-gray-400">Duration: Up to 1 year</p>
                  <p className="text-sm text-gray-400">Examples: Social media pixels, advertising networks</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">4. Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some cookies on our website are set by third-party services. These may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website performance analysis</li>
                <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                <li><strong>Content Delivery Networks:</strong> For faster content loading</li>
                <li><strong>Customer Support Tools:</strong> For chat and support features</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">5. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium mb-4 text-blue-200">Browser Settings</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>View and delete cookies</li>
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when you close the browser</li>
                <li>Set exceptions for specific websites</li>
              </ul>

              <h3 className="text-xl font-medium mb-4 text-blue-200">Cookie Consent</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie banner that allows you to choose which types of cookies you want to accept. You can change your preferences at any time through our cookie settings panel.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">6. Impact of Disabling Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Login functionality may not work</li>
                <li>Preferences will not be saved</li>
                <li>Website performance may be reduced</li>
                <li>Personalized content may not be available</li>
                <li>Analytics data will not be collected</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">7. Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">8. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-white/10">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@exciteservices.com<br />
                  <strong>Address:</strong> 123 Data Street, Analytics City, AC 12345
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}