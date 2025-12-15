import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  //first render check
  const firstRender =  useRef(true);

  useEffect(() => {
    const hasAnimated = localStorage.getItem("navbarAnimated");

    if (hasAnimated) {
      firstRender.current = false;
    } else {
      firstRender.current = true;
      localStorage.setItem("navbarAnimated", "true");
    }
  }, []);

  //Framer Motion 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, 
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#0A284E] text-primary-foreground py-2 hidden md:block">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+91 7428713868" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 7428713868</span>
            </a>
            <a href="mailto:info@shreejienterprises8.in " className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span> info@shreejienterprises8.in </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-accent" />
            <span className="font-medium">Powering Your Future with Clean Energy</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="">
                {/* <Zap className="w-7 h-7 text-accent" /> */}
                <img className="w-[60px]" src="logo3.png" alt="" />
              </div>
              <div>
                {/* <h1 className="font-display font-bold text-xl text-[#CEA42A] leading-tight">
                  SHREEJI ENTERPRISES
                </h1> */}
                 <h1 className="font-display text-xl font-bold text-[#D1A730]">
                  SHREEJI ENTERPRISES
                </h1>
                {/* <
                {/* <p className="text-xs text-muted-foreground font-medium tracking-wide">
                  
                </p> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden lg:flex items-center gap-1"
              variants={container}
              initial={firstRender.current ? "hidden" : false}
              animate={firstRender.current ? "show" : false}
              onAnimationComplete={()=> {firstRender.current = false}}
            >
              {navLinks.map((link) => (
                <motion.div variants={item} key={link.path}>
                  <Link
                    // key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${location.pathname === link.path
                        ? "bg-[#0A284E] text-primary-foreground"
                        : "text-foreground hover:bg-secondary hover:text-[#0A284E]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="accent" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${location.pathname === link.path
                        ? "bg-[#0A284E] text-primary-foreground"
                        : "text-[#0A284E] hover:bg-secondary"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button variant="accent" className="mt-4" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
