
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, Headphones, Clock } from "lucide-react";

export const Services = () => {
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ElectroTrade Pro?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a supplier - we're your electrical solutions partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
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
          ))}
        </div>
      </div>
    </section>
  );
};
