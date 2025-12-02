import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Lightbulb, 
  Plug, 
  Car, 
  Wrench, 
  Droplets,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Installation",
    description: "Complete solar system installation and maintenance for residential and commercial properties.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Lightbulb,
    title: "LED Lighting Setup",
    description: "Energy-efficient LED lighting solutions including panels, decorative, and concealed lighting.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Plug,
    title: "Electrical Work",
    description: "Professional electrical wiring, panel installation, and commercial electrical services.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: "Home and commercial EV charging station installation with AC & DC options.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Expert fault finding, repair services, and regular maintenance for all electrical systems.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Comprehensive domestic and commercial plumbing solutions.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Energy & Electrical Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From installation to maintenance, we provide end-to-end solutions for all your energy and electrical needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
