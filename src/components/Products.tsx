
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Sun, CircuitBoard, Gauge, Thermometer, Timer, Shield, Power } from "lucide-react";

export const Products = () => {
  const productCategories = [
    {
      icon: Power,
      title: "Power Inverters",
      description: "High-quality AC/DC inverters for various applications",
      products: ["Pure Sine Wave Inverters", "Modified Sine Wave", "Grid-Tie Inverters"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      icon: Sun,
      title: "Solar Equipment",
      description: "Complete solar power solutions and components",
      products: ["Solar Inverters", "Solar Panels", "Charge Controllers", "Batteries"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop"
    },
    {
      icon: CircuitBoard,
      title: "Circuit Breakers",
      description: "Electrical safety and protection devices",
      products: ["MCBs", "RCCBs", "ACBs", "Miniature Breakers"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "Relays & Contactors",
      description: "Control and switching solutions",
      products: ["Power Relays", "Control Relays", "Contactors", "Auxiliary Contacts"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      icon: Thermometer,
      title: "Sensors & Detectors",
      description: "Precision sensing and monitoring equipment",
      products: ["Temperature Sensors", "Proximity Sensors", "Pressure Sensors", "Flow Sensors"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    },
    {
      icon: Shield,
      title: "Overload Protection",
      description: "Motor and equipment protection devices",
      products: ["Thermal Overloads", "Motor Protectors", "Surge Protectors"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      icon: Timer,
      title: "Timers & Controllers",
      description: "Automation and timing control solutions",
      products: ["Digital Timers", "Analog Timers", "PLC Controllers", "Process Controllers"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      icon: Gauge,
      title: "Measuring Instruments",
      description: "Precision electrical measurement tools",
      products: ["Multimeters", "Clamp Meters", "Power Analyzers", "Oscilloscopes"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive selection of electrical and electronic components for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {category.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.products.map((product, productIndex) => (
                    <Badge key={productIndex} variant="secondary" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see what you're looking for? We supply many more electrical and electronic components.
          </p>
          <Badge variant="outline" className="text-blue-600 border-blue-600 px-4 py-2 text-base">
            Contact us for custom orders and bulk pricing
          </Badge>
        </div>
      </div>
    </section>
  );
};
