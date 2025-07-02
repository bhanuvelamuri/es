import { 
  Gauge, 
  Lightbulb, 
  Lock, 
  Maximize,
  ChevronRight,
  ArrowRight,
  Shield,
  TrendingUp,
  BarChart,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import techGridSvg from "../assets/tech-grid.svg";

// Interactive feature card with hover effects
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  index,
  delay = 0
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
  delay?: number;
}) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 border border-gray-100 transition-all duration-500 
                 hover:shadow-xl hover:translate-y-[-8px] group relative overflow-hidden"
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {/* Glass highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon background with glow effect */}
      <div className="relative z-10 mb-5">
        <div className="w-14 h-14 rounded-lg bg-black/5 flex items-center justify-center 
                        group-hover:bg-black group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] 
                        transition-all duration-300">
          <Icon 
            className="text-black group-hover:text-white transition-colors duration-300" 
            size={24} 
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-poppins font-semibold text-xl text-black mb-3 
                      transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center text-black font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
            Learn more
          </span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

// Compact feature item for the side list
const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description,
  index 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <div 
      className="flex items-start rounded-xl transition-all duration-500 
                hover:bg-black/5 group p-4"
      style={{
        transitionDelay: `${index * 50}ms`
      }}
    >
      <div className="flex-shrink-0 mr-4">
        <div className="w-11 h-11 rounded-lg bg-black/5 flex items-center justify-center transition-all duration-300
                      group-hover:bg-black group-hover:shadow-md">
          <Icon className="text-black group-hover:text-white transition-colors duration-300" size={20} />
        </div>
      </div>
      <div>
        <h3 className="font-poppins font-semibold text-lg text-black mb-1">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <img src={techGridSvg} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Glossy gradient effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(240,240,240,0.8) 0%, transparent 60%)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-black font-medium text-sm mb-6">
            DATA-DRIVEN EXCELLENCE
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-black mb-6 leading-tight">
            Turn Your Data Into Measurable Business Results
          </h2>
          <p className="text-gray-600 text-lg mx-auto leading-relaxed">
            At Excite Services, we understand that effective data management is more than just technology—it's about 
            driving real business outcomes that impact your bottom line.
          </p>
        </div>
        
        {/* Main feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: BarChart,
              title: "Performance Analytics",
              description: "Transform raw metrics into actionable insights. Our analytics solutions help you identify bottlenecks and opportunities."
            },
            {
              icon: Lightbulb,
              title: "Strategic Intelligence",
              description: "Leverage predictive analytics to anticipate market trends and make forward-thinking business decisions."
            },
            {
              icon: Shield,
              title: "Security & Compliance",
              description: "Protect your valuable data assets while meeting all regulatory requirements with our comprehensive frameworks."
            },
            {
              icon: Zap,
              title: "Streamlined Operations",
              description: "Automate data workflows and eliminate redundancies to boost operational efficiency across your organization."
            },
            {
              icon: Maximize,
              title: "Scalable Architecture",
              description: "Build flexible data systems that grow seamlessly with your business needs without reworking your infrastructure."
            },
            {
              icon: TrendingUp,
              title: "Revenue Optimization",
              description: "Identify untapped opportunities and optimize pricing strategies based on comprehensive data analysis."
            }
          ].map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              delay={index * 50}
            />
          ))}
        </div>
        
        {/* Case study section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Data visualization image (left side) */}
            <div className="lg:col-span-2 relative overflow-hidden h-full min-h-[300px]">
              <div className="absolute inset-0 bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800" 
                  alt="Advanced data analytics dashboard" 
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                
                {/* Success metrics with glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                  <p className="text-6xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70" 
                    style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
                    42%
                  </p>
                  <p className="uppercase tracking-wider text-sm text-white/80">Revenue Increase</p>
                </div>
              </div>
            </div>
            
            {/* Content (right side) */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="flex flex-col h-full">
                <h3 className="font-poppins font-bold text-2xl md:text-3xl text-black mb-4">
                  Real Results. Real Impact.
                </h3>
                
                <p className="text-gray-600 mb-8">
                  We helped a leading e-commerce company transform their data operations, resulting in significant improvements 
                  across all key business metrics. Our solutions delivered actionable insights that directly translated to business growth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Gauge,
                      title: "Operational Efficiency",
                      description: "Reduced processing time by 64% through advanced data pipeline optimization."
                    },
                    {
                      icon: Lock,
                      title: "Enhanced Security",
                      description: "Implemented robust data governance framework with zero compliance violations."
                    }
                  ].map((feature, index) => (
                    <FeatureItem 
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      index={index}
                    />
                  ))}
                </div>
                
                <div className="mt-auto pt-8">
                  <Button 
                    asChild
                    className="bg-black text-white hover:bg-black/90 hover:shadow-lg"
                  >
                    <a href="/case-studies" className="flex items-center">
                      View all case studies
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glow effect is handled through the className */}
    </section>
  );
};

export default Features;
