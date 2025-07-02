import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative py-16 md:py-24 bg-black text-white overflow-hidden">
      {/* Glossy overlay with subtle pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 15px 15px, white 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }}
      ></div>
      
      {/* Diagonal glossy highlight */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 opacity-20"
        style={{
          background: "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
          animation: "gradientMove 8s ease infinite"
        }}
      ></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto backdrop-blur-sm">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-8">
            Ready to Leverage Your Data?
          </h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">
            Our experts are ready to help you implement the right data solution for your business needs.
          </p>
          <Button 
            asChild
            size="lg"
            className="
              bg-white text-black font-medium px-8 py-6
              hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
              transition-all duration-300 rounded-md
            "
          >
            <a href="#contact" className="flex items-center">
              Get Started Today
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Gradient animation is handled in global CSS */}
    </section>
  );
};

export default CallToAction;
