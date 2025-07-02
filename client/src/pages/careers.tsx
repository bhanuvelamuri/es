import React, { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Users, 
  Briefcase, 
  MapPin, 
  Clock,
  Database,
  BarChart,
  Code,
  Network,
  LucideIcon,
  PenTool,
  Search
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  posted: string;
  category: "engineering" | "data" | "design" | "product" | "business";
  description: string;
  requirements: string[];
  responsibilities: string[];
  icon: LucideIcon;
  featured?: boolean;
}

const jobListings: JobListing[] = [
  {
    id: "data-engineer-1",
    title: "Senior Data Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    posted: "2 days ago",
    category: "data",
    description: "Join our data engineering team to design and build scalable data pipelines that power our analytics and machine learning systems.",
    requirements: [
      "8+ years of experience in data engineering or related field",
      "Experience with Apache Spark, Kafka, and cloud data warehouses",
      "Proficiency in Python, Scala, or Java",
      "Knowledge of ETL design patterns and performance optimization techniques",
      "Bachelor's degree in Computer Science, Engineering, or related field"
    ],
    responsibilities: [
      "Design, develop, and maintain data processing pipelines",
      "Implement data transformation and cleaning processes",
      "Collaborate with data science teams to support ML workflows",
      "Optimize data architecture for performance and scalability",
      "Ensure data quality and reliability across systems"
    ],
    icon: Database,
    featured: true
  },
  {
    id: "data-scientist-1",
    title: "Data Scientist",
    department: "Data Science",
    location: "New York, NY",
    type: "Full-time",
    posted: "1 week ago",
    category: "data",
    description: "Use statistical methods and machine learning to analyze complex data sets and extract meaningful insights for our clients.",
    requirements: [
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python, R, and SQL",
      "Experience with machine learning frameworks (TensorFlow, PyTorch)",
      "Strong background in statistics and mathematics",
      "Master's or PhD in Computer Science, Statistics, or related field"
    ],
    responsibilities: [
      "Develop predictive models and algorithms",
      "Process and analyze large datasets",
      "Create data visualizations and dashboards",
      "Present findings to technical and non-technical stakeholders",
      "Collaborate with engineering teams to implement ML solutions"
    ],
    icon: BarChart,
  },
  {
    id: "frontend-dev-1",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    posted: "3 days ago",
    category: "engineering",
    description: "Build intuitive and responsive user interfaces for our data visualization and analytics products.",
    requirements: [
      "3+ years of experience in frontend development",
      "Proficiency in React, TypeScript, and modern CSS frameworks",
      "Experience with data visualization libraries (D3.js, Chart.js)",
      "Knowledge of responsive design and cross-browser compatibility",
      "Bachelor's degree in Computer Science or related field"
    ],
    responsibilities: [
      "Develop responsive and accessible user interfaces",
      "Implement interactive data visualization components",
      "Collaborate with UX designers to create intuitive experiences",
      "Write clean, maintainable, and well-tested code",
      "Optimize applications for maximum speed and scalability"
    ],
    icon: Code,
  },
  {
    id: "backend-dev-1",
    title: "Backend Developer",
    department: "Engineering",
    location: "Boston, MA",
    type: "Full-time",
    posted: "5 days ago",
    category: "engineering",
    description: "Design and implement scalable APIs and microservices to handle large volumes of data.",
    requirements: [
      "4+ years of experience in backend development",
      "Proficiency in Node.js, Python, or Java",
      "Experience with RESTful APIs and GraphQL",
      "Knowledge of database systems (SQL and NoSQL)",
      "Understanding of containerization and cloud infrastructure"
    ],
    responsibilities: [
      "Design and implement scalable backend services",
      "Optimize database queries and data access patterns",
      "Integrate with third-party APIs and services",
      "Implement security best practices",
      "Collaborate with frontend developers and DevOps teams"
    ],
    icon: Network,
    featured: true
  },
  {
    id: "ux-designer-1",
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "1 week ago",
    category: "design",
    description: "Create intuitive user experiences for complex data-driven applications.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools (Figma, Sketch, Adobe XD)",
      "Experience with data visualization and dashboard design",
      "Knowledge of user research and usability testing methods",
      "Portfolio demonstrating strong visual design skills"
    ],
    responsibilities: [
      "Design user interfaces for data-heavy applications",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with product managers and engineers",
      "Develop and maintain design systems"
    ],
    icon: PenTool,
  },
  {
    id: "product-manager-1",
    title: "Product Manager - Data Solutions",
    department: "Product",
    location: "Remote (US)",
    type: "Full-time",
    posted: "2 weeks ago",
    category: "product",
    description: "Lead the development of innovative data products from concept to market.",
    requirements: [
      "5+ years of experience in product management",
      "Experience with data products or analytics platforms",
      "Strong understanding of data engineering and analytics",
      "Excellent communication and stakeholder management skills",
      "Bachelor's degree in technical or business field"
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize requirements from stakeholders",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competitive landscape",
      "Track and measure product performance metrics"
    ],
    icon: Search,
  },
];

const CareersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredJobs = selectedCategory === "all" 
    ? jobListings 
    : jobListings.filter(job => job.category === selectedCategory);
  
  const featuredJobs = jobListings.filter(job => job.featured);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg text-white py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-sm font-medium text-white">CAREERS</span>
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6 leading-tight">
                Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Team</span>
              </h1>
              <div className="w-20 h-1 bg-white/50 mb-6"></div>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
                Help us build the future of data solutions and work on challenging problems that matter. Be part of a team that's transforming how businesses understand and use their data.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href="#open-positions" className="inline-flex items-center">
                    View Open Positions
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  <a href="#team-culture">Our Culture</a>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-300 text-sm">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">6</div>
                  <div className="text-gray-300 text-sm">Open Positions</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">Remote OK</div>
                  <div className="text-gray-300 text-sm">Work Flexibility</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Jobs */}
        <section className="py-20 bg-gray-50" id="open-positions">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-black text-white text-sm font-medium rounded-full mb-4">FEATURED ROLES</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
                Featured Opportunities
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join a team of passionate professionals working on cutting-edge data solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredJobs.map((job, index) => (
                <Card key={job.id} className="overflow-hidden pulse-border hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Card header with gradient */}
                      <div className="bg-gradient-to-r from-black to-gray-700 p-6 text-white">
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mr-4">
                            <job.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <Badge className="mb-2 bg-white/20 text-white hover:bg-white/30 border-white/20">
                              Featured
                            </Badge>
                            <h3 className="font-poppins font-semibold text-xl text-white mb-2">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 text-sm text-white/80">
                              <span className="flex items-center">
                                <Briefcase className="mr-1" size={14} />
                                {job.department}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="mr-1" size={14} />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <Clock className="mr-1" size={14} />
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card body */}
                      <div className="p-6 bg-white">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.requirements.slice(0, 2).map((req, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {req.split(' ').slice(0, 3).join(' ')}...
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <Button asChild className="flex-1 bg-black text-white hover:bg-gray-800">
                            <Link href={`/careers/${job.id}`} className="flex items-center justify-center">
                              View Details
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                            <Link href={`/careers/${job.id}`}>
                              Apply Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Quick apply CTA */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Looking for something else?</span>
                <Button asChild variant="link" className="text-black font-semibold p-0 h-auto">
                  <a href="#all-positions">View All Positions</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Job Listings */}
        <section className="py-20 bg-white" id="all-positions">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">
                All Open Positions
              </h2>
              <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore all available opportunities and find the perfect role that matches your skills and interests
              </p>
            </div>
            
            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="mb-8 flex flex-wrap">
                <TabsTrigger 
                  value="all" 
                  onClick={() => setSelectedCategory("all")}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  All Departments
                </TabsTrigger>
                <TabsTrigger 
                  value="engineering" 
                  onClick={() => setSelectedCategory("engineering")}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Engineering
                </TabsTrigger>
                <TabsTrigger 
                  value="data" 
                  onClick={() => setSelectedCategory("data")}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Data Science
                </TabsTrigger>
                <TabsTrigger 
                  value="design" 
                  onClick={() => setSelectedCategory("design")}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger 
                  value="product" 
                  onClick={() => setSelectedCategory("product")}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Product
                </TabsTrigger>
                <TabsTrigger 
                  value="business" 
                  onClick={() => setSelectedCategory("business")}
                  className="data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Business
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 gap-6">
                  {filteredJobs.map((job, index) => (
                    <Card key={job.id} className="border border-gray-200 animated-border hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                          <div className="flex items-start flex-1">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center mr-4 group-hover:from-black/10 group-hover:to-black/20 transition-all duration-300">
                              <job.icon className="text-black" size={24} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-poppins font-semibold text-lg md:text-xl text-gray-800 group-hover:text-black transition-colors">
                                  {job.title}
                                </h3>
                                {job.featured && (
                                  <Badge className="bg-black text-white text-xs">Featured</Badge>
                                )}
                              </div>
                              
                              <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Briefcase className="mr-1.5" size={14} />
                                  {job.department}
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="mr-1.5" size={14} />
                                  {job.location}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="mr-1.5" size={14} />
                                  {job.type}
                                </span>
                              </div>
                              
                              <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl">
                                {job.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2">
                                {job.requirements.slice(0, 3).map((req, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                    {req.split(' ').slice(0, 2).join(' ')}
                                  </span>
                                ))}
                                {job.requirements.length > 3 && (
                                  <span className="px-2 py-1 text-gray-500 text-xs">
                                    +{job.requirements.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 shrink-0">
                            <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                              <Link href={`/careers/${job.id}`} className="flex items-center">
                                View Details
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                            <Button asChild className="bg-black text-white hover:bg-gray-800 transition-all duration-300">
                              <Link href={`/careers/${job.id}`}>
                                Apply Now
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Other tabs use the same enhanced format */}
              {["engineering", "data", "design", "product", "business"].map(category => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 gap-6">
                    {filteredJobs.map((job, index) => (
                      <Card key={job.id} className="border border-gray-200 animated-border hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="flex items-start flex-1">
                              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-black/5 to-black/10 flex items-center justify-center mr-4 group-hover:from-black/10 group-hover:to-black/20 transition-all duration-300">
                                <job.icon className="text-black" size={24} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-poppins font-semibold text-lg md:text-xl text-gray-800 group-hover:text-black transition-colors">
                                    {job.title}
                                  </h3>
                                  {job.featured && (
                                    <Badge className="bg-black text-white text-xs">Featured</Badge>
                                  )}
                                </div>
                                
                                <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-500">
                                  <span className="flex items-center">
                                    <Briefcase className="mr-1.5" size={14} />
                                    {job.department}
                                  </span>
                                  <span className="flex items-center">
                                    <MapPin className="mr-1.5" size={14} />
                                    {job.location}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="mr-1.5" size={14} />
                                    {job.type}
                                  </span>
                                </div>
                                
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-2xl">
                                  {job.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                  {job.requirements.slice(0, 3).map((req, idx) => (
                                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                      {req.split(' ').slice(0, 2).join(' ')}
                                    </span>
                                  ))}
                                  {job.requirements.length > 3 && (
                                    <span className="px-2 py-1 text-gray-500 text-xs">
                                      +{job.requirements.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-3 shrink-0">
                              <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white transition-all duration-300">
                                <Link href={`/careers/${job.id}`} className="flex items-center">
                                  View Details
                                  <ChevronRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                              <Button asChild className="bg-black text-white hover:bg-gray-800 transition-all duration-300">
                                <Link href={`/careers/${job.id}`}>
                                  Apply Now
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Team Culture */}
        <section className="py-20 bg-gray-50" id="team-culture">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
                  Our Team Culture
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're building a diverse team of passionate individuals who are excited about solving complex data problems
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="border-gray-200 animated-border">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4 flex items-center">
                      <Users className="mr-2" size={20} />
                      Collaborative Environment
                    </h3>
                    <p className="text-gray-600">
                      We believe that the best solutions come from diverse perspectives working together. Our team fosters open communication, knowledge sharing, and mutual support.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 animated-border">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4 flex items-center">
                      <Code className="mr-2" size={20} />
                      Technical Excellence
                    </h3>
                    <p className="text-gray-600">
                      We're committed to technical excellence and continuous learning. We encourage experimentation, embrace new technologies, and strive to build robust, scalable solutions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 animated-border">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4 flex items-center">
                      <MapPin className="mr-2" size={20} />
                      Remote-Friendly
                    </h3>
                    <p className="text-gray-600">
                      We embrace flexible work arrangements and have team members across different locations. We value work-life balance and trust our team to deliver results regardless of location.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-200 animated-border">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4 flex items-center">
                      <BarChart className="mr-2" size={20} />
                      Impact-Driven
                    </h3>
                    <p className="text-gray-600">
                      We're focused on creating solutions that have tangible impact for our clients. We measure our success by the value we create and the problems we solve.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-8">
                  Don't see a position that matches your skills? We're always interested in talking to talented individuals.
                </p>
                <Button asChild>
                  <a href="mailto:careers@exciteservices.com" className="flex items-center justify-center">
                    Send Us Your Resume
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;