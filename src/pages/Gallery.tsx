// import { useState } from "react";
// import Layout from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { ArrowRight, X } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Residential Solar Installation",
//     category: "Solar",
//     image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
//     description: "10kW rooftop solar system for a residential property",
//   },
//   {
//     id: 2,
//     title: "EV Charging Station",
//     category: "EV Charger",
//     image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
//     description: "Multi-point commercial EV charging installation",
//   },
//   {
//     id: 3,
//     title: "Industrial Electrical Work",
//     category: "Electrical",
//     image: "https://www.bing.com/th/id/OIP.KqL0pgustFn4ObqeIs7oWAHaEM?w=294&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
//     description: "Complete electrical system for manufacturing unit",
//   },
//   {
//     id: 4,
//     title: "Commercial LED Retrofit",
//     category: "LED",
//     image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
//     description: "Complete LED lighting upgrade for office complex",
//   },
//    {
//     id: 5,
//     title: "Plumbing Work",
//     category: "LED",
//     image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
//     description: "Complete Plumbing Work",
//   },
//   {
//     id: 6,
//     title: "Solar Farm Project",
//     category: "Solar",
//     image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
//     description: "Large-scale solar installation for agricultural land",
//   },
//   {
//     id: 7,
//     title: "Smart Home Lighting",
//     category: "LED",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
//     description: "Automated LED lighting system for smart home",
//   },
//   {
//     id: 8,
//     title: "Warehouse Electrical Setup",
//     category: "Electrical",
//     image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
//     description: "High-capacity electrical infrastructure for warehouse",
//   },
//   {
//     id: 9,
//     title: "Residential EV Charger",
//     category: "EV Charger",
//     image: "https://images.squarespace-cdn.com/content/v1/5f3b08d4515c242514c95656/f7890c9c-7fcc-439b-b285-5d1328b375c1/commercial-ev-charging-station.jpg",
//     description: "Home EV charging solution with smart features",
//   },
// ];

// const categories = ["All", "Solar Energy", "EV Charger","Electrical Work", "Plumbing Work", "LED Lighting", ];

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedImage, setSelectedImage] = useState<typeof projects[0] | null>(null);

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(p => p.category === activeCategory);

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="bg-[#0A284E] text-primary-foreground section-padding">
//         <div className="container-wide">
//           <div className="max-w-3xl">
//             <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
//               Our Gallery
//             </span>
//             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               Completed <span className="text-accent">Projects</span>
//             </h1>
//             <p className="text-xl text-primary-foreground/90">
//               Explore our portfolio of successful installations and projects across various sectors.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="section-padding bg-background">
//         <div className="container-wide">
//           {/* Filter Tabs */}
//           <div className="flex flex-wrap gap-3 mb-12 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-6 py-2 rounded-full font-medium transition-all ${
//                   activeCategory === category
//                     ? "bg-[#0A284E] text-primary-foreground"
//                     : "bg-secondary text-foreground hover:bg-primary/10"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="group cursor-pointer"
//                 onClick={() => setSelectedImage(project)}
//               >
//                 <div className="relative aspect-square rounded-2xl overflow-hidden shadow-soft border border-border">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                     <span className="text-xs text-accent font-semibold">{project.category}</span>
//                     <h3 className="text-primary-foreground font-bold">{project.title}</h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lightbox */}
//       {selectedImage && (
//         <div 
//           className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <button 
//             className="absolute top-4 right-4 text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-full"
//             onClick={() => setSelectedImage(null)}
//           >
//             <X className="w-8 h-8" />
//           </button>
//           <div 
//             className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={selectedImage.image}
//               alt={selectedImage.title}
//               className="w-full aspect-video object-cover"
//             />
//             <div className="p-6">
//               <span className="text-sm text-accent font-semibold">{selectedImage.category}</span>
//               <h3 className="text-2xl font-bold text-foreground mt-1">{selectedImage.title}</h3>
//               <p className="text-muted-foreground mt-2">{selectedImage.description}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA */}
//       <section className="section-padding bg-secondary">
//         <div className="container-wide text-center">
//           <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
//             Want Your Project Featured Here?
//           </h2>
//           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Let us help you with your next project. Contact us today for a free consultation.
//           </p>
//           <Button variant="accent" size="lg" asChild>
//             <Link to="/contact">
//               Start Your Project
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Gallery;

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";

