
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, Headphones, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const Services = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery of electrical components across the region"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products come with manufacturer warranties and quality guarantees"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert technical support and consultation whenever you need it"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Rapid quotations and order processing for urgent requirements"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.02}deg)` }}
      >
        <div className="absolute top-10 left-20 w-40 h-40 border-2 border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 border-2 border-green-200 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 border-2 border-yellow-200 rounded-full"></div>
        <div className="absolute top-32 right-10 w-24 h-24 border-2 border-purple-200 rounded-full"></div>
      </div>

      {/* Additional floating elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${scrollY * -0.3}px) translateX(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-40 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-sm"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-gradient-to-r from-green-100 to-teal-100 rounded-full blur-sm"></div>
        <div className="absolute top-60 right-1/2 w-12 h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className="text-center mb-16"
          style={{ 
            transform: `translateY(${scrollY * -0.15}px) scale(${1 + scrollY * 0.0001})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ElectroTrade Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a supplier - we're your electrical solutions partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ 
                transform: `
                  translateY(${scrollY * (0.08 + index * 0.03)}px) 
                  translateX(${scrollY * (index % 2 === 0 ? 0.02 : -0.02)}px)
                  rotate(${scrollY * (index % 2 === 0 ? 0.01 : -0.01)}deg)
                  scale(${1 + scrollY * 0.00005})
                `,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Card className="border-2 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 backdrop-blur-sm bg-white/90">
                <CardHeader className="text-center">
                  <div 
                    className="mx-auto bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-full w-fit mb-4 shadow-lg"
                    style={{ 
                      transform: `rotate(${scrollY * (0.03 + index * 0.01)}deg)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  >
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Service Icons with Complex Parallax */}
        <div 
          className="absolute top-20 right-5 opacity-15"
          style={{ 
            transform: `
              translateY(${scrollY * -0.25}px) 
              translateX(${scrollY * 0.05}px)
              rotate(${scrollY * 0.08}deg)
              scale(${1 + scrollY * 0.0002})
            `,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Truck className="h-24 w-24 text-blue-400 drop-shadow-lg" />
        </div>
        <div 
          className="absolute bottom-32 left-5 opacity-15"
          style={{ 
            transform: `
              translateY(${scrollY * -0.35}px) 
              translateX(${scrollY * -0.03}px)
              rotate(${scrollY * -0.06}deg)
              scale(${1 + scrollY * 0.0001})
            `,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Shield className="h-20 w-20 text-green-400 drop-shadow-lg" />
        </div>
        <div 
          className="absolute top-1/2 right-1/4 opacity-10"
          style={{ 
            transform: `
              translateY(${scrollY * 0.2}px) 
              translateX(${scrollY * 0.08}px)
              rotate(${scrollY * 0.04}deg)
            `,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Headphones className="h-18 w-18 text-purple-400 drop-shadow-lg" />
        </div>
        <div 
          className="absolute bottom-1/4 right-1/3 opacity-12"
          style={{ 
            transform: `
              translateY(${scrollY * -0.18}px) 
              translateX(${scrollY * -0.06}px)
              rotate(${scrollY * -0.03}deg)
            `,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Clock className="h-16 w-16 text-orange-400 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};
