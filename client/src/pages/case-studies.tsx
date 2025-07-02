import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

// Extended case studies data
const extendedCaseStudies = [
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Finance",
    title: "Global Bank Real-Time Analytics",
    description: "Implemented a real-time fraud detection system that reduced fraudulent transactions by 73% and saved $4.2M annually.",
    challenge: "A leading global bank was struggling with increasing fraud attempts that were bypassing their existing rule-based detection systems. They needed a solution that could adapt to new fraud patterns and make decisions in milliseconds.",
    solution: "We implemented a real-time analytics platform using Kafka for data streaming and machine learning models that could detect suspicious patterns across millions of transactions. The system continuously learns and adapts to new fraud techniques.",
    technologies: ["Apache Kafka", "TensorFlow", "Hadoop", "Spark Streaming"],
    result: "73% reduction in fraud, $4.2M annual savings"
  },
  {
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Retail",
    title: "E-Commerce Personalization",
    description: "Developed a customer behavior analytics platform that increased conversion rates by 28% and average order value by 15%.",
    challenge: "A multinational e-commerce retailer was seeing declining conversion rates despite increasing traffic. They wanted to create more personalized experiences but struggled with siloed customer data across multiple platforms.",
    solution: "We built a unified customer data platform that combined browsing behavior, purchase history, and demographic information. This powered real-time personalized product recommendations and targeted promotions across all customer touchpoints.",
    technologies: ["AWS Kinesis", "Amazon Redshift", "Python ML Libraries", "Tableau"],
    result: "28% higher conversions, 15% increased average order value"
  },
  {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Healthcare",
    title: "Patient Data Integration",
    description: "Created a HIPAA-compliant unified data platform that reduced diagnostic time by 35% and improved care coordination.",
    challenge: "A network of regional hospitals was struggling with fragmented patient data across multiple legacy systems, leading to delays in diagnosis and treatment planning.",
    solution: "We designed a HIPAA-compliant data integration platform that unified patient records, lab results, imaging data, and treatment histories. The solution included secure access controls and comprehensive audit trails to maintain regulatory compliance.",
    technologies: ["Snowflake", "HDFS", "Apache NiFi", "Power BI"],
    result: "35% faster diagnostics, improved care coordination"
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Manufacturing",
    title: "Predictive Maintenance Solution",
    description: "Built an IoT-powered predictive maintenance system that reduced unplanned downtime by 62% and extended equipment lifespan by 35%.",
    challenge: "A manufacturing company was experiencing frequent unplanned equipment failures that disrupted production and led to costly emergency repairs and lost productivity.",
    solution: "We implemented an IoT sensor network connected to a real-time analytics platform that monitors equipment health indicators. Machine learning models predict potential failures weeks in advance, allowing for planned maintenance during non-critical periods.",
    technologies: ["IoT Sensors", "Azure IoT Hub", "TensorFlow", "Custom ML Models"],
    result: "62% reduction in unplanned downtime, 35% longer equipment lifespan"
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Telecommunications",
    title: "Network Optimization Platform",
    description: "Developed a data-driven network optimization system that improved service quality by 47% while reducing operational costs by 23%.",
    challenge: "A telecommunications provider was dealing with customer complaints about service quality while facing pressure to reduce operational costs in an increasingly competitive market.",
    solution: "We created a comprehensive analytics platform that combined network performance data, customer usage patterns, and maintenance records. This allowed for targeted infrastructure investments and proactive maintenance in high-impact areas.",
    technologies: ["Apache Spark", "Time Series Analysis", "Looker", "Streaming Analytics"],
    result: "47% improvement in service quality metrics, 23% reduction in operational costs"
  },
  {
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Energy",
    title: "Smart Grid Analytics",
    description: "Implemented a smart grid analytics system that reduced energy waste by 31% and improved demand forecasting accuracy by 42%.",
    challenge: "A utility company needed to optimize their energy distribution network to handle increasing demand volatility from renewable energy sources and changing consumption patterns.",
    solution: "We built a predictive analytics platform that combines weather data, historical consumption patterns, and real-time grid status information. The system enables dynamic load balancing and precise demand forecasting for more efficient resource allocation.",
    technologies: ["IoT Sensors", "Hadoop", "Custom ML Models", "Real-time Analytics"],
    result: "31% reduction in energy waste, 42% more accurate demand forecasting"
  }
];

const CaseStudiesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Case Studies Banner */}
        <section className="gradient-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
                Client Success Stories
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                See how we've helped organizations across industries transform their data operations and achieve measurable business results.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Case Studies (reusing the component) */}
        <CaseStudies />
        
        {/* Extended Case Studies */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">Industry-Specific Solutions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Discover how our data solutions address unique challenges across different sectors</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {extendedCaseStudies.map((caseStudy, index) => (
                <Card key={index} className="bg-white overflow-hidden transition duration-300 hover:shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="md:order-last h-full">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                          {caseStudy.category}
                        </Badge>
                      </div>
                      <h3 className="font-poppins font-semibold text-2xl mb-3 text-gray-800">{caseStudy.title}</h3>
                      <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-poppins font-medium text-lg text-primary mb-2">The Challenge</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-poppins font-medium text-lg text-primary mb-2">Our Solution</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-poppins font-medium text-lg text-primary mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {caseStudy.technologies.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="font-poppins font-medium text-lg text-primary mb-2">Results</h4>
                          <p className="text-gray-800 font-medium">{caseStudy.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Feedback from organizations we've helped transform through data</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-50 border-none p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center">
                    <div className="text-amber-400 text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Excite Services transformed our approach to data analytics. Their solutions gave us insights we never knew were possible, directly contributing to a 32% revenue increase."
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Ryan Thompson</p>
                    <p className="text-gray-500 text-sm">CTO, Global Financial Services</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center">
                    <div className="text-amber-400 text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Working with Excite Services has been a game-changer for our retail operations. Their customer data platform has revolutionized how we understand and serve our customers."
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Emily Roberts</p>
                    <p className="text-gray-500 text-sm">VP of Digital, Retail Chain</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center">
                    <div className="text-amber-400 text-2xl">★★★★★</div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The predictive maintenance solution from Excite Services paid for itself within the first three months. We've seen dramatic improvements in equipment uptime and maintenance costs."
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Carlos Mendez</p>
                    <p className="text-gray-500 text-sm">Operations Director, Manufacturing</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;