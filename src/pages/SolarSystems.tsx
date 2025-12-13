import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun, Battery, CheckCircle, ArrowRight, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const productCategories = [
    {
        icon: Sun,
        title: "Solar Energy",
        description: "Complete solar energy solutions for residential and commercial applications.",
        // images: ["/solar-images/solar-system/1.jpeg", "/solar-images/solar-system/2.jpeg", "/solar-images/solar-system/3.jpeg"
        //     , "/solar-images/solar-system/4.jpeg", "/solar-images/solar-system/5.jpeg"],
        images: ["https://synergycorp.com.pk/wp-content/uploads/2024/03/on-grid-and-off-grid-solar-system.jpg",
            "https://kcpsolar.com/wp-content/uploads/2023/10/Blog-Hybrid-img1.webp",
            "https://www.chiangmaisolar.com/wp-content/uploads/2021/02/Hydrogen-storage-systems-Day-and-Night.jpg",
        ],
        products: [
            "Off-grid Solar",
            "On-grid Solar",
            "Hybrid Solar",
            "Hydrogen Solar",
        ],
        color: "bg-accent",
    },
    {
        icon: Zap,
        title: "Solar Panel Solution",
        description: "Our Solar Panel Solutions provide clean, reliable, and cost-efficient energy with long-lasting performance for a sustainable future.",
        // images: ["/solar-images/ss-three-type/1.jpeg", "/solar-images/ss-three-type/2.jpeg", "/solar-images/ss-three-type/3.jpeg"],
        images: ["https://images.jdmagicbox.com/quickquotes/images_main/monocrystalline-solar-power-panel-capacity-645-kw-2222737000-cscs8ivk.jpg",
            "https://suryaurza.com/wp-content/uploads/2024/06/170W-12V-Polycrystalline-Solar-Panel.webp",
            "https://5.imimg.com/data5/SELLER/Default/2025/11/558345335/QZ/IG/NM/4574469/thin-film-solar-panel-500x500.jpg",
            "https://eepower.com/uploads/articles/Bifacial_vertical_solar_panels.jpg",
        ],
        products: [
            "Monocrystalline Panel",
            "Polycrystalline Panel",
            "Thin-Film Panel",
            "Bifacial Panel",
        ],
        color: "bg-accent",
    },
    {
        icon: Battery,
        title: "Solar Inverter & Batteries",
        description: "High-efficiency solar inverters and long-lasting batteries that ensure stable power backup and smooth energy management for homes and businesses.",
        // images: ["/solar-images/batteries/1.jpeg", "/solar-images/batteries/2.jpeg", "/solar-images/batteries/3.jpeg", "/solar-images/batteries/4.jpeg"],
        images: ["https://www.mokoenergy.com/wp-content/uploads/2024/04/Understanding-different-types-of-solar-inverters-1-1280x720.webp",
            "https://gk-electrics.com/wp-content/uploads/2017/06/photovoltaik-862x647.jpg",
            "",
            "",
        ],
        products: [
            "Solar Inverter",
            "Solar Batteries",
            "Lithium-ion Batteries",
            "Tubular Batteries",
            // "SMF Batteries",
        ],
        color: "bg-accent",
    },
    {
        icon: Battery,
        title: "Structure and Accessories",
        description: "Durable structures and quality solar accessories designed to support safe installation, long-term stability, and optimum system performance.",
        images: ["/solar-images/batteries/1.jpeg", "/solar-images/batteries/2.jpeg", "/solar-images/batteries/3.jpeg", "/solar-images/batteries/4.jpeg"],
        products: [
            "Mounting Structure",
            "Earthing Material",
            "Junction Box",
            "Cable & Wire, etc."
        ],
        color: "bg-accent",
    },
];

const SolarSystem = () => {

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
                                <a href="tel:+91 7428713868">Call: +91 7428713868</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SolarSystem;
