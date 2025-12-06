import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Residential Solar Installation",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    description: "10kW rooftop solar system for a residential property",
  },
  {
    id: 2,
    title: "Commercial LED Retrofit",
    category: "LED",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
    description: "Complete LED lighting upgrade for office complex",
  },
  {
    id: 3,
    title: "EV Charging Station",
    category: "EV Charger",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    description: "Multi-point commercial EV charging installation",
  },
  {
    id: 4,
    title: "Industrial Electrical Work",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    description: "Complete electrical system for manufacturing unit",
  },
  {
    id: 5,
    title: "Solar Farm Project",
    category: "Solar",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    description: "Large-scale solar installation for agricultural land",
  },
  {
    id: 6,
    title: "Smart Home Lighting",
    category: "LED",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    description: "Automated LED lighting system for smart home",
  },
  {
    id: 7,
    title: "Warehouse Electrical Setup",
    category: "Electrical",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    description: "High-capacity electrical infrastructure for warehouse",
  },
  {
    id: 8,
    title: "Residential EV Charger",
    category: "EV Charger",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
    description: "Home EV charging solution with smart features",
  },
];

const categories = ["All", "Solar", "LED", "Electrical", "EV Charger"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#0A284E] text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
              Our Gallery
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Completed <span className="text-accent">Projects</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our portfolio of successful installations and projects across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#0A284E] text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs text-accent font-semibold">{project.category}</span>
                    <h3 className="text-primary-foreground font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <span className="text-sm text-accent font-semibold">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold text-foreground mt-1">{selectedImage.title}</h3>
              <p className="text-muted-foreground mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want Your Project Featured Here?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you with your next project. Contact us today for a free consultation.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
