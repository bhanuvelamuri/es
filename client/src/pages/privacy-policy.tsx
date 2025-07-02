import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">Last updated: June 3, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Excite Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our data solutions services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-4 text-blue-200">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Contact us through our website forms</li>
                <li>Request information about our services</li>
                <li>Apply for employment opportunities</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Engage with our customer support</li>
              </ul>

              <h3 className="text-xl font-medium mb-4 text-blue-200">Usage Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We automatically collect certain information about your device and usage patterns, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website addresses</li>
                <li>Device and operating system information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Processing job applications</li>
                <li>Improving our website and services</li>
                <li>Sending administrative information and updates</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transaction or merger</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">7. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
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