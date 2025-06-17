
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-indigo-300 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 border-2 border-indigo-400 rounded-full"></div>
      </div>

      {/* Grid Pattern with Parallax */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-5"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <div 
            className="flex justify-center mb-6"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <div className="bg-blue-100 p-4 rounded-full">
              <Zap className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            Your Trusted
            <span className="block text-blue-600">Electric Trading Partner</span>
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            Leading supplier of electrical components, inverters, solar solutions, and industrial equipment. 
            From circuit breakers to sensors, we provide everything you need to power your projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700">
              Get Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              View Products
            </Button>
          </div>
        </div>
        
        <div 
          className="mt-16 relative"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Inverters", count: "500+" },
              { title: "Components", count: "2000+" },
              { title: "Satisfied Clients", count: "1000+" },
              { title: "Years Experience", count: "15+" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-600">{stat.count}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Parallax Elements */}
      <div 
        className="absolute top-1/4 right-10 opacity-10"
        style={{ transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.1}deg)` }}
      >
        <Zap className="h-24 w-24 text-blue-500" />
      </div>
    </section>
  );
};
