
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-green-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-purple-400 rounded-full"></div>
      </div>

      {/* Circuit Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Cpath d='M7 8v44h1V8h44v1H8V7h44v1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">ElectroTrade Pro</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for electrical components, inverters, solar solutions, and industrial equipment. 
              Powering projects with quality and reliability.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="sm" 
                  className="hover:bg-blue-600/20 hover:text-blue-400 transition-colors p-2"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Products', 'Services', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <button className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Categories</h4>
            <ul className="space-y-2 text-sm">
              {['Inverters', 'Solar Equipment', 'Circuit Breakers', 'Relays & Controls', 'Sensors', 'Automation'].map((category) => (
                <li key={category}>
                  <button className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@electrotradepro.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  123 Industrial Ave<br />
                  Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-600 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 ElectroTrade Pro. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div 
          className="absolute bottom-10 right-10 opacity-20"
          style={{ transform: `translateY(${-parallaxOffset * 0.2}px)` }}
        >
          <Zap className="h-16 w-16 text-blue-400" />
        </div>
      </div>
    </footer>
  );
};
