import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Database, Server } from "lucide-react";
import dataWaveSvg from "../assets/data-wave.svg";

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
      {number}
    </p>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

const FeatureChip = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
    <Icon size={16} className="mr-2" />
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      {/* Digital abstract data network background with glossy overlay */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      {/* Glossy effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      
      {/* Grid pattern for modern tech feel */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }}
      ></div>
      
      {/* Data wave SVG for visual interest */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <img src={dataWaveSvg} alt="" className="w-full opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 py-28 md:py-36 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-12 md:mb-0 md:pr-10">
            <div className="flex flex-wrap gap-3 mb-8">
              <FeatureChip icon={Database} text="Data Collection" />
              <FeatureChip icon={Server} text="Processing" />
              <FeatureChip icon={LineChart} text="Analytics" />
            </div>
            
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              Transform <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Data</span> Into Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Advantage</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl">
              Complete data solutions from collection to insight. We handle the complexity so you can focus on making informed decisions with clarity and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-white text-black font-medium hover:bg-gray-100 rounded-md px-8 py-6 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              >
                <a href="#services" className="flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent hover:bg-white hover:text-black font-medium rounded-md px-8 py-6 transition-all duration-300"
              >
                <a href="/contact" className="flex items-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8">
              <StatItem number="500+" label="PROJECTS COMPLETED" />
              <StatItem number="92%" label="CLIENT RETENTION" />
              <StatItem number="10+" label="YEARS EXPERIENCE" />
              <StatItem number="24/7" label="DEDICATED SUPPORT" />
            </div>
          </div>
          
          <div className="md:w-2/5 relative">
            {/* Modern stylized illustration or dashboard mockup */}
            <div className="relative bg-gradient-to-br from-black/80 to-black p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl"></div>
              <div className="flex justify-between items-center mb-6">
                <div className="w-24 h-3 bg-white/10 rounded-full"></div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                </div>
              </div>
              
              {/* Dashboard Header with KPIs */}
              <div className="space-y-4 mb-6">
                <div className="h-16 bg-white/5 rounded-lg p-3">
                  <div className="flex justify-between">
                    <div className="flex flex-col space-y-1">
                      <div className="text-[10px] text-white/50">TOTAL REVENUE</div>
                      <div className="text-sm font-semibold text-white/90">$2.4M</div>
                      <div className="flex items-center space-x-1">
                        <div className="text-[8px] text-green-400">↑ 18.2%</div>
                        <div className="text-[8px] text-white/40">vs last quarter</div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="text-[10px] text-white/50">CONVERSION RATE</div>
                      <div className="text-sm font-semibold text-white/90">3.42%</div>
                      <div className="flex items-center space-x-1">
                        <div className="text-[8px] text-green-400">↑ 0.8%</div>
                        <div className="text-[8px] text-white/40">vs last month</div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="text-[10px] text-white/50">ACTIVE USERS</div>
                      <div className="text-sm font-semibold text-white/90">128.5K</div>
                      <div className="flex items-center space-x-1">
                        <div className="text-[8px] text-green-400">↑ 24.3%</div>
                        <div className="text-[8px] text-white/40">vs last year</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mini Charts Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-white/5 rounded-lg p-3">
                    <div className="text-[10px] text-white/50 mb-1">DATA PROCESSED</div>
                    <div className="flex justify-between items-center h-8">
                      <div className="text-sm font-semibold text-white/90">4.2TB</div>
                      {/* Mini Line Chart */}
                      <div className="w-3/5 h-8 relative">
                        <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
                          <path 
                            d="M0,15 L10,18 L20,10 L30,12 L40,8 L50,15 L60,5 L70,10 L80,3 L90,8 L100,2" 
                            fill="none" 
                            stroke="rgba(255,255,255,0.5)" 
                            strokeWidth="1.5"
                          />
                          <path 
                            d="M0,15 L10,18 L20,10 L30,12 L40,8 L50,15 L60,5 L70,10 L80,3 L90,8 L100,2" 
                            fill="rgba(255,255,255,0.1)"
                            strokeWidth="0"
                            transform="translate(0,1)"
                          />
                        </svg>
                        {/* Data Points */}
                        <div className="absolute top-[10px] left-[60%] w-1.5 h-1.5 rounded-full bg-white/80 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-[3px] left-[80%] w-1.5 h-1.5 rounded-full bg-white/80 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-[2px] left-[100%] w-1.5 h-1.5 rounded-full bg-white/80 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </div>
                    <div className="text-[8px] text-green-400 mt-1">+28% this month</div>
                  </div>
                  
                  <div className="h-20 bg-white/5 rounded-lg p-3">
                    <div className="text-[10px] text-white/50 mb-1">INSIGHTS GENERATED</div>
                    <div className="flex justify-between items-center h-8">
                      <div className="text-sm font-semibold text-white/90">8.7K</div>
                      {/* Mini Donut Chart */}
                      <div className="w-12 h-12 relative">
                        <svg width="100%" height="100%" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3"></circle>
                          <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="3" strokeDasharray="100" strokeDashoffset="25"></circle>
                          <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeDasharray="100" strokeDashoffset="65"></circle>
                          {/* Data Label */}
                          <text x="18" y="18" textAnchor="middle" dy=".3em" fill="white" fontSize="9">75%</text>
                        </svg>
                      </div>
                    </div>
                    <div className="text-[8px] text-green-400 mt-1">+12% accuracy improvement</div>
                  </div>
                </div>
              </div>
              
              {/* Main Chart */}
              <div className="h-40 bg-white/5 rounded-lg overflow-hidden relative">
                <div className="absolute top-2 left-3 text-[10px] text-white/50">DATA TRAFFIC ANALYSIS</div>
                <div className="absolute top-2 right-3 flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                    <div className="text-[8px] text-white/50">Primary</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="text-[8px] text-white/50">Secondary</div>
                  </div>
                </div>
                
                <div className="absolute inset-6 mt-4">
                  {/* Chart data visualization with actual data points */}
                  <div className="flex items-end h-full space-x-2">
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[60%] bg-white/20 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">125K</div>
                      </div>
                      <div className="w-full h-[25%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[80%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">183K</div>
                      </div>
                      <div className="w-full h-[35%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[40%] bg-white/20 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">92K</div>
                      </div>
                      <div className="w-full h-[20%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[100%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">220K</div>
                      </div>
                      <div className="w-full h-[50%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[60%] bg-white/20 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">142K</div>
                      </div>
                      <div className="w-full h-[30%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[75%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">168K</div>
                      </div>
                      <div className="w-full h-[40%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[85%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">192K</div>
                      </div>
                      <div className="w-full h-[42%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[65%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">146K</div>
                      </div>
                      <div className="w-full h-[38%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[90%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">205K</div>
                      </div>
                      <div className="w-full h-[45%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[70%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">158K</div>
                      </div>
                      <div className="w-full h-[35%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[95%] bg-white/30 rounded-sm relative group transition-all duration-300 hover:bg-white/40">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">215K</div>
                      </div>
                      <div className="w-full h-[48%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                    <div className="w-1/12 flex flex-col items-center">
                      <div className="w-full h-[110%] bg-gradient-to-t from-white/30 to-white/50 rounded-sm relative group transition-all duration-300 hover:bg-white/60">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">235K</div>
                      </div>
                      <div className="w-full h-[55%] bg-white/10 rounded-sm mt-0.5"></div>
                    </div>
                  </div>
                  
                  {/* Chart grid lines */}
                  <div className="absolute inset-x-0 top-1/4 h-px bg-white/10"></div>
                  <div className="absolute inset-x-0 top-2/4 h-px bg-white/10"></div>
                  <div className="absolute inset-x-0 top-3/4 h-px bg-white/10"></div>
                  
                  {/* Chart labels */}
                  <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[8px] text-white/40">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                  </div>
                  
                  {/* Trend lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Main trend line */}
                      <path 
                        d="M0,60 L8.3,40 L16.7,80 L25,20 L33.3,60 L41.7,50 L50,40 L58.3,10 L66.7,40 L75,30 L83.3,35 L91.7,20 L100,5" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.7)" 
                        strokeWidth="1.5"
                      />
                      {/* Data points on the line */}
                      <circle cx="0" cy="60" r="1" fill="white" />
                      <circle cx="8.3" cy="40" r="1" fill="white" />
                      <circle cx="16.7" cy="80" r="1" fill="white" />
                      <circle cx="25" cy="20" r="1" fill="white" />
                      <circle cx="33.3" cy="60" r="1" fill="white" />
                      <circle cx="41.7" cy="50" r="1" fill="white" />
                      <circle cx="50" cy="40" r="1" fill="white" />
                      <circle cx="58.3" cy="10" r="1" fill="white" />
                      <circle cx="66.7" cy="40" r="1" fill="white" />
                      <circle cx="75" cy="30" r="1" fill="white" />
                      <circle cx="83.3" cy="35" r="1" fill="white" />
                      <circle cx="91.7" cy="20" r="1" fill="white" />
                      <circle cx="100" cy="5" r="1" fill="white" />
                      
                      {/* Secondary trend line */}
                      <path 
                        d="M0,70 L8.3,65 L16.7,75 L25,60 L33.3,70 L41.7,65 L50,70 L58.3,55 L66.7,60 L75,55 L83.3,65 L91.7,50 L100,45" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-white/10 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border border-white/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
