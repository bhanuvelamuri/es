import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-gray-400 text-lg">Last updated: June 3, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing and using Excite Services' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">2. Description of Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Excite Services provides comprehensive data solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Data collection and integration services</li>
                <li>Data storage and management solutions</li>
                <li>Data processing and analytics</li>
                <li>Business intelligence and reporting</li>
                <li>Data governance and compliance</li>
                <li>Consulting and implementation services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">3. User Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use our services for illegal or harmful activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">4. Data Ownership and Usage</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Client data remains the property of the client. Excite Services:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Will not sell or share client data with third parties without consent</li>
                <li>May use aggregated, anonymized data for service improvement</li>
                <li>Will implement appropriate security measures to protect data</li>
                <li>Will comply with applicable data protection regulations</li>
                <li>Will return or delete client data upon contract termination</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">5. Service Availability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                While we strive to maintain high service availability, we cannot guarantee uninterrupted service. We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Perform scheduled maintenance</li>
                <li>Implement security updates</li>
                <li>Modify or discontinue services with notice</li>
                <li>Suspend access for security or compliance reasons</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">6. Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For paid services:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Fees are due according to the agreed payment schedule</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Price changes will be communicated in advance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">7. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Excite Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">8. Indemnification</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless Excite Services from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of and access to the services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">9. Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate this agreement with appropriate notice as specified in the service contract. Upon termination, access to services will cease, and data will be handled according to our data retention policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">10. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will provide notice of material changes through our website or direct communication. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-300">11. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-white/10">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@exciteservices.com<br />
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