import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const products = [
  {
    title: "Solar Systems",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",
    features: ["Solar Panels", "Inverters", "Batteries", "Complete Installations"],
  },
  {
    title: "LED Lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
    features: ["LED Panels", "Bulbs & Tubes", "Concealed Lighting", "Decorative Lights"],
  },
  {
    title: "Electrical Equipment",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    features: ["Switches & Sockets", "Wires & Cables", "MCBs & DBs", "Accessories"],
  },
  {
    title: "EV Chargers",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80",
    features: ["AC Chargers", "DC Fast Chargers", "Home Solutions", "Commercial Stations"],
  },
];

const ProductsPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quality Products for Every Need
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a wide range of high-quality products from trusted brands. Available for retail and bulk orders.
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
                <h3 className="font-display text-2xl font-bold mb-4">{product.title}</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/products" 
                  className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all"
                >
                  View Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/products">
              Browse All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
