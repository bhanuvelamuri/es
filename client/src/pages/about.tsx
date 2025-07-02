import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import { UserRoundCheck, GitBranch, Headset, Award, Clock, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* About Banner */}
        <section className="gradient-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
                About Excite Services
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                We're a team of data experts passionate about turning complex data challenges into business opportunities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2018, Excite Services began with a simple mission: help businesses make sense of their growing data. 
                  What started as a small team of data analysts has grown into a comprehensive data solutions provider serving clients across industries.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founders saw firsthand how companies were collecting vast amounts of data but struggling to turn it into actionable insights. 
                  They built Excite Services to bridge that gap, bringing together technical expertise with business acumen.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have helped hundreds of organizations transform their approach to data, creating measurable business impact and competitive advantage.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800" 
                  alt="Excite Services team collaboration" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering the highest quality solutions, staying at the forefront of data technology and best practices.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Efficiency</h3>
                <p className="text-gray-600">
                  We value your time and resources, focusing on solutions that deliver maximum impact with minimal complexity.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We see ourselves as an extension of your team, working collaboratively to achieve your business objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section (reusing the component) */}
        <Team />
        
        {/* Industry Solutions */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">Industry Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Custom data solutions for diverse industry needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" width="24" height="24">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Financial Services</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Risk analysis, fraud detection, and personalized financial insights powered by advanced data analytics.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Predictive risk modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Real-time fraud detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Regulatory compliance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" width="24" height="24">
                    <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
                    <path d="m13 11-4 6h6l-4 6"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Improving patient outcomes and operational efficiency through data-driven healthcare solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Patient outcome prediction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Medical imaging analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Resource optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" width="24" height="24">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="M6 8h.01"></path>
                    <path d="M10 8h.01"></path>
                    <path d="M14 8h.01"></path>
                    <path d="M18 8h.01"></path>
                    <path d="M6 12h.01"></path>
                    <path d="M10 12h.01"></path>
                    <path d="M14 12h.01"></path>
                    <path d="M18 12h.01"></path>
                    <path d="M6 16h.01"></path>
                    <path d="M10 16h.01"></path>
                    <path d="M14 16h.01"></path>
                    <path d="M18 16h.01"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Manufacturing</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Optimizing production processes and supply chains with predictive analytics and IoT integration.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Quality control automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Supply chain optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" width="24" height="24">
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Retail</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Enhancing customer experiences and operational efficiency through data-driven retail solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Customer journey analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Inventory optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    <span>Personalized recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;