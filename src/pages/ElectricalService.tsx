import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, ShieldCheck, Plug, Cable, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const productCategories = [
  {
    icon: Plug,
    title: "Solar Maintenance",
    description: "Reliable solar maintenance services ensuring optimal system performance through routine cleaning, electrical inspections, inverter health checks, performance monitoring, and timely troubleshooting.",
    images: ["/electrical-service-images/solar-maintenance/1.jpeg", "/electrical-service-images/solar-maintenance/2.jpeg", "/electrical-service-images/solar-maintenance/3.jpeg",
      "/electrical-service-images/solar-maintenance/4.jpeg",],
    products: [
      "Solar Panel Cleaning",
      "Electrical & Wiring Inspection",
      "Inverter Health Monitoring",
      "Emergency Service"
    ],
    color: "bg-accent",
    route: "switches-and-sockets"
  },
  {
    icon: Cable,
    title: "EV-Charger Installation Service",
    description: "Professional installation of AC, DC, and fast EV chargers with complete site assessment, load evaluation, safety compliance, wiring setup, and seamless commissioning for homes, businesses, and commercial facilities.",
    images: ["/electrical-service-images/ev-charger/1.jpeg", "/electrical-service-images/ev-charger/2.jpeg", "/electrical-service-images/ev-charger/3.jpeg"],
    products: [
      "Home EV Charger Installation",
      "Commercial & Public Charger Installation",
      "AC/DC Fast Charger Setup",
      "Emergency Service"

    ],
    color: "bg-accent",
    route: "wires-and-cables"
  },
  {
    icon: Cable,
    title: "LED Lighting Service",
    description: "Energy-efficient LED lighting solutions including design, installation, upgrades, and maintenance to improve illumination quality, reduce power consumption, and enhance safety for residential, commercial, and industrial spaces.",
    images: ["https://tektronled.com/wp-content/uploads/2024/05/TLC-Services-1253x800.png", "https://www.paclights.com/wp-content/uploads/2025/10/image-5932.jpg"],
    products: [
      "LED Installation & Upgrades",
      "Energy-Efficient Lighting Design",
      "LED Maintenance & Repair Service",
      "Emergency Service"

    ],
    color: "bg-accent",
    route: "wires-and-cables"
  },
  {
    icon: Cable,
    title: "Electric Service",
    description: "Comprehensive electrical services including wiring, repairs, safety inspections, load management, and system upgrades for residential, commercial, and industrial properties—ensuring reliability, safety, and efficient power distribution.",
    images: ["https://static.vecteezy.com/system/resources/previews/030/470/720/non_2x/electrician-working-in-fuse-box-closeup-electrical-panel-ai-generated-photo.jpg",
      "https://mega.com.sg/wp-content/uploads/2020/12/electrical-wiring-scaled.jpg", "https://img.freepik.com/premium-photo/electricity-electrical-maintenance-service-engineer-hand-holding-ac-voltmeter-checking-electric-current-voltage-circuit-breaker-terminal-cable-wiring-main-power-distribution-board_101448-4286.jpg?w=2000"],
    products: [
      "Electrical Wiring & Repairs",
      "Electrical Safety Inspection",
      "Load Management & System Upgrades",
      "Emergency Service"

    ],
    color: "bg-accent",
    route: "wires-and-cables"
  },
  {
    icon: Cable,
    title: "Batteries Repair & Replacement",
    description: "Expert battery repair and replacement services for solar systems, inverters, and backup power units—ensuring reliable performance, extended battery life, and uninterrupted power supply through testing, fault diagnosis, and high-quality replacements.",
    images: ["https://d1pibc8vam0bsb.cloudfront.net/wp-content/uploads/2022/01/04145902/Car-Battery-Repair.jpg",
      "https://www.powermag.com/wp-content/uploads/2021/12/istock-1363808186-1024x576.jpg", "https://i.ytimg.com/vi/f3pQm3PjB6k/maxresdefault.jpg"
    ],
    products: [
      "Battery Health Testing & Diagnostics",
      "Battery Repair & Reconditioning",
      "Battery Replacement (Solar/Inverter/Backup)",
      "Emergency Service"

    ],
    color: "bg-accent",
    route: "wires-and-cables"
  },
];

const ElectricalService = () => {

  const [currentIndexes, setCurrentIndexes] = useState<number[]>(
    productCategories.map(() => 0)
  );

  // return next images index
  const handleNextImages = (categoryIndex: number) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      const totalImages = productCategories[categoryIndex].images.length;
      updated[categoryIndex] = (updated[categoryIndex] + 1) % totalImages;
      return updated;
    });
  };
  // return prev images index
  const handlePrevImages = (categoryIndex: number) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      const totalImages = productCategories[categoryIndex].images.length;
      updated[categoryIndex] =
        (updated[categoryIndex] - 1 + totalImages) % totalImages;
      return updated;
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#0A284E] text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Quality Products for <span className="text-accent">Every Need</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Discover our wide range of energy and electrical products. Available for retail and bulk orders.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-24">
          {productCategories.map((category, index) => (
            <div
              key={category.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 ${category.color}/10 rounded-full mb-4`}>
                  <category.icon className={`w-5 h-5 ${category.color === "bg-accent" ? "text-accent" : category.color === "bg-primary" ? "text-primary" : category.color === "bg-blue-600" ? "text-blue-600" : "text-green-600"}`} />
                  <span className={`text-sm font-semibold ${category.color === "bg-accent" ? "text-accent" : category.color === "bg-primary" ? "text-primary" : category.color === "bg-blue-600" ? "text-blue-600" : "text-green-600"}`}>
                    {category.title}
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {category.products.map((product) => (
                    <div key={product} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{product}</span>
                    </div>
                  ))}
                </div>
                <Button asChild>
                  <Link to="/contact">
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {(() => {
                  // ✅ yaha par bhi support both: images[] ya image
                  const images = category.images;
                  const currentIndex = currentIndexes[index] ?? 0;
                  const currentImage =
                    images.length > 0 ? images[currentIndex % images.length] : "";

                  return (
                  <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[220px] md:h-[360px]">
  <img
    src={currentImage}
    alt={category.title}
    className="w-full h-full object-cover"
  />
                      {/* ◀ Prev */}
                      <button
                        type="button"
                        onClick={() => handlePrevImages(index)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-2 rounded-full md:text-base"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {/* ▶ Next */}
                      <button
                        type="button"
                        onClick={() => handleNextImages(index)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-2 rounded-full md:text-base"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* dots (optional) */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_: any, imgIndex: number) => (
                          <span
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full ${imgIndex === currentIndex ? "bg-white" : "bg-white/40"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })()}

                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 ${category.color} rounded-xl -z-10`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border text-center">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Bulk Orders
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Looking for Bulk Deals?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer competitive pricing for bulk orders. Contact us for special rates on large quantity purchases.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Request Bulk Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+91 7428713868">Call: +91 7428713868</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ElectricalService;
