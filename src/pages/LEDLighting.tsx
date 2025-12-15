import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, CheckCircle, ArrowRight, Layers, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const productCategories = [
    {
        icon: Lightbulb,
        title: "LED Lighting",
        description: "Energy-efficient lighting solutions for every space and requirement.",
        images: ["/led-images/led-lighting/3.jpeg","/led-images/led-lighting/1.jpeg", "/led-images/led-lighting/2.webp",],
        products: [
            // "LED Panel Lights",
            // "LED Bulbs",
            // "LED Tube Lights",
            // "Concealed Lights",
            // "Decorative Lights",
            "Street Light",
            "Highway Light",
        ],
        color: "bg-primary",
    },
    {
        icon: Lightbulb,
        title: "Bulbs & Tubes",
        description: "High brightness and energy saving LED bulbs and tube lights for residential and commercial use.",
        images: ["/led-images/Bulb/4.jpeg", "/led-images/Bulb/1.jpeg", "/led-images/Bulb/2.png", "/led-images/Bulb/3.jpg", "/led-images/Bulb/5.jpeg"],
        products: [
            "LED Bulb",
            "LED Tube Light",
            "Smart LED Bulb",
            // "Decorative LED Bulbs",
            "High Lumen Tube Light",
            // "Energy Efficient Tubes",
        ],
        color: "bg-accent",
        route: "bulbs-and-tubes"
    },
    {
        icon: Layers,
        title: "Concealed Lighting",
        description: "Modern concealed lighting solutions for ceilings, walls, and interior décor with a premium finish.",
        images: ["/led-images/concealed/1.jpeg", "/led-images/concealed/3.jpeg", "/led-images/concealed/2.jpeg"],
        products: [
            "Concealed Light",
            "LED Strip Light",
            "False Ceiling Light",
            "Warm & Cool Light",
            "Designer Concealed Light",
        ],
        color: "bg-accent",
        route: "concealed-lighting"
    },
    {
        icon: Sparkles,
        title: "Decorative Light",
        description: "Stylish and ambient decorative lighting solutions for homes, festivals, events, and interior décor.",
        images: ["https://i.ytimg.com/vi/xdMYh2h6Vyo/maxresdefault.jpg", "https://media.designcafe.com/wp-content/uploads/2020/11/24174705/decoration-lights-for-home.jpg",
            "https://indiacsr.in/wp-content/uploads/2024/10/Diwali-Light-Decor-Ideas-For-Indian-Homes.jpg", "https://i.ytimg.com/vi/bq4oQ-jc4PQ/maxresdefault.jpg",
            "https://i.ytimg.com/vi/Gf8Hwp3iwCk/maxresdefault.jpg"
        ],
        products: [
            "LED Decorative Light",
            "Wall Decorative Light",
            "Hanging Pendant Light",
            "Festival Decorative Light",
            "Indoor Ambient Light",
            "Designer Decorative Light",
        ],
        color: "bg-accent",
        route: "decorative-lights"
    },

];

const LEDLighting = () => {

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
                                    const images = category.images

                                    const currentIndex = currentIndexes[index] ?? 0;
                                    const currentImage =
                                        images.length > 0 ? images[currentIndex % images.length] : "";

                                    return (
                                       <div className="relative rounded-2xl overflow-hidden shadow-lg w-full aspect-[16/9] bg-white">
                                            <img
                                                src={currentImage}
                                                alt={category.title}
                                                className="w-full h-full object-contain brightness-110 contrast-110"
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
                            Orders
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Looking for Deals?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We offer competitive pricing for orders. Contact us for special rates on large quantity purchases.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button variant="accent" size="lg" asChild>
                                <Link to="/contact">
                                    Request Quote
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="tel:1+91 7428713868">Call: +91 7428713868</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LEDLighting;
