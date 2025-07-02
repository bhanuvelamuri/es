import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Team from "@/components/Team";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Final call-to-action section that will replace the contact form
const FinalCTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, black 1px, transparent 0)",
          backgroundSize: "50px 50px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-black text-white p-12 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Glossy highlight */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with a free consultation. Our data experts will help you build 
              a customized solution that meets your specific business needs.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <a href="/contact" className="flex items-center px-8 py-6">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Team />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
