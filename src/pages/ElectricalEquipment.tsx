import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, ShieldCheck, Plug, Cable, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const productCategories = [
    {
        icon: Plug,
        title: "Switches & Sockets",
        description: "Premium quality electrical switches and sockets for safe, stylish, and reliable power connections.",
        images: ["https://tse4.mm.bing.net/th/id/OIP.IkWz2TLSYeQcd3_nGdMDXQHaE8?pid=Api&h=220&P=0"],
        products: [
            "Modular Switches",
            "Electrical Sockets",
            "USB Charging Sockets",
            "Smart Touch Switches",
            "Heavy Duty Power Sockets",
            "Designer Switch Plates",
        ],
        color: "bg-accent",
        route: "switches-and-sockets"
    },
    {
        icon: Cable,
        title: "Wires & Cables",
        description: "High quality electrical wires and cables for safe power transmission in residential and commercial installations.",
        images: ["https://png.pngtree.com/background/20230527/original/pngtree-wires-and-cables-in-various-colors-picture-image_2758680.jpg"],
        products: [
            "House Wiring Cables",
            "Industrial Power Cables",
            "Armoured Cables",
            "Flexible Wires",
            "Copper Electrical Wires",
            "Fire Resistant Cables",
        ],
        color: "bg-accent",
        route: "wires-and-cables"
    },
    {
        icon: ShieldCheck,
        title: "MCB & DBs",
        description: "High quality MCBs and Distribution Boards for electrical safety, overload protection, and power management.",
        images: ["https://bchindia.com/wp-content/uploads/2020/03/bch.jpg"],
        products: [
            "Single Pole MCB",
            "Double Pole MCB",
            "Triple Pole MCB",
            "Main Distribution Boards (DBs)",
            "MCB Switches",
            "Industrial Distribution Boards",
        ],
        color: "bg-accent",
        route: "mcb-and-dbs"
    },
    {
        icon: Wrench,
        title: "Electrical Accessories",
        description: "Complete range of electrical accessories for safe installation, maintenance, and finishing of electrical systems.",
        images: ["https://i.ytimg.com/vi/wDkV53iD5eI/maxresdefault.jpg"],
        products: [
            "Ceiling Roses",
            "Angle Holders",
            "Wire Clips & Saddles",
            "PVC Casing & Capping",
            "Electrical Junction Boxes",
            "Cable Ties & Insulation Tapes",
        ],
        color: "bg-accent",
        route: "electrical-accessories"
    },
];

const ElectricalEquipment = () => {

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
                                <a href="tel:1237655799">Call: 123 7655799</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ElectricalEquipment;
