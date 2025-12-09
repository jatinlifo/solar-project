import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Lightbulb,
  Plug,
  Car,
  Wrench,
  Droplets,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const products = [
  {
    route: 'electrical-service',
    title: "Electrical Service & Maintenance ",
    image: "/items/1.jpeg",
    features: ["Solar Panels", "Inverters", "Batteries", "EV Charger, etc."],
  },
  {
    route: 'plumbing-service', 
    title: "Plumbing Service & Maintenance",
    image: "/items/2.jpeg",
    features: ["New installations",
      "Commercial plumbing",
      "Emergency services",
      "Pipe repairs, etc",],
  },
  {
    route: 'amc-service', 
    title: "Annual Maintenance Contract",
    image: "/items/3.jpeg",
    features: ["Preventive Service",
      "Breakdown Response",
      "Health Reports",
      "24/7 Technical Support",]
  },

];

const ServicesPreview = () => {
  return (

    <section className="p-3 bg-secondary ">
      <div className="container-wide">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-[#0A284E] rounded-full text-lg font-semibold mb-4">
            Our Services
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Energy & Electrical Solutions
          </h2>

          <p className="text-lg text-muted-foreground">
            From installation to maintenance, we provide end-to-end solutions for all your energy and electrical needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-display text-2xl md:text-2xl font-bold mb-2 md:mb-4">{product.title}</h3>
                <div className="grid grid-cols-2 gap-2 mb-2 md:mb-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="md:text-sm text-[10px]">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to={`/${product.route}`} 
                  className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all"
                >
                  View Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
         {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/products">
               All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

  );
};

export default ServicesPreview;
