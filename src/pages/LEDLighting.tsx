import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, CheckCircle, ArrowRight, Layers, Sparkles } from "lucide-react";

const productCategories = [
    {
        icon: Lightbulb,
        title: "LED Lighting",
        description: "Energy-efficient lighting solutions for every space and requirement.",
        image: "https://www.lampsplus.com/ideas-and-advice/wp-content/uploads/2020/09/LED_Light_Bulbs_Image.jpg",
        products: [
            "LED Panel Lights",
            "LED Bulbs",
            "LED Tube Lights",
            "Concealed Lights",
            "Decorative Lights",
            "Street Lights",
        ],
        color: "bg-primary",
    },
    {
        icon: Lightbulb,
        title: "Bulbs & Tubes",
        description: "High brightness and energy saving LED bulbs and tube lights for residential and commercial use.",
        image: "https://grainger-prod.adobecqms.net/content/dam/grainger/gus/en/public/digital-tactics/know-how/hero/SS-KH_TypesOfLightBulbsAndLamps_KH-HRO.jpg",
        products: [
            "LED Bulbs",
            "LED Tube Lights",
            "Smart LED Bulbs",
            "Decorative LED Bulbs",
            "High Lumen Tube Lights",
            "Energy Efficient Tubes",
        ],
        color: "bg-accent",
        route: "bulbs-and-tubes"
    },
    {
        icon: Layers,
        title: "Concealed Lighting",
        description: "Modern concealed lighting solutions for ceilings, walls, and interior décor with a premium finish.",
        image: "https://www.getinge.com/siteassets/start/product-catalog/led-concealed-lighting-systemus/led-concealed-teaser.jpg/constrain-0x640--811335702.jpg",
        products: [
            "Concealed Ceiling Lights",
            "COB Concealed Lights",
            "LED Strip Concealed Lighting",
            "False Ceiling Lights",
            "Warm & Cool Concealed Lights",
            "Designer Concealed Lighting",
        ],
        color: "bg-accent",
        route: "concealed-lighting"
    },
    {
        icon: Sparkles,
        title: "Decorative Lights",
        description: "Stylish and ambient decorative lighting solutions for homes, festivals, events, and interior décor.",
        image: "https://i.ytimg.com/vi/xdMYh2h6Vyo/maxresdefault.jpg",
        products: [
            "LED Decorative Lights",
            "Wall Decorative Lights",
            "Hanging Pendant Lights",
            "Festival Decorative Lights",
            "Indoor Ambient Lights",
            "Designer Decorative Lights",
        ],
        color: "bg-accent",
        route: "decorative-lights"
    },

];

const LEDLighting = () => {
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

export default LEDLighting;