/* ================= GALLERY DATA ================= */

const gallery = {
  Solar: [
    "/Gallery/solar/1.jpeg",
    "/Gallery/solar/2.jpeg",
    "/Gallery/solar/3.jpeg",
    "/Gallery/solar/4.jpeg",
    "/Gallery/solar/5.jpeg",
    "/Gallery/solar/6.jpeg",
    "/Gallery/solar/7.jpeg",
    "/Gallery/solar/8.jpeg",
    "/Gallery/solar/9.jpeg",
    "/Gallery/solar/10.jpeg",
    "/Gallery/solar/11.jpeg",
    "/Gallery/solar/12.jpeg",
    "/Gallery/solar/13.jpeg",
  ],
  EVCharger: [
    "/Gallery/ev/1.jpeg",
    "/Gallery/ev/2.jpeg",
  ],
  Electrical: [],
  Plumbing: [
    "/Gallery/plumbing/1.jpeg",
    "/Gallery/plumbing/2.jpeg",
    "/Gallery/plumbing/3.jpeg",
  ],
  LED: [],
};

/* ================= FILTERS ================= */

const filters = [
  { label: "All", key: "All" },
  { label: "Solar Energy", key: "Solar" },
  { label: "EV Charger", key: "EVCharger" },
  { label: "Electrical Work", key: "Electrical" },
  { label: "Plumbing Work", key: "Plumbing" },
  { label: "LED Lighting", key: "LED" },
];

/* ================= COMPONENT ================= */

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const allImages = Object.values(gallery).flat();
  const imagesToShow =
    activeFilter === "All" ? allImages : gallery[activeFilter] || [];

  /* ========== KEYBOARD SUPPORT (LOOP) ========== */
  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
        setActiveIndex(null);
      }

      if (e.key === "ArrowRight") {
        const newIndex =
          activeIndex === imagesToShow.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
        setActiveImage(imagesToShow[newIndex]);
      }

      if (e.key === "ArrowLeft") {
        const newIndex =
          activeIndex === 0 ? imagesToShow.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
        setActiveImage(imagesToShow[newIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, activeIndex, imagesToShow]);

  return (
    <Layout>
      {/* ================= FILTERS ================= */}
      <section className="py-12">
        <div className="flex justify-center gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === f.key
                  ? "bg-[#0A284E] text-white"
                  : "bg-secondary hover:bg-primary/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="pb-20">
        <div className="container-wide grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {imagesToShow.map((src, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveImage(src);
                setActiveIndex(index);
              }}
              className="cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= FULLSCREEN ================= */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => {
            setActiveImage(null);
            setActiveIndex(null);
          }}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={() => {
              setActiveImage(null);
              setActiveIndex(null);
            }}
          >
            <X size={32} />
          </button>

          {/* Desktop Left Arrow */}
          <button
            className="hidden md:block absolute left-6 text-white text-5xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex =
                activeIndex === 0
                  ? imagesToShow.length - 1
                  : activeIndex - 1;
              setActiveIndex(newIndex);
              setActiveImage(imagesToShow[newIndex]);
            }}
          >
            ‹
          </button>

          {/* Image (Swipe enabled) */}
          <img
            src={activeImage}
            alt=""
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) =>
              setTouchStartX(e.touches[0].clientX)
            }
            onTouchEnd={(e) => {
              if (touchStartX === null) return;

              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchStartX - touchEndX;

              // Swipe left → next (loop)
              if (diff > 50) {
                const newIndex =
                  activeIndex === imagesToShow.length - 1
                    ? 0
                    : activeIndex + 1;
                setActiveIndex(newIndex);
                setActiveImage(imagesToShow[newIndex]);
              }

              // Swipe right → previous (loop)
              if (diff < -50) {
                const newIndex =
                  activeIndex === 0
                    ? imagesToShow.length - 1
                    : activeIndex - 1;
                setActiveIndex(newIndex);
                setActiveImage(imagesToShow[newIndex]);
              }

              setTouchStartX(null);
            }}
          />

          {/* Desktop Right Arrow */}
          <button
            className="hidden md:block absolute right-6 text-white text-5xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              const newIndex =
                activeIndex === imagesToShow.length - 1
                  ? 0
                  : activeIndex + 1;
              setActiveIndex(newIndex);
              setActiveImage(imagesToShow[newIndex]);
            }}
          >
            ›
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;

