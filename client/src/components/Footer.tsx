import { MapPin, Mail, Linkedin, Twitter, Facebook, ExternalLink } from "lucide-react";
import logoSrc from "@assets/ChatGPT Image Apr 7, 2025, 01_26_24 PM (1) (1).png";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Glossy pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 25px 25px, white 1px, transparent 0)",
          backgroundSize: "50px 50px"
        }}
      ></div>
      
      {/* Glossy highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img src={logoSrc} alt="Excite Services Logo" className="h-24 w-auto filter brightness-0 invert" />
            </Link>
            <p className="text-gray-400 mb-6">Transforming data into actionable business intelligence since 2018.</p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-poppins font-semibold text-lg mb-5 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Data Collection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Data Storage
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Data Processing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Analytics & ML
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Data Governance
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-poppins font-semibold text-lg mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="font-poppins font-semibold text-lg mb-5 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-gray-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">2967 Dundas St W<br />Toronto, ON M6P 1Z2</span>
              </li>

              <li className="flex items-center">
                <Mail className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@exciteservices.ca</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <p className="text-gray-300 text-sm">
                Want to stay updated? Subscribe to our newsletter for insights on data technology trends.
              </p>
              <div className="mt-3 flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 bg-black/50 border border-white/20 rounded-l-md px-3 py-2 text-white text-sm focus:outline-none focus:border-white/50"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-md font-medium text-sm hover:bg-gray-200 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Excite Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
