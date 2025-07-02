import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, 
  HardDrive, 
  Cog, 
  BarChart3, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";

// Extended service information
const serviceDetails = [
  {
    id: "data-collection",
    icon: Database,
    title: "Data Collection & Ingestion",
    description: "Collect data from various sources: IoT devices, web apps, mobile, transactions, social media, and more.",
    tools: ["Apache Kafka", "Flume", "AWS Kinesis"],
    details: [
      "Real-time data streaming from multiple sources",
      "IoT device data collection and processing",
      "Web scraping and API integrations",
      "Mobile app analytics collection",
      "Transaction and event processing"
    ],
    caseStudy: {
      title: "Global Retailer Data Integration",
      description: "Implemented a unified data collection system that combined point-of-sale, inventory, and online shopping data streams, enabling real-time analytics and decision-making.",
      results: "42% reduction in inventory costs, 28% improvement in stock availability"
    }
  },
  {
    id: "data-storage",
    icon: HardDrive,
    title: "Data Storage",
    description: "Store structured, semi-structured, and unstructured data in scalable, secure environments.",
    tools: ["Hadoop (HDFS)", "Amazon S3", "Snowflake & Delta Lake"],
    details: [
      "Data lake implementation and management",
      "Distributed storage systems for massive datasets",
      "Schema design and optimization",
      "Cloud-based storage solutions",
      "Hybrid on-premise and cloud architectures"
    ],
    caseStudy: {
      title: "Healthcare Provider Data Lake",
      description: "Created a unified data lake that consolidated 5+ years of patient, operational and financial data, enabling advanced analytics while maintaining HIPAA compliance.",
      results: "65% faster data access and 43% cost reduction compared to previous systems"
    }
  },
  {
    id: "data-processing",
    icon: Cog,
    title: "Data Processing",
    description: "Transform raw data into valuable formats through batch and real-time stream processing.",
    tools: ["Apache Hadoop", "Apache Spark", "Apache Flink"],
    details: [
      "ETL (Extract, Transform, Load) pipeline development",
      "Real-time stream processing architectures",
      "Data cleansing and normalization",
      "Complex event processing",
      "Distributed processing for big data"
    ],
    caseStudy: {
      title: "Financial Services Transaction Processing",
      description: "Implemented a real-time transaction processing system that analyzed fraud patterns across millions of transactions per minute, dramatically reducing fraudulent activities.",
      results: "73% reduction in fraud losses and 94% reduction in false positives"
    }
  },
  {
    id: "analytics-ml",
    icon: BarChart3,
    title: "Analytics & Machine Learning",
    description: "Analyze data to find patterns, trends, and predictions that drive business decisions.",
    tools: ["TensorFlow, PyTorch", "Apache Mahout", "Tableau, Power BI, Looker"],
    details: [
      "Predictive analytics model development",
      "Machine learning algorithm implementation",
      "Natural language processing solutions",
      "Computer vision and image recognition",
      "Interactive BI dashboards and visualization"
    ],
    caseStudy: {
      title: "Manufacturing Predictive Maintenance",
      description: "Developed ML models that predict equipment failures 2 weeks in advance by analyzing sensor data, operation logs, and maintenance records.",
      results: "58% reduction in unplanned downtime and 32% decrease in maintenance costs"
    }
  },
  {
    id: "data-governance",
    icon: ShieldCheck,
    title: "Data Governance & Security",
    description: "Ensure data compliance (GDPR, HIPAA), manage metadata, and implement access controls.",
    tools: ["Compliance Management", "Data Masking", "Access Control Systems"],
    details: [
      "Data privacy and compliance frameworks",
      "Metadata management systems",
      "Data lineage and audit trails",
      "Role-based access control implementation",
      "Data security and encryption standards"
    ],
    caseStudy: {
      title: "Global Financial Institution Compliance",
      description: "Implemented comprehensive data governance framework ensuring compliance with GDPR, CCPA, and financial regulations across 15 countries.",
      results: "100% compliance achievement with zero regulatory penalties"
    }
  }
];

// Detailed service page
const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Service Banner */}
        <section className="gradient-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
                Our Data Services
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Comprehensive solutions that transform your raw data into actionable business intelligence and competitive advantage.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services Section */}
        <Services />
        
        {/* Detailed Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">Detailed Service Offerings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Explore our comprehensive data management capabilities in depth</p>
            </div>
            
            <div className="space-y-16">
              {serviceDetails.map((service, index) => (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <service.icon className="text-primary" size={24} />
                      </div>
                      <h3 className="font-poppins font-semibold text-2xl text-gray-800">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <h4 className="font-poppins font-medium text-lg text-gray-800 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="text-primary flex-shrink-0 mt-1" size={16} />
                          <span className="text-gray-600 ml-2">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-poppins font-medium text-lg text-gray-800 mb-3">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="bg-gray-50 border-gray-200 shadow-sm animated-border">
                      <CardContent className="p-6">
                        <h4 className="font-poppins font-semibold text-xl text-gray-800 mb-4">
                          Case Study: {service.caseStudy.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{service.caseStudy.description}</p>
                        <div className="bg-white p-4 rounded-md border border-gray-100 animated-border">
                          <p className="font-medium text-primary">Results:</p>
                          <p className="text-gray-700">{service.caseStudy.results}</p>
                        </div>
                        
                        <Button 
                          asChild
                          className="mt-6"
                          variant="outline"
                        >
                          <a href="/case-studies">View More Case Studies</a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;