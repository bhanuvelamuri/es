import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Contact Banner */}
        <section className="gradient-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Have questions about our services or ready to start your data journey? Our team is here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information with Map */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Whether you need a complete data solution or have questions about our services, we're ready to assist you every step of the way.
                </p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg text-gray-800 mb-1">Our Office</h3>
                      <p className="text-gray-600">
                        2967 Dundas St W<br />
                        Toronto, ON M6P 1Z2<br />
                        Canada
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">
                        Main: (343) 575-7307<br />
                        Support: (343) 575-7308
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        General Inquiries: info@exciteservices.ca<br />
                        Support: support@exciteservices.ca
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-lg text-gray-800 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4">How We Work</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-600 ml-3">Free initial consultation to understand your needs</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-600 ml-3">Tailored proposal with clear pricing and timelines</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-600 ml-3">Collaborative approach throughout project implementation</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-primary flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-600 ml-3">Ongoing support and optimization after deployment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-8">
                  {/* Google Maps Embed - Note: In real implementation, you'd use Google Maps API or similar */}
                  <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2683225188146!2d-79.46761568469979!3d43.66184507912079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b343e8b6d7167%3A0x87c33f59106bcd38!2s2967%20Dundas%20St%20W%2C%20Toronto%2C%20ON%20M6P%201Z2%2C%20Canada!5e0!3m2!1sen!2sus!4v1618875482928!5m2!1sen!2sus" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="Excite Services Office Location"
                    ></iframe>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-4">
                    Fill out our contact form below and one of our experts will reach out to schedule your free consultation.
                  </p>
                  <p className="text-gray-600">
                    You can also call us directly at <span className="font-medium">(343) 575-7307</span> to speak with a team member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form (reusing the component) */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;