import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sun, 
  Lightbulb, 
  Plug, 
  Car, 
  Wrench, 
  Droplets,
  ArrowRight,
  CheckCircle,
  Phone
} from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solar Installation & Maintenance",
    description: "Complete solar energy solutions from consultation to installation and ongoing maintenance.",
    features: [
      "Site assessment & consultation",
      "Custom system design",
      "Professional installation",
      "Regular maintenance",
      "Performance monitoring",
      "Warranty support",
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Plug,
    title: "Electrical Wiring & Commercial Work",
    description: "Expert electrical services for residential and commercial properties.",
    features: [
      "New wiring installation",
      "Rewiring services",
      "Commercial electrical work",
      "Panel upgrades",
      "Safety inspections",
      "Emergency repairs",
    ],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Lightbulb,
    title: "LED Lighting Setup",
    description: "Energy-efficient lighting solutions designed and installed by experts.",
    features: [
      "Lighting design consultation",
      "LED retrofit services",
      "Commercial lighting",
      "Decorative installations",
      "Smart lighting systems",
      "Energy audit",
    ],
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: "Future-proof your home or business with professional EV charging solutions.",
    features: [
      "Home charger installation",
      "Commercial stations",
      "Load management",
      "Smart charging setup",
      "Maintenance services",
      "Network integration",
    ],
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wrench,
    title: "Fault Finding & Repair",
    description: "Quick diagnosis and repair services for all electrical systems.",
    features: [
      "Electrical fault diagnosis",
      "Emergency repairs",
      "Circuit troubleshooting",
      "Equipment repair",
      "Preventive maintenance",
      "Safety upgrades",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Comprehensive plumbing solutions for homes and businesses.",
    features: [
      "New installations",
      "Pipe repairs",
      "Fixture replacement",
      "Drainage solutions",
      "Commercial plumbing",
      "Emergency services",
    ],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80",
  },
];

const ElectricalService = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#0A284E] text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Solutions for <span className="text-accent">Every Need</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              From installation to maintenance, we provide comprehensive services backed by expertise and quality assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card rounded-3xl overflow-hidden shadow-soft border border-border"
            >
              <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "" : ""}`}>
                <div className={`aspect-video lg:aspect-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-[#0A284E]" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link to="/contact">
                        Request Service
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Need Emergency Service?
              </h2>
              <p className="text-lg text-foreground/80 max-w-xl">
                Our team is available to help you with urgent electrical and plumbing issues. Call us now!
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:1237655799">
                  <Phone className="w-5 h-5" />
                  Call Now: 123 7655799
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElectricalService;
