
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

export const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ Years",
      subtitle: "Industry Experience"
    },
    {
      icon: Users,
      title: "1000+",
      subtitle: "Happy Clients"
    },
    {
      icon: Globe,
      title: "50+",
      subtitle: "Brand Partners"
    },
    {
      icon: TrendingUp,
      title: "99%",
      subtitle: "Customer Satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About ElectroTrade Pro
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                For over 15 years, ElectroTrade Pro has been the trusted partner for businesses and professionals 
                seeking high-quality electrical and electronic components. We specialize in providing comprehensive 
                solutions for industrial, commercial, and residential applications.
              </p>
              <p>
                Our extensive inventory includes everything from basic electrical components to advanced automation 
                systems. We work with leading manufacturers to ensure our customers receive genuine, reliable products 
                backed by comprehensive warranties and expert support.
              </p>
              <p>
                Whether you're an electrical contractor, system integrator, or facility manager, we have the expertise 
                and inventory to support your projects from concept to completion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
                <CardContent className="pt-6">
                  <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.subtitle}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
