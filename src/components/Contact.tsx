
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if contact section is in view
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@electrotradepro.com", "support@electrotradepro.com"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Industrial Blvd", "Electronics District, ED 12345"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-4PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-10 left-20 w-32 h-32 border-2 border-blue-200 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-24 h-24 border-2 border-green-200 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-yellow-200 rounded-full"></div>
        <div className="absolute top-32 right-10 w-20 h-20 border-2 border-purple-200 rounded-full"></div>
      </div>

      {/* Floating geometric shapes */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.02}deg)` }}
      >
        <div className="absolute top-40 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with fall-in animation */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
          style={{ 
            transitionDelay: '0.2s',
            transform: `translateY(${scrollY * -0.1}px) ${isVisible ? 'translateY(0)' : 'translateY(48px)'}`
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Quote Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to power your next project? Contact us for competitive pricing and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form with staggered fall-in animation */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-16'
            }`}
            style={{ 
              transitionDelay: '0.4s',
              transform: `translateY(${scrollY * 0.05}px) ${isVisible ? 'translateY(0)' : 'translateY(64px)'}`
            }}
          >
            <Card className="hover:shadow-xl transition-all duration-500 backdrop-blur-sm bg-white/95">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="ABC Electricals"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details / Requirements *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe your requirements, quantities needed, and any specific product models..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact info cards with cascading fall-in animation */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${0.6 + index * 0.15}s`,
                  transform: `translateY(${scrollY * (0.03 + index * 0.02)}px) ${isVisible ? 'translateY(0)' : 'translateY(48px)'}`
                }}
              >
                <Card className="border-l-4 border-l-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/95">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <div 
                        className="bg-blue-100 p-2 rounded-full transition-all duration-300"
                        style={{ 
                          transform: `rotate(${scrollY * 0.02}deg) scale(${isVisible ? 1 : 0.8})`
                        }}
                      >
                        <info.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Floating icons with subtle parallax */}
        <div 
          className="absolute top-20 right-5 opacity-15"
          style={{ 
            transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * 0.03}deg) scale(${isVisible ? 1 : 0.8})`,
            transition: 'transform 0.1s ease-out, scale 0.8s ease-out'
          }}
        >
          <Phone className="h-20 w-20 text-blue-400 drop-shadow-lg" />
        </div>
        <div 
          className="absolute bottom-32 left-5 opacity-15"
          style={{ 
            transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * -0.02}deg) scale(${isVisible ? 1 : 0.8})`,
            transition: 'transform 0.1s ease-out, scale 0.8s ease-out'
          }}
        >
          <Mail className="h-18 w-18 text-green-400 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};
