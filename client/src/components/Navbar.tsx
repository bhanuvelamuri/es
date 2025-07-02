import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import logoSrc from "@assets/ChatGPT Image Apr 7, 2025, 01_02_16 PM (1).png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isHomePage = location === "/";

  // Navigation links - all routing to separate pages
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md ${
        isScrolled 
          ? "shadow-xl border-b border-gray-200 transform scale-y-95 py-2" 
          : "shadow-sm border-b border-gray-100 transform scale-y-100 py-0"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto px-4">
        <nav className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <Link href="/" className="flex items-center relative group">
            <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-black/5 to-transparent blur-sm transition-all duration-500"></div>
            <img src={logoSrc} alt="Excite Services Logo" className={`w-auto relative transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'}`} />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => {
              const isActive = location === link.path;
              
              return (
                <Link 
                  key={link.name}
                  href={link.path}
                  className={`
                    px-4 py-2 mx-1 rounded-md font-medium text-sm transition-all duration-300
                    futuristic-link
                    ${isActive
                      ? "text-white active-nav-link" 
                      : "text-gray-800 hover:text-black"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-black focus:outline-none relative overflow-hidden group"
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
            <div className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              <span className={`block w-5 absolute h-0.5 bg-black transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block w-5 absolute h-0.5 bg-black transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 absolute h-0.5 bg-black transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden bg-white/95 backdrop-blur-md overflow-hidden transition-all duration-500 
          ${mobileMenuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}
        `}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link, idx) => {
              const isActive = location === link.path;
              
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`
                    px-4 py-3 rounded-md font-medium text-sm transition-all duration-300 futuristic-link
                    ${isActive 
                      ? "text-white active-nav-link" 
                      : "text-gray-800 hover:text-black"
                    }
                  `}
                  onClick={closeMobileMenu}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent my-2"></div>
            <Link 
              href="/careers"
              className="px-4 py-3 rounded-md font-medium text-sm text-gray-800 futuristic-link"
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
