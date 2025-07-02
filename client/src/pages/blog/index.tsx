import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Search, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Blog post type
interface BlogPost {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  tags: string[];
}

// Featured post component
const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <Card className="mb-12 overflow-hidden rounded-xl border-0 shadow-xl transition-all duration-500 hover:shadow-2xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      <div className="relative h-80 md:h-auto">
        <img 
          src={post.image} 
          alt={post.title} 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/40 md:to-transparent"></div>
        
        <div className="absolute bottom-6 left-6 md:top-1/2 md:-translate-y-1/2 md:max-w-md z-10 text-white">
          <Badge className="bg-white/20 text-white backdrop-blur-sm text-xs mb-4">
            Featured
          </Badge>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-3">{post.title}</h2>
          <p className="text-white/80 mb-4 text-sm md:text-base line-clamp-2 md:line-clamp-3">{post.excerpt}</p>
          
          <div className="flex items-center text-white/70 text-sm mb-4">
            <Calendar size={14} className="mr-1" />
            <span className="mr-4">{post.date}</span>
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
          
          <Button 
            asChild
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black"
          >
            <a href={`/blog/${post.slug}`} className="flex items-center">
              Read Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="p-8 md:p-12 bg-white md:block hidden">
        <div className="h-full flex flex-col">
          <p className="text-gray-600 text-lg mb-6 flex-grow">
            The data analytics landscape is evolving rapidly in 2025, with new technologies and methodologies 
            transforming how businesses leverage their data assets. From federated learning to explainable AI, 
            this article explores the key trends that will shape the future of data analytics.
          </p>
          
          <div className="flex items-center">
            <img 
              src={post.author.image} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-medium text-black">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

// Blog post card component
const BlogPostCard = ({ post, index }: { post: BlogPost; index: number }) => (
  <Card 
    className="overflow-hidden rounded-xl border-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col"
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <div className="relative h-52 overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <Badge className="absolute top-4 left-4 bg-white/90 text-black backdrop-blur-sm">
        {post.category}
      </Badge>
    </div>
    
    <CardContent className="p-6 flex-grow flex flex-col">
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <Calendar size={14} className="mr-1" />
        <span className="mr-3">{post.date}</span>
        <Clock size={14} className="mr-1" />
        <span>{post.readTime}</span>
      </div>
      
      <h3 className="font-poppins font-semibold text-xl text-black mb-3 line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
        <div className="flex items-center">
          <img 
            src={post.author.image} 
            alt={post.author.name} 
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm text-gray-700">{post.author.name}</span>
        </div>
        
        <a 
          href={`/blog/${post.slug}`} 
          className="text-black font-medium text-sm flex items-center relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >
          Read
          <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </CardContent>
  </Card>
);

// Blog categories
const categories = [
  "All Categories",
  "Data Strategy",
  "Technology",
  "Security",
  "AI & Machine Learning",
  "Data Governance",
  "Cloud Computing"
];

// Blog tags
const tags = [
  "Machine Learning",
  "Big Data",
  "Data Privacy",
  "Cloud Computing",
  "AI Ethics",
  "Real-time Analytics",
  "Data Visualization",
  "Predictive Analytics"
];

// Blog page
const BlogPage = () => {
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      slug: "future-of-data-analytics-2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600",
      title: "The Future of Data Analytics: Trends to Watch in 2025",
      excerpt: "Explore the emerging technologies and methodologies that will shape the data analytics landscape in the coming years, from federated learning to explainable AI.",
      date: "May 17, 2025",
      readTime: "12 min read",
      category: "Technology",
      author: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        role: "CEO"
      },
      tags: ["AI", "Machine Learning", "Analytics"]
    },
    {
      slug: "building-data-driven-culture",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      title: "Building a Data-Driven Culture: 5 Steps for Success",
      excerpt: "Discover how leading organizations are creating a data-driven culture that empowers teams to make better decisions.",
      date: "May 15, 2025",
      readTime: "8 min read",
      category: "Data Strategy",
      author: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        role: "CEO"
      },
      tags: ["Data Culture", "Leadership", "Teams"]
    },
    {
      slug: "real-time-analytics-platforms",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      title: "The Rise of Real-Time Analytics Platforms",
      excerpt: "How modern businesses are leveraging streaming data and real-time analytics to gain competitive advantage.",
      date: "May 10, 2025",
      readTime: "6 min read",
      category: "Technology",
      author: {
        name: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        role: "CTO"
      },
      tags: ["Real-time Analytics", "Streaming", "Technology"]
    },
    {
      slug: "big-data-security-challenges",
      image: "https://images.unsplash.com/photo-1576482060149-91d34ea14dab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      title: "Addressing Big Data Security Challenges in 2025",
      excerpt: "As data volumes grow, so do security threats. Learn about the latest approaches to securing your data infrastructure.",
      date: "May 5, 2025",
      readTime: "10 min read",
      category: "Security",
      author: {
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        role: "Chief Data Officer"
      },
      tags: ["Security", "Data Protection", "Compliance"]
    },
    {
      slug: "ai-ml-business-applications",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      title: "Practical AI and ML Applications for Business",
      excerpt: "Beyond the hype: practical ways businesses are using AI and machine learning to solve real problems.",
      date: "April 28, 2025",
      readTime: "7 min read",
      category: "AI & Machine Learning",
      author: {
        name: "David Patel",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        role: "COO"
      },
      tags: ["AI", "Machine Learning", "Business"]
    },
    {
      slug: "data-governance-best-practices",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      title: "Data Governance Best Practices for Modern Enterprises",
      excerpt: "How to establish effective data governance frameworks that enable innovation while ensuring compliance.",
      date: "April 22, 2025",
      readTime: "9 min read",
      category: "Data Governance",
      author: {
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        role: "Chief Data Officer"
      },
      tags: ["Governance", "Compliance", "Data Management"]
    }
  ];
  
  // Featured post is the first one
  const featuredPost = blogPosts[0];
  // Regular posts are the rest
  const regularPosts = blogPosts.slice(1);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-50 pt-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-6">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-black mb-6">
                Data Insights Blog
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Expert perspectives, industry trends, and practical advice for data-driven organizations
              </p>
            </div>
            
            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full py-3 px-12 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Featured post */}
          <FeaturedPost post={featuredPost} />
          
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Posts grid */}
            <div className="md:col-span-2">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="font-poppins font-semibold text-2xl text-black">Latest Articles</h2>
                <div className="flex space-x-1">
                  <select className="bg-white border border-gray-200 rounded-md text-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-black/50">
                    {categories.map((category, index) => (
                      <option key={index} value={category === "All Categories" ? "" : category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post, index) => (
                  <BlogPostCard key={post.slug} post={post} index={index} />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  Load More Articles
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="mt-10 md:mt-0">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="font-poppins font-semibold text-lg text-black mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <a 
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between text-gray-600 hover:text-black transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-700 text-xs rounded-full px-2 py-1">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular tags */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Tag className="text-black mr-2" size={18} />
                  <h3 className="font-poppins font-semibold text-lg text-black">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <a 
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Newsletter signup */}
              <div className="bg-black text-white rounded-xl shadow-sm p-6">
                <h3 className="font-poppins font-semibold text-lg mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest insights on data technology, industry trends, and best practices delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full py-2 px-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="w-full bg-white text-black hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;