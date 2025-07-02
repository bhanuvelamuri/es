import { 
  UserRoundCheck, 
  GitBranch, 
  Headset, 
  Workflow, 
  FileCode, 
  Award,
  ArrowRight,
  BrainCircuit,
  BarChart4,
  Code2,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Expertise card
const ExpertiseCard = ({ 
  icon: Icon, 
  title, 
  items,
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  items: string[];
  delay: number;
}) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="w-14 h-14 rounded-lg bg-black/5 flex items-center justify-center mb-5 group-hover:bg-black transition-all duration-300">
          <Icon className="text-black group-hover:text-white transition-colors duration-300" size={24} />
        </div>
        <h4 className="font-poppins font-semibold text-xl text-black mb-4">{title}</h4>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span className="text-gray-600 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Value proposition item
const ValueItem = ({ 
  icon: Icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay: number;
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-md group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-black/5 flex items-center justify-center mb-5 group-hover:bg-black transition-all duration-300">
        <Icon className="text-black group-hover:text-white transition-colors duration-300" size={24} />
      </div>
      <h4 className="font-poppins font-semibold text-lg text-black mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Team = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-100 to-transparent opacity-80 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gray-100 to-transparent opacity-80 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-black font-medium text-sm mb-6">
            OUR EXPERTISE
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-black mb-6 leading-tight">
            Data Excellence in Everything We Do
          </h2>
          <p className="text-gray-600 text-lg mx-auto leading-relaxed">
            Excite Services brings together specialized expertise across the entire data lifecycle,
            delivering comprehensive solutions to transform your business.
          </p>
        </div>
        
        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: BrainCircuit,
              title: "Data Science",
              items: [
                "Predictive Analytics",
                "Machine Learning",
                "Statistical Modeling",
                "Natural Language Processing",
                "Computer Vision"
              ]
            },
            {
              icon: BarChart4,
              title: "Data Analytics",
              items: [
                "Business Intelligence",
                "Data Visualization",
                "Performance Metrics",
                "Trend Analysis",
                "Reporting Automation"
              ]
            },
            {
              icon: Code2,
              title: "Data Engineering",
              items: [
                "ETL Pipeline Development",
                "Big Data Architecture",
                "Data Lake Implementation",
                "Database Optimization",
                "Streaming Solutions"
              ]
            },
            {
              icon: Shield,
              title: "Data Governance",
              items: [
                "Compliance Frameworks",
                "Security Implementation",
                "Privacy Protection",
                "Data Quality Management",
                "Policy Development"
              ]
            }
          ].map((expertise, index) => (
            <ExpertiseCard 
              key={index}
              icon={expertise.icon}
              title={expertise.title}
              items={expertise.items}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* Value proposition */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-100 mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-10">
              <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-black mb-4">Why Choose Excite Services?</h3>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in data solutions, our team combines technical expertise with business acumen 
                to deliver results that matter for your organization.
              </p>
              <Button 
                asChild
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <a href="/about" className="flex items-center">
                  About Our Company
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: UserRoundCheck,
                  title: "Expert Consultants",
                  description: "Our team includes certified data engineers, architects, and analysts with expertise across various industries and technologies."
                },
                {
                  icon: GitBranch,
                  title: "Custom Approach",
                  description: "We don't believe in one-size-fits-all solutions. Each project is tailored to your specific business requirements and goals."
                },
                {
                  icon: Workflow,
                  title: "Proven Methodology",
                  description: "Our structured approach ensures efficient implementation, clear communication, and consistent results."
                },
                {
                  icon: Headset,
                  title: "Ongoing Support",
                  description: "Our relationship doesn't end at deployment. We provide continuous support, optimization, and strategic guidance."
                }
              ].map((value, index) => (
                <ValueItem 
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
            {[
              { number: "50+", label: "TEAM MEMBERS" },
              { number: "500+", label: "PROJECTS DELIVERED" },
              { number: "92%", label: "CLIENT RETENTION" },
              { number: "10+", label: "YEARS OF EXPERIENCE" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold mb-1 text-black">{stat.number}</p>
                <p className="text-xs font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
