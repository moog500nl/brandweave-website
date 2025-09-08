import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out animate-[float_3s_ease-in-out_infinite]",
      "backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg",
      scrolled && "backdrop-blur-lg bg-white/20 shadow-xl"
    )}>
      <div className="flex items-center justify-between px-6 py-3 md:px-8 md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ae8e5105-f900-4629-af41-dd2ee2de51aa.png" 
            alt="Logo" 
            className="h-8 w-auto md:h-10"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-roboto text-[#14213d] font-medium text-sm transition-all duration-300 hover:scale-110 hover:text-[#14213d]/80 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14213d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 transition-all duration-300 hover:bg-white/30"
        >
          {isOpen ? (
            <X className="h-5 w-5 text-[#14213d]" />
          ) : (
            <Menu className="h-5 w-5 text-[#14213d]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-out",
        "backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg overflow-hidden",
        isOpen ? "opacity-100 transform scale-100" : "opacity-0 transform scale-95 pointer-events-none"
      )}>
        <div className="py-4">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-6 py-3 font-roboto text-[#14213d] font-medium text-sm transition-all duration-300",
                "hover:bg-white/20 hover:backdrop-blur-lg transform hover:scale-105 hover:translate-x-2"
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;