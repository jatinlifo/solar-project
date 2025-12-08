import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-glow">
                {/* <Zap className="w-7 h-7 text-accent" /> */}
                <img className="" src="logo3.png" alt="" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#CEA42A]">SHREEJI ENTERPRISES</h3>
                {/* <p className="text-xs text-primary-foreground/70 font-medium tracking-wide">ENTERPRISES</p> */}
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              The Foundation of Growth and Excellence. Your trusted partner for solar systems, electrical solutions, LED lighting, and EV charging infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-[#0A284E] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-[#0A284E] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-[#0A284E] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-[#0A284E] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Services", "Gallery", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {["Solar Systems", "LED Lighting", "Electrical Equipment", "EV Chargers"].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">123 7655799</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80">lenyyoourtmail@email.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80">Povisaaz Address Here</p>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-primary/20 rounded-lg">
              <p className="text-sm text-primary-foreground/70">GSTIN: [Placeholder]</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Shreeji Enterprises. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Retail & Bulk Deal Supplier
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
