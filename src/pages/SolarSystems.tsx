import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun, Battery, CheckCircle, ArrowRight, Zap } from "lucide-react";

const productCategories = [
    {
        icon: Sun,
        title: "Solar Systems",
        description: "Complete solar energy solutions for residential and commercial applications.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
        products: [
            "Monocrystalline Solar Panels",
            "Polycrystalline Solar Panels",
            "Solar Inverters",
            "Solar Batteries",
            "Mounting Structures",
            "Complete Solar Kits",
        ],
        color: "bg-accent",
    },
    {
        icon: Zap,
        title: "Inverter Air Conditioners",
        description: "Energy efficient inverter AC solutions for homes, offices, and commercial spaces.",
        image: "https://image.made-in-china.com/2f0j00RloGcdOySMkq/30kw-AC-Inverter-3-Phase-30kw-Three-Phase-Pure-Sine-Wave-Solar-Inverter.jpg",
        products: [
            "1 Ton Inverter AC",
            "1.5 Ton Inverter AC",
            "2 Ton Inverter AC",
            "Split Inverter AC",
            "Smart WiFi Inverter AC",
            "Energy Efficient Inverter AC",
        ],
        color: "bg-accent",
    },
    {
        icon: Battery,
        title: "Batteries",
        description: "Reliable and long-lasting battery solutions for solar systems, inverters, and backup power.",
        image: "https://www.kindpng.com/picc/m/137-1372233_battery-png-image-transparent-background-exide-battery-images.png",
        products: [
            "Solar Batteries",
            "Inverter Batteries",
            "Lithium-ion Batteries",
            "Tubular Batteries",
            "SMF Batteries",
            "High Backup Batteries",
        ],
        color: "bg-accent",
    },
];

const SolarSystem = () => {
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
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="rounded-2xl shadow-lg w-full"
                                />
                                <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${category.color} rounded-xl -z-10`} />
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

export default SolarSystem;
