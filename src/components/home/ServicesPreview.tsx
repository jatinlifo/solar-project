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
  // {
  //   icon: Lightbulb,
  //   title: "LED Lighting Setup",
  //   description: "Energy-efficient LED lighting solutions including panels, decorative, and concealed lighting.",
  //   color: "bg-primary/10 text-primary",
  // },
  // {
  //   icon: Plug,
  //   title: "Electrical Work",
  //   description: "Professional electrical wiring, panel installation, and commercial electrical services.",
  //   color: "bg-blue-500/10 text-blue-600",
  // },
  // {
  //   icon: Car,
  //   title: "EV Charger Installation",
  //   description: "Home and commercial EV charging station installation with AC & DC options.",
  //   color: "bg-green-500/10 text-green-600",
  // },
  // {
  //   icon: Wrench,
  //   title: "Repair & Maintenance",
  //   description: "Expert fault finding, repair services, and regular maintenance for all electrical systems.",
  //   color: "bg-orange-500/10 text-orange-600",
  // },
  // {
  //   icon: Droplets,
  //   title: "Plumbing Services",
  //   description: "Comprehensive domestic and commercial plumbing solutions.",
  //   color: "bg-cyan-500/10 text-cyan-600",
  // },
];

const ServicesPreview = () => {
  return (

    <section className="section-padding bg-secondary ">
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

        {/* Responsive Card */}
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">

          {/* Left Image */}
          <div className="w-full md:w-1/2 h-60 md:h-auto">
            <img
              src="items/1.jpeg"
              alt="Solar Solution"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center text-left">

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Smart Electrical & Solar Solutions
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              We deliver advanced electrical and solar power solutions designed for modern
              homes, commercial spaces, and industrial applications. Our systems ensure
              reliable performance, energy efficiency, and long-term sustainability.
            </p>

            <div className="mt-auto">
              <Button variant="accent" size="lg" asChild className="flex items-center gap-2 w-fit">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>

  );
};

export default ServicesPreview;
