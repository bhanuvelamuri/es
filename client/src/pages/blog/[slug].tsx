import { useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Share2, Bookmark, ThumbsUp, Facebook, Twitter, Linkedin, Link, ArrowLeft, ArrowRight } from "lucide-react";

// Blog post interface
interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    image: string;
    role: string;
    bio: string;
  };
  tags: string[];
  image: string;
  relatedPosts: Array<{
    slug: string;
    title: string;
    image: string;
  }>;
}

// Sample blog posts database
const blogPosts: Record<string, BlogPost> = {
  "future-of-data-analytics-2025": {
    slug: "future-of-data-analytics-2025",
    title: "The Future of Data Analytics: Trends to Watch in 2025",
    subtitle: "Emerging technologies and methodologies reshaping how businesses leverage their data assets",
    content: [
      "The data analytics landscape is evolving at an unprecedented pace, driven by technological advancements and changing business needs. As we navigate through 2025, several key trends are reshaping how organizations collect, process, and derive value from their data assets.",
      "## Federated Learning Takes Center Stage",
      "Privacy concerns and regulatory compliance have pushed federated learning into the mainstream. Rather than centralizing data for analysis, federated learning allows algorithms to be trained across multiple decentralized devices or servers holding local data samples, without exchanging them. This approach preserves privacy while still delivering powerful analytical capabilities.",
      "Financial institutions, healthcare providers, and telecommunications companies are among the early adopters, implementing federated learning to analyze sensitive customer data without compromising privacy or security. The approach is particularly valuable in cross-organizational collaborations where data sharing is restricted.",
      "## Explainable AI Becomes Non-Negotiable",
      "As AI systems make increasingly consequential decisions, the demand for transparency and explainability has grown exponentially. Explainable AI (XAI) methodologies that help stakeholders understand how and why AI systems reach specific conclusions are now considered essential, especially in regulated industries.",
      "The most successful organizations are implementing visualization tools and natural language explanations that make complex model decisions accessible to non-technical users. These solutions not only satisfy regulatory requirements but also build trust in AI-driven processes.",
      "## DataOps and MLOps Mature",
      "The integration of DevOps principles into data analytics and machine learning workflows has matured significantly. DataOps and MLOps frameworks now provide robust pipelines for the continuous development, deployment, and monitoring of data and ML solutions.",
      "Organizations embracing these methodologies report dramatic improvements in the speed and reliability of their analytics initiatives. Automated testing, model versioning, and continuous monitoring have become standard practices, significantly reducing the time to value for data projects.",
      "## Augmented Analytics Democratizes Insights",
      "Augmented analytics, which uses AI and NLP to automate data preparation and insight discovery, is democratizing access to advanced analytics capabilities. Business users can now perform complex analyses and generate insights without extensive technical knowledge.",
      "Leading platforms now offer intuitive interfaces that allow users to interact with data through natural language queries, automatically generating visualizations and identifying patterns that might otherwise remain hidden.",
      "## Real-time Analytics at Scale",
      "The ability to process and analyze data in real-time has become a competitive differentiator across industries. Advances in streaming technologies and edge computing are enabling organizations to make decisions based on the most current data available, often within milliseconds.",
      "Retail companies are using real-time analytics to personalize customer experiences on the fly, while manufacturing firms are implementing predictive maintenance systems that can detect and address equipment issues before they cause downtime.",
      "## Looking Ahead",
      "As we look toward the future, the organizations that will excel are those that view data not just as an asset but as a strategic enabler of innovation and competitive advantage. By staying attuned to these emerging trends and investing in the right capabilities, businesses can position themselves to thrive in an increasingly data-driven world."
    ],
    date: "May 17, 2025",
    readTime: "12 min read",
    category: "Technology",
    author: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
      role: "CEO",
      bio: "Michael is the founder and CEO of Excite Services with over 15 years of experience in data science and analytics. He frequently speaks at industry conferences and has published numerous articles on data strategy and implementation."
    },
    tags: ["Data Analytics", "Artificial Intelligence", "Machine Learning", "Technology Trends", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900",
    relatedPosts: [
      {
        slug: "building-data-driven-culture",
        title: "Building a Data-Driven Culture: 5 Steps for Success",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        slug: "real-time-analytics-platforms",
        title: "The Rise of Real-Time Analytics Platforms",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        slug: "ai-ml-business-applications",
        title: "Practical AI and ML Applications for Business",
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      }
    ]
  }
};

