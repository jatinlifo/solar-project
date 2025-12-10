import { Award, Clock, ThumbsUp, Users, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the best products from certified and trusted brands.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Quick turnaround times for all projects and orders.",
  },
  {
    icon: ThumbsUp,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated support and personalized solutions for every client.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your queries and needs.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Assured",
    description: "Comprehensive warranty coverage on all products and services.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-[#0A284E] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Your Trusted Partner for <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            We combine quality products, expert services, and exceptional customer care to deliver unmatched value.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-primary-foreground/10 backdrop-blur-sm p-2.5 md:p-8  rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="md:w-14 w-10 h-10 md:h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="md:w-7 w-5 h-5 md:h-7 text-accent" />
              </div>
              <h3 className="font-display md:text-xl text-[11px] font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80 text-[9px] md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
