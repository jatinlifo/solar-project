import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlugZap, BatteryCharging, Home, Building2, Smartphone, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const productCategories = [
    {
        icon: PlugZap,
        title: "AC EV Chargers",
        description: "Safe and efficient AC charging solutions for homes and small commercial spaces.",
        images: [
            "/ev-images/ac-ev/1.jpeg",
            "/ev-images/ac-ev/2.jpeg",
        ],
        products: [
            "3.3KW Portable Chargers",
            "7.2KW Wall Mounted Chargers",
            "10KW Three Phase Chargers",
            "22KW Single Phase Chargers",
        ],
        color: "bg-accent",
        route: "ac-ev-chargers"
    },
    {
        icon: BatteryCharging,
        title: "DC Fast Chargers",
        description: "High power DC fast chargers for ultra-fast charging at highways and public stations.",
        images: ["/ev-images/dc-ev/30.jpeg", "/ev-images/dc-ev/60.jpeg", "/ev-images/dc-ev/120.jpeg", "/ev-images/dc-ev/pdc.jpeg"],
        products: [
            "30kW DC Chargers",
            "60kW DC Chargers",
            "120kW Ultra Fast Chargers",
            "Public DC Charging Stations",
        ],
        color: "bg-accent",
        route: "dc-fast-chargers"
    },
    {
        icon: Home,
        title: "E-Rickshaw Chargers",
        description: "Compact and reliable EV chargers specially designed for daily home charging needs.",
        images: ["/ev-images/e-rikshaw/1.jpeg", "/ev-images/e-rikshaw/2.jpeg", "/ev-images/e-rikshaw/3.jpeg"],
        products: [
            "48V 25A Chargers",
            "48V 18A Chargers",
            "51.2V 20A Chargers",
            "etc.",
        ],
        color: "bg-accent",
        route: "home-ev-chargers"
    },
    {
        icon: Building2,
        title: "Two Wheeler Chargers",
        description: "Heavy-duty EV charging solutions for offices, malls, hotels, and parking areas.",
        images: ["/ev-images/two-wheeler/1.jpeg", "/ev-images/two-wheeler/2.jpeg", "/ev-images/two-wheeler/3.jpeg", "/ev-images/two-wheeler/4.jpeg"],
        products: [
            "12V 1A Chargers",
            "12V 3A Chargers",
            "12V 10A Chargers",
            "etc.",
        ],
        color: "bg-accent",
        route: "commercial-ev-chargers"
    },
    // {
    //     icon: Smartphone,
    //     title: "Smart EV Chargers",
    //     description: "Advanced smart EV chargers with WiFi, app monitoring, load management and solar support.",
    //     images: ["https://tse1.mm.bing.net/th/id/OIP.rf_EqKxy-OnKihkcqac_2gHaHM?pid=Api&h=220&P=0"],
    //     products: [
    //         "WiFi Enabled EV Chargers",
    //         "App Controlled EV Chargers",
    //         "Load Balancing Chargers",
    //         "Solar Compatible EV Chargers",
    //     ],
    //     color: "bg-accent",
    //     route: "smart-ev-chargers"
    // }

];

const EVChargers = () => {

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
                                       <div className="relative rounded-2xl overflow-hidden shadow-lg w-full aspect-[16/9] bg-white">
                                            {currentImage && (
                                                <img
                                                    src={currentImage}
                                                    alt={category.title}
                                                    className="w-full h-full object-contain object-center"
                                                />
                                            )}


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

export default EVChargers;