// Helper function to handle Markdown-like syntax
const formatContent = (content: string) => {
  // Handle headings
  content = content.replace(/## (.*)/g, '<h2 class="font-poppins font-semibold text-2xl text-black my-6">$1</h2>');
  
  // Handle paragraphs
  const paragraphs = content.split('\n\n');
  if (paragraphs.length > 1) {
    return paragraphs.map(p => {
      if (p.startsWith('<h2')) return p;
      return `<p class="mb-6 text-gray-700 leading-relaxed">${p}</p>`;
    }).join('');
  }
  
  return content;
};

const BlogPostPage = () => {
  // Get the slug from the URL
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "future-of-data-analytics-2025"; // Default to sample post if no slug
  
  // Get the blog post data
  const post = blogPosts[slug];
  
  // If no post is found
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-poppins font-bold text-3xl text-black mb-6">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>
            <Button asChild>
              <a href="/blog">Back to Blog</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-50 pt-0 pb-20">
        {/* Hero section with image */}
        <div className="relative h-[60vh] mb-12">
          <div className="absolute inset-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative h-full flex items-center">
            <div className="max-w-4xl text-white pt-20">
              <Badge className="mb-4 bg-white/20 backdrop-blur-sm border-none text-white">
                {post.category}
              </Badge>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                {post.title}
              </h1>
              {post.subtitle && (
                <p className="text-xl md:text-2xl text-white/90 mb-6">{post.subtitle}</p>
              )}
              
              <div className="flex items-center">
                <img 
                  src={post.author.image} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-white">{post.author.name}</p>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock size={14} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
                {/* Article content */}
                <div className="prose max-w-none">
                  {post.content.map((paragraph, index) => (
                    <div 
                      key={index} 
                      dangerouslySetInnerHTML={{ __html: formatContent(paragraph) }} 
                    />
                  ))}
                </div>
                
                {/* Tags */}
                <div className="mt-12 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
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
                
                {/* Share and save */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="h-9">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="h-9">
                      <Bookmark size={16} className="mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="h-9">
                      <ThumbsUp size={16} className="mr-2" />
                      Like
                    </Button>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-[#3b5998] text-white"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={14} />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1da1f2] text-white"
                      aria-label="Share on Twitter"
                    >
                      <Twitter size={14} />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0077b5] text-white"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={14} />
                    </a>
                    <button 
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-700"
                      aria-label="Copy link"
                    >
                      <Link size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Author bio */}
                <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex flex-col md:flex-row">
                    <img 
                      src={post.author.image} 
                      alt={post.author.name} 
                      className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                    />
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-black mb-2">
                        Written by {post.author.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{post.author.role}</p>
                      <p className="text-gray-600">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
                
                {/* Back and next buttons */}
                <div className="mt-12 flex justify-between">
                  <Button 
                    asChild
                    variant="outline" 
                    className="border-gray-200 text-gray-700"
                  >
                    <a href="/blog" className="flex items-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Blog
                    </a>
                  </Button>
                  
                  {post.relatedPosts.length > 0 && (
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-black text-black hover:bg-black hover:text-white"
                    >
                      <a href={`/blog/${post.relatedPosts[0].slug}`} className="flex items-center">
                        Next Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Related articles */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="font-poppins font-semibold text-lg text-black mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <a 
                      key={index}
                      href={`/blog/${relatedPost.slug}`}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="flex-shrink-0 w-20 h-16 rounded-md overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-black transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Popular tags */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h3 className="font-poppins font-semibold text-lg text-black mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
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

export default BlogPostPage;