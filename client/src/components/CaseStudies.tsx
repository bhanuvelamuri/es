import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, PieChart, LineChart } from "lucide-react";

interface CaseStudy {
  image: string;
  logo?: string;
  category: string;
  title: string;
  description: string;
  results: {
    stat: string;
    label: string;
    icon?: React.ElementType;
  }[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Finance",
    title: "Global Bank Real-Time Analytics",
    description: "Implemented a real-time fraud detection system for a leading international bank, leveraging machine learning to identify suspicious patterns across millions of daily transactions.",
    results: [
      { stat: "73%", label: "Reduction in fraud", icon: TrendingUp },
      { stat: "$4.2M", label: "Annual savings" }
    ],
    tags: ["Machine Learning", "Real-time Analytics", "Fraud Detection"]
  },
  {
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Retail",
    title: "E-Commerce Personalization",
    description: "Developed a customer behavior analytics platform for a multinational retailer that unified customer data across online and offline touchpoints.",
    results: [
      { stat: "28%", label: "Higher conversions", icon: LineChart },
      { stat: "15%", label: "Increased AOV" }
    ],
    tags: ["Customer Analytics", "Personalization", "Multi-channel"]
  },
  {
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    category: "Healthcare",
    title: "Patient Data Integration",
    description: "Created a HIPAA-compliant unified data platform for a network of regional hospitals that connected patient records, lab results, and imaging data.",
    results: [
      { stat: "35%", label: "Faster diagnostics", icon: PieChart },
      { stat: "42%", label: "Care coordination improvement" }
    ],
    tags: ["Healthcare", "HIPAA Compliance", "Data Integration"]
  }
];

const CaseStudyCard = ({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) => {
  const ResultStat = ({ result }: { result: CaseStudy['results'][0] }) => {
    const Icon = result.icon;
    
    return (
      <div className="flex flex-col items-center">
        {Icon && <Icon className="text-black/60 mb-1" size={16} />}
        <span className="text-xl font-bold text-black">{result.stat}</span>
        <span className="text-xs text-gray-500">{result.label}</span>
      </div>
    );
  };
  
  return (
    <Card 
      className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 
                hover:shadow-xl hover:-translate-y-2 h-full flex flex-col"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image container with overlay */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60"></div>
        
        {/* Category badge */}
        <Badge 
          className="absolute top-4 left-4 bg-white/90 hover:bg-white text-black font-medium px-3 py-1 rounded-full text-xs backdrop-blur-sm"
        >
          {caseStudy.category}
        </Badge>
        
        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-poppins font-semibold text-xl text-white">{caseStudy.title}</h3>
        </div>
      </div>
      
      {/* Content */}
      <CardContent className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-6 flex-grow">{caseStudy.description}</p>
        
        {/* Results */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          {caseStudy.results.map((result, idx) => (
            <ResultStat key={idx} result={result} />
          ))}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {caseStudy.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 bg-black/5 text-black/70 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Learn more link */}
        <div className="pt-4 border-t border-gray-100">
          <a 
            href="/case-studies" 
            className="text-black font-medium text-sm flex items-center
                     relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 
                     after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            View case study
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const CaseStudies = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: "radial-gradient(circle at 20px 20px, black 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-black/5 text-black font-medium text-sm mb-6">
            SUCCESS STORIES
          </span>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-black mb-6 leading-tight">
            How We Drive Business Results
          </h2>
          <p className="text-gray-600 text-lg mx-auto leading-relaxed">
            Explore how we've helped organizations across industries transform their data operations 
            into strategic business advantages with measurable outcomes.
          </p>
        </div>
        
        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
          ))}
        </div>
        
        {/* CTA for more case studies */}
        <div className="text-center">
          <Button 
            asChild
            variant="outline" 
            className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            <a href="/case-studies" className="flex items-center px-6 py-3">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
