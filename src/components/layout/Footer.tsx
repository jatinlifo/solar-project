import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { title } from "process";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 ">
                {/* <Zap className="w-7 h-7 text-accent" /> */}
                <img className="" src="logo3.png" alt="" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-[#CEA42A]">SHREEJI ENTERPRISES</h3>
                {/* <p className="text-xs text-primary-foreground/70 font-medium tracking-wide">ENTERPRISES</p> */}
              </div>
            </Link>
            <div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed font-bold italic">
                "The Foundation of Growth and Excellence"
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Your trusted partner for solar systems, electrical solutions, LED lighting, and EV charging infrastructure.
              </p>
            </div>
            <div className="flex gap-3 ">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/17V1tAc2cf/"
                className="w-10 md:h-9 h-10  bg-[#1877F2] rounded-lg flex items-center justify-center
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 md:h-9 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shreeji_enterprises8?igsh=MWx6MDhueHl4MTJwag=="
                className="w-10 md:h-9 h-10 bg-[#E4405F] rounded-lg flex items-center justify-center
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              {/* X (Official) */}
              <a
                href="#"
                className="w-10 md:h-9 h-10 bg-black rounded-lg flex items-center justify-center
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaXTwitter className="w-5 h-5 text-white" />
              </a>

              {/* WhatsApp (Official) */}
              <a
                href="#"
                className="w-10 md:h-9 h-9 bg-[#25D366] rounded-lg flex items-center justify-center
               transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://youtube.com/@shreejienterprises8?si=Sb3KVmL4JwFApJiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 md:h-9 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center
             transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 md:ml-16">Quick Links</h4>
            <ul className="space-y-3 md:ml-16">
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
              {[{ title: "Solar Systems", route: "solar-system" }, { title: "EV Chargers", route: "ev-chargers" }, { title: "Electrical Equipment", route: "electrical-equipment" },
              { title: "LED Lighting", route: "led-lighting" }, { title: "Electrical Service", route: "electrical-service" },
              { title: "Plumbing Service", route: "plumbing-service" }, { title: "AMC Service", route: "amc-service" }].
                map((item) => (
                  <li key={item.title}>
                    <Link to={`/${item.route}`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                      {item.title}
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
                  <p className="text-primary-foreground/80">+91 7428713868</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80">info@shreejienterprises8.in </p>
              </li>
              {/* <li className="flex items-start gap-3"> */}
                <a href="https://maps.app.goo.gl/vXE71aX3fXBaBVua8?g_st=awb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-primary-foreground/80">Kh. No. 96/15, Ground Floor, Holambi Kalan, North Delhi-110082, India</p>
                </a>
              {/* </li> */}
            </ul>
            {/* <div className="mt-6 p-4 bg-primary/20 rounded-lg">
              <p className="text-sm text-primary-foreground/70">GSTIN: [07BZDPJ7004G1ZN]</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex justify-center items-center">
          <p className="text-primary-foreground/60 text-sm">
            © T&C Apply
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
