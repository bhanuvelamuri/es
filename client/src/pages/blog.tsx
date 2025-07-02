import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

// Blog posts data
const blogPosts = [
  {
    slug: "building-a-data-driven-culture",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "Data Strategy",
    title: "Building a Data-Driven Culture: 5 Steps for Success",
    excerpt: "Discover how leading organizations are creating a data-driven culture that empowers teams to make better decisions.",
    author: "Michael Chen",
    authorRole: "CEO",
    date: "May 15, 2025",
    readTime: "8 min read"
  },
  {
    slug: "real-time-analytics-platforms",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "Technology",
    title: "The Rise of Real-Time Analytics Platforms",
    excerpt: "How modern businesses are leveraging streaming data and real-time analytics to gain competitive advantage.",
    author: "Sarah Johnson",
    authorRole: "CTO",
    date: "May 10, 2025",
    readTime: "6 min read"
  },
  {
    slug: "big-data-security-challenges",
    image: "https://images.unsplash.com/photo-1576482060149-91d34ea14dab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "Security",
    title: "Addressing Big Data Security Challenges in 2025",
    excerpt: "As data volumes grow, so do security threats. Learn about the latest approaches to securing your data infrastructure.",
    author: "Elena Rodriguez",
    authorRole: "Chief Data Officer",
    date: "May 5, 2025",
    readTime: "10 min read"
  },
  {
    slug: "ai-ml-business-applications",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "AI & Machine Learning",
    title: "Practical AI and ML Applications for Business",
    excerpt: "Beyond the hype: practical ways businesses are using AI and machine learning to solve real problems.",
    author: "David Patel",
    authorRole: "COO",
    date: "April 28, 2025",
    readTime: "7 min read"
  },
  {
    slug: "data-governance-best-practices",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "Data Governance",
    title: "Data Governance Best Practices for Modern Enterprises",
    excerpt: "How to establish effective data governance frameworks that enable innovation while ensuring compliance.",
    author: "Elena Rodriguez",
    authorRole: "Chief Data Officer",
    date: "April 22, 2025",
    readTime: "9 min read"
  },
  {
    slug: "cloud-data-warehousing",
    image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    category: "Cloud Computing",
    title: "The Evolution of Cloud Data Warehousing",
    excerpt: "From traditional warehouses to modern cloud solutions: how data warehousing has transformed.",
    author: "Sarah Johnson",
    authorRole: "CTO",
    date: "April 15, 2025",
    readTime: "8 min read"
  }
];

// Featured categories
const categories = [
  "Data Strategy", 
  "Technology", 
  "Security", 
  "AI & Machine Learning", 
  "Data Governance", 
  "Cloud Computing",
  "IoT",
  "Big Data"
];

const BlogPost = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <Card className="overflow-hidden transition duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </Badge>
        </div>
        <h3 className="font-poppins font-semibold text-xl mb-3 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <Clock className="text-gray-400 mr-1" size={14} />
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <div className="text-sm text-gray-500">{post.date}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Blog Banner */}
        <section className="gradient-bg text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
                Data Insights Blog
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Expert perspectives, industry trends, and practical advice for data-driven organizations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="h-64 md:h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800"
                    alt="The Future of Data Analytics" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      Featured
                    </Badge>
                  </div>
                  <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-4 text-gray-800">
                    The Future of Data Analytics: Trends to Watch in 2025
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore the emerging technologies and methodologies that will shape the data analytics landscape in the coming years, from federated learning to explainable AI.
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                        <img 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
                          alt="Michael Chen" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Michael Chen</p>
                        <p className="text-sm text-gray-500">May 17, 2025 • 12 min read</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="flex items-center space-x-1"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between mb-12">
              <div>
                <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Latest Articles</h2>
                <p className="text-gray-600 max-w-2xl">Insights and perspectives from our team of data experts</p>
              </div>
              <div className="mt-6 md:mt-0">
                <div className="relative">
                  <select className="block appearance-none bg-white border border-gray-200 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-primary">
                    <option>All Categories</option>
                    {categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPost key={post.slug} post={post} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="px-8">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-poppins font-bold text-3xl text-gray-800 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to receive the latest insights on data technology, industry trends, and best practices.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-2 sm:mb-0"
                />
                <Button className="sm:rounded-l-none">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;