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
            "https://tse3.mm.bing.net/th/id/OIP.IXmlR5PGZbfb52wlIIy_sQHaHa?pid=Api&h=220&P=0",
            "https://tse3.mm.bing.net/th/id/OIP.IXmlR5PGZbfb52wlIIy_sQHaHa?pid=Api&h=220&P=0",
            "https://chargedevs.com/wp-content/uploads/2023/02/EV-Fast-Charger-DC-Fast-Charging-Stations-Stock_533574747-1024x758.jpeg",
            "https://tse3.mm.bing.net/th/id/OIP.IXmlR5PGZbfb52wlIIy_sQHaHa?pid=Api&h=220&P=0",
            "https://tse3.mm.bing.net/th/id/OIP.IXmlR5PGZbfb52wlIIy_sQHaHa?pid=Api&h=220&P=0",
        ],
        products: [
            "Single Phase AC Chargers",
            "Three Phase AC Chargers",
            "Wall Mounted AC Chargers",
            "Portable AC Chargers",
        ],
        color: "bg-accent",
        route: "ac-ev-chargers"
    },
    {
        icon: BatteryCharging,
        title: "DC Fast Chargers",
        description: "High power DC fast chargers for ultra-fast charging at highways and public stations.",
        images: ["/ev-images/30.jpeg", "/ev-images/60.jpeg", "/ev-images/120.jpeg", "/ev-images/pdc.jpeg"],
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
        title: "Home EV Chargers",
        description: "Compact and reliable EV chargers specially designed for daily home charging needs.",
        images: ["https://tse2.mm.bing.net/th/id/OIP.ys7QMg6kPCoz_5ktvtA-EwHaFj?pid=Api&h=220&P=0"],
        products: [
            "Wall Mounted Home Chargers",
            "Portable Home EV Chargers",
            "Smart Home EV Chargers",
            "Single Phase Chargers",
        ],
        color: "bg-accent",
        route: "home-ev-chargers"
    },
    {
        icon: Building2,
        title: "Commercial EV Chargers",
        description: "Heavy-duty EV charging solutions for offices, malls, hotels, and parking areas.",
        images: ["https://tse2.mm.bing.net/th/id/OIP.kB2i0bmad_wM9UOlYmcFJQHaEs?pid=Api&h=220&P=0"],
        products: [
            "Public EV Charging Units",
            "Floor Mounted Chargers",
            "Multiple Gun Chargers",
            "Fast Commercial Chargers",
        ],
        color: "bg-accent",
        route: "commercial-ev-chargers"
    },
    {
        icon: Smartphone,
        title: "Smart EV Chargers",
        description: "Advanced smart EV chargers with WiFi, app monitoring, load management and solar support.",
        images: ["https://tse1.mm.bing.net/th/id/OIP.rf_EqKxy-OnKihkcqac_2gHaHM?pid=Api&h=220&P=0"],
        products: [
            "WiFi Enabled EV Chargers",
            "App Controlled EV Chargers",
            "Load Balancing Chargers",
            "Solar Compatible EV Chargers",
        ],
        color: "bg-accent",
        route: "smart-ev-chargers"
    }

];

const EVChargers = () => {

    const [currentIndexes, setCurrentIndexes] = useState(
        productCategories.map(() => 0)
    );
    // return next image index
    const handleNextImage = (categoryIndex: number) => {
        setCurrentIndexes((prev) => {
            const updated = [...prev];
            const category = productCategories[categoryIndex];

            // ✅ images agar hai to use, warna single image ko array bana do
            const images =
                (category as any).images ??
                ((category as any).image ? [(category as any).image] : []);

            const totalImages = images.length || 1;
            updated[categoryIndex] = (updated[categoryIndex] + 1) % totalImages;
            return updated;
        });
    }

    //return previous image index
    const handlePrevImages = (categoryIndex: number) => {
        setCurrentIndexes((prev) => {
            const updated = [...prev];
            const category = productCategories[categoryIndex];

            const images =
                (category as any).images ??
                ((category as any).image ? [(category as any).image] : []);

            const totalImages = images.length || 1;
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
                                    const images =
                                        (category as any).images ??
                                        ((category as any).image ? [(category as any).image] : []);

                                    const currentIndex = currentIndexes[index] ?? 0;
                                    const currentImage =
                                        images.length > 0 ? images[currentIndex % images.length] : "";

                                    return (
                                        <div className="relative rounded-2xl overflow-hidden shadow-lg w-full min-h-[260px]">
                                            {currentImage && (
                                                <img
                                                    src={currentImage}
                                                    alt={category.title}
                                                    className="w-full h-full object-cover"
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
                                                onClick={() => handleNextImage(index)}
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
                                <a href="tel:1237655799">Call: 123 7655799</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default EVChargers;
