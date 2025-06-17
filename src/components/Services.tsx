
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
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute top-10 left-20 w-40 h-40 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 border border-gray-300 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 border border-gray-300 rounded-full"></div>
        <div className="absolute top-32 right-10 w-24 h-24 border border-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
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
                transform: `translateY(${scrollY * (0.05 + index * 0.02)}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Card className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-4">
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

        {/* Floating Service Icons with Parallax */}
        <div 
          className="absolute top-20 right-5 opacity-10"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * 0.05}deg)` }}
        >
          <Truck className="h-20 w-20 text-blue-400" />
        </div>
        <div 
          className="absolute bottom-32 left-5 opacity-10"
          style={{ transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * -0.05}deg)` }}
        >
          <Shield className="h-16 w-16 text-green-400" />
        </div>
      </div>
    </section>
  );
};
