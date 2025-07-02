import React, { useState } from "react";
import { useParams, Link } from "wouter";
import { 
  ChevronRight,
  Briefcase, 
  MapPin, 
  Clock,
  Database,
  BarChart,
  Code,
  Network,
  LucideIcon,
  PenTool,
  Search,
  ArrowLeft,
  Share2
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const JobDetailPage = () => {
  const params = useParams();
  const jobId = params.jobId;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: ""
  });
  const [isSaved, setIsSaved] = useState(false);
  
  // Find the job based on the URL parameter
  const job = jobListings.find(j => j.id === jobId);
  
  if (!job) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Job Not Found</h2>
            <p className="mb-6">Sorry, the job you're looking for does not exist or has been removed.</p>
            <Button asChild>
              <Link href="/careers">Back to Careers</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.resume || !formData.coverLetter) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Create application data object
    const applicationData = {
      ...formData,
      jobId: job.id,
      jobTitle: job.title,
      submittedAt: new Date().toISOString(),
    };
    
    console.log("Application submitted:", applicationData);
    
    // Show success message
    alert(`Thank you for applying to the ${job.title} position! We'll review your application and get back to you within 5-7 business days.`);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      resume: "",
      coverLetter: ""
    });
  };
  
  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    const message = !isSaved ? "Job saved to your favorites!" : "Job removed from favorites.";
    alert(message);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Job Header */}
        <section className="bg-gray-50 py-12 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <Link href="/careers" className="inline-flex items-center text-gray-600 hover:text-black mb-4">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Careers
                </Link>
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mr-4">
                    <job.icon className="text-black" size={24} />
                  </div>
                  <h1 className="font-poppins font-bold text-2xl md:text-3xl text-gray-800">
                    {job.title}
                  </h1>
                </div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="flex items-center text-gray-600">
                    <Briefcase className="mr-1" size={16} />
                    {job.department}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <MapPin className="mr-1" size={16} />
                    {job.location}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Clock className="mr-1" size={16} />
                    {job.type}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Apply Now</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Apply for {job.title}</DialogTitle>
                      <DialogDescription>
                        Complete the form below to submit your application. All fields are required.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 py-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required
                          />
                        </div>
                        
                        
                        <div className="space-y-2">
                          <Label htmlFor="resume">Resume Link</Label>
                          <Input 
                            id="resume" 
                            name="resume" 
                            placeholder="Link to your resume (Google Drive, Dropbox, etc.)" 
                            value={formData.resume} 
                            onChange={handleInputChange} 
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="coverLetter">Cover Letter</Label>
                          <Textarea 
                            id="coverLetter" 
                            name="coverLetter" 
                            rows={5} 
                            placeholder="Why are you interested in this position?" 
                            value={formData.coverLetter} 
                            onChange={handleInputChange} 
                            required
                          />
                        </div>
                      </div>
                      
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Submit Application</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" className="flex items-center">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="mb-8">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-black data-[state=active]:text-white">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="requirements" className="data-[state=active]:bg-black data-[state=active]:text-white">
                      Requirements
                    </TabsTrigger>
                    <TabsTrigger value="responsibilities" className="data-[state=active]:bg-black data-[state=active]:text-white">
                      Responsibilities
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-6">
                    <Card className="animated-border">
                      <CardContent className="p-6">
                        <h2 className="font-poppins font-semibold text-xl text-gray-800 mb-4">Job Description</h2>
                        <p className="text-gray-600 mb-6">
                          {job.description}
                        </p>
                        
                        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">About the Role</h3>
                        <p className="text-gray-600 mb-6">
                          At Excite Services, we're building the next generation of data solutions to help businesses transform their raw data into actionable insights. As a {job.title}, you'll play a crucial role in our mission to democratize data analytics and empower organizations to make data-driven decisions.
                        </p>
                        
                        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">What You'll Do</h3>
                        <ul className="space-y-2 mb-6">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                              <span className="text-gray-600 ml-2">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">What We're Looking For</h3>
                        <ul className="space-y-2">
                          {job.requirements.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                              <span className="text-gray-600 ml-2">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="animated-border">
                      <CardContent className="p-6">
                        <h2 className="font-poppins font-semibold text-xl text-gray-800 mb-4">Benefits and Perks</h2>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-3 flex-shrink-0">
                              <Clock className="text-black" size={16} />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Flexible Work Arrangements</h4>
                              <p className="text-gray-600">Work remotely or from one of our office locations with flexible hours.</p>
                            </div>
                          </li>
                          
                          <li className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-3 flex-shrink-0">
                              <BarChart className="text-black" size={16} />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Competitive Compensation</h4>
                              <p className="text-gray-600">We offer competitive salary, equity options, and performance bonuses.</p>
                            </div>
                          </li>
                          
                          <li className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-3 flex-shrink-0">
                              <Code className="text-black" size={16} />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Professional Development</h4>
                              <p className="text-gray-600">Access to learning resources, conferences, and skill development opportunities.</p>
                            </div>
                          </li>
                          
                          <li className="flex items-start">
                            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center mr-3 flex-shrink-0">
                              <Database className="text-black" size={16} />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Health and Wellness</h4>
                              <p className="text-gray-600">Comprehensive health insurance, wellness programs, and paid time off.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="requirements" className="space-y-6">
                    <Card className="animated-border">
                      <CardContent className="p-6">
                        <h2 className="font-poppins font-semibold text-xl text-gray-800 mb-4">Job Requirements</h2>
                        <p className="text-gray-600 mb-6">
                          We're looking for exceptional talent to join our team. Here's what we're looking for in an ideal candidate:
                        </p>
                        
                        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">Qualifications</h3>
                        <ul className="space-y-3 mb-8">
                          {job.requirements.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center mr-3">
                                <span className="text-black text-xs font-medium">{idx + 1}</span>
                              </div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">Nice to Have</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Experience with cloud platforms (AWS, GCP, Azure)</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Contributions to open-source projects</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Experience working in a fast-paced startup environment</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Strong problem-solving skills and attention to detail</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="responsibilities" className="space-y-6">
                    <Card className="animated-border">
                      <CardContent className="p-6">
                        <h2 className="font-poppins font-semibold text-xl text-gray-800 mb-4">Job Responsibilities</h2>
                        <p className="text-gray-600 mb-6">
                          In this role, you'll have the opportunity to make a significant impact on our products and business. Here's what you'll be responsible for:
                        </p>
                        
                        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">Core Responsibilities</h3>
                        <ul className="space-y-3 mb-8">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center mr-3">
                                <span className="text-black text-xs font-medium">{idx + 1}</span>
                              </div>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-3">Additional Responsibilities</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Participate in code reviews and technical discussions</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Mentor junior team members and share knowledge</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Contribute to technical documentation and process improvements</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="text-black flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-600 ml-2">Stay up-to-date with industry trends and best practices</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 animated-border">
                  <CardContent className="p-6">
                    <h2 className="font-poppins font-semibold text-xl text-gray-800 mb-6">Job Details</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-gray-500 text-sm mb-1">Department</h3>
                        <p className="font-medium">{job.department}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-gray-500 text-sm mb-1">Location</h3>
                        <p className="font-medium">{job.location}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-gray-500 text-sm mb-1">Employment Type</h3>
                        <p className="font-medium">{job.type}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-gray-500 text-sm mb-1">Posted</h3>
                        <p className="font-medium">{job.posted}</p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full mb-3">Apply Now</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>Apply for {job.title}</DialogTitle>
                            <DialogDescription>
                              Complete the form below to submit your application. All fields are required.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleSubmit} className="space-y-4 py-4">
                            <div className="grid grid-cols-1 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="sidebar-name">Full Name</Label>
                                <Input 
                                  id="sidebar-name" 
                                  name="name" 
                                  value={formData.name} 
                                  onChange={handleInputChange} 
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="sidebar-email">Email</Label>
                                <Input 
                                  id="sidebar-email" 
                                  name="email" 
                                  type="email" 
                                  value={formData.email} 
                                  onChange={handleInputChange} 
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="sidebar-phone">Phone Number</Label>
                                <Input 
                                  id="sidebar-phone" 
                                  name="phone" 
                                  value={formData.phone} 
                                  onChange={handleInputChange} 
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="sidebar-resume">Resume Link</Label>
                                <Input 
                                  id="sidebar-resume" 
                                  name="resume" 
                                  placeholder="Link to your resume (Google Drive, Dropbox, etc.)" 
                                  value={formData.resume} 
                                  onChange={handleInputChange} 
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="sidebar-coverLetter">Cover Letter</Label>
                                <Textarea 
                                  id="sidebar-coverLetter" 
                                  name="coverLetter" 
                                  rows={5} 
                                  placeholder="Why are you interested in this position?" 
                                  value={formData.coverLetter} 
                                  onChange={handleInputChange} 
                                  required
                                />
                              </div>
                            </div>
                            
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="button" variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button type="submit">Submit Application</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                      <Button 
                        variant="outline" 
                        className={`w-full transition-colors ${isSaved ? 'bg-black text-white' : ''}`}
                        onClick={handleSaveJob}
                      >
                        {isSaved ? 'Job Saved ✓' : 'Save Job'}
                      </Button>
                    </div>
                    
                    <div className="mt-8 bg-gray-50 p-4 rounded-md">
                      <h3 className="font-medium text-gray-800 mb-2">Not the right fit?</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Check out our other open positions or join our talent community for future opportunities.
                      </p>
                      <Link href="/careers" className="text-black font-medium text-sm inline-flex items-center">
                        View All Openings
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Similar Jobs */}
            <div className="mt-16">
              <h2 className="font-poppins font-semibold text-2xl text-gray-800 mb-8">Similar Jobs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobListings
                  .filter(j => j.id !== job.id && j.category === job.category)
                  .slice(0, 3)
                  .map(similarJob => (
                    <Card key={similarJob.id} className="border border-gray-200 animated-border">
                      <CardContent className="p-6">
                        <div className="flex items-start mb-4">
                          <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center mr-3">
                            <similarJob.icon className="text-black" size={20} />
                          </div>
                          <div>
                            <h3 className="font-poppins font-semibold text-lg text-gray-800">
                              {similarJob.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-1 text-sm text-gray-500">
                              <span>{similarJob.department}</span>
                              <span>•</span>
                              <span>{similarJob.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {similarJob.description}
                        </p>
                        
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/careers/${similarJob.id}`} className="flex items-center">
                            View Job
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetailPage;