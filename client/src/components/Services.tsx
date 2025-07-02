import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, 
  HardDrive, 
  Cog, 
  BarChart3, 
  ShieldCheck, 
  Headset,
  ArrowRight,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import analyticsSvg from "../assets/analytics-pattern.svg";
import dataFlowSvg from "../assets/data-flow.svg";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  tools,
  isCallToAction = false,
  index
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  tools?: string[];
  isCallToAction?: boolean;
  index: number;
}) => {
  return (
    <Card 
      className={`
        group service-card overflow-hidden rounded-lg backdrop-blur-sm
        transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]
        ${isCallToAction ? 'bg-black text-white' : 'bg-white border border-gray-200 pulse-border'}
        h-full
      `}
      style={{
        transitionDelay: `${index * 50}ms` 
      }}
    >
      <CardContent className="p-8 h-full flex flex-col relative">
        {/* Glass highlight effect at top */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div 
          className={`
            w-16 h-16 rounded-lg flex items-center justify-center mb-6
            ${isCallToAction ? 'bg-white/10' : 'bg-black/5'}
            backdrop-blur-sm transition-all duration-300 
            group-hover:scale-110 group-hover:shadow-lg
          `}
        >
          <Icon 
            className={`${isCallToAction ? 'text-white' : 'text-black'} transition-all duration-300`} 
            size={28} 
          />
        </div>
        
        <h3 className="font-poppins font-semibold text-xl mb-4 transition-all duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        
        <p className={`${isCallToAction ? 'text-gray-300' : 'text-gray-600'} mb-5 leading-relaxed`}>
          {description}
        </p>
        
        {tools && (
          <div className="pt-5 mt-auto border-t border-gray-200 dark:border-gray-800">
            {tools.map((tool, idx) => (
              <p key={idx} className={`text-sm ${isCallToAction ? 'text-gray-300' : 'text-gray-600'} mb-2 flex items-start`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${isCallToAction ? 'bg-white' : 'bg-black'} mt-1.5 mr-2.5 transition-all duration-300 group-hover:scale-150`}></span>
                {tool}
              </p>
            ))}
          </div>
        )}
        
        {isCallToAction ? (
          <a 
            href="/contact" 
            className="
              bg-white text-black font-medium py-3 px-6 mt-8
              rounded-lg inline-flex items-center justify-center
              transition-all duration-300 hover:bg-gray-100
              shadow-[0_0_10px_rgba(255,255,255,0.3)]
              relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]
            "
          >
            <span className="relative z-10 flex items-center">
              Contact Us
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
          </a>
        ) : (
          <div className="mt-6">
            <a 
              href={`/services#${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="
                text-black font-medium inline-flex items-center
                transition-all duration-300 hover:translate-x-1
                relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 
                after:bg-black after:transition-all after:duration-300 hover:after:w-full
              "
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-36 bg-gray-50 overflow-hidden">
      {/* Decorative SVG elements */}
      <div className="absolute left-0 top-20 w-48 md:w-64 h-auto opacity-5 transform -translate-x-1/3">
        <img src={analyticsSvg} alt="" className="w-full h-auto" />
      </div>
      
      <div className="absolute right-0 bottom-20 w-48 md:w-64 h-auto opacity-5 transform translate-x-1/3">
        <img src={dataFlowSvg} alt="" className="w-full h-auto" />
      </div>
      
      {/* Glossy pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(circle at 10px 10px, black 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-black font-medium text-sm mb-6">
            OUR EXPERTISE
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-black mb-6 leading-tight">
            Comprehensive Data Services for Modern Businesses
          </h2>
          <p className="text-gray-600 text-lg mx-auto leading-relaxed">
            End-to-end solutions that transform raw data into actionable business intelligence, 
            empowering you to make data-driven decisions with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {[
            {
              icon: Database,
              title: "Data Collection & Ingestion",
              description: "Collect data from various sources: IoT devices, web apps, mobile, transactions, social media, and more.",
              tools: ["Apache Kafka", "Flume", "AWS Kinesis"]
            },
            {
              icon: HardDrive,
              title: "Data Storage",
              description: "Store structured, semi-structured, and unstructured data in scalable, secure environments.",
              tools: ["Hadoop (HDFS)", "Amazon S3", "Snowflake & Delta Lake"]
            },
            {
              icon: Cog,
              title: "Data Processing",
              description: "Transform raw data into valuable formats through batch and real-time stream processing.",
              tools: ["Apache Hadoop", "Apache Spark", "Apache Flink"]
            },
            {
              icon: BarChart3,
              title: "Analytics & Machine Learning",
              description: "Analyze data to find patterns, trends, and predictions that drive business decisions.",
              tools: ["TensorFlow, PyTorch", "Apache Mahout", "Tableau, Power BI, Looker"]
            },
            {
              icon: ShieldCheck,
              title: "Data Governance & Security",
              description: "Ensure data compliance (GDPR, HIPAA), manage metadata, and implement access controls.",
              tools: ["Compliance Management", "Data Masking", "Access Control Systems"]
            },
            {
              icon: Headset,
              title: "Need a Custom Solution?",
              description: "Our team of experts can build a tailored data solution to meet your specific business requirements.",
              isCallToAction: true
            }
          ].map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tools={service.tools}
              isCallToAction={service.isCallToAction}
              index={index}
            />
          ))}
        </div>
        
        {/* Additional content section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 animated-border relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black/5 via-black to-black/5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-80"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-black mb-4">
                Ready to harness the power of your data?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Our team of data experts is ready to help you implement the right data solution for your specific business needs. 
                Schedule a free consultation to discuss your project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  className="bg-black text-white hover:bg-black/90 hover:shadow-lg"
                >
                  <a href="/contact" className="inline-flex items-center">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-black text-black hover:bg-black/5"
                >
                  <a href="/case-studies" className="inline-flex items-center">
                    View Case Studies
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center">
                <MessageSquare className="text-black h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
