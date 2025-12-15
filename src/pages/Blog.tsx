import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Car, Sun } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Solar Energy and EV Chargers: Trends to Watch in 2025",
    excerpt: "Discover the latest innovations in solar technology and what they mean for homeowners and businesses looking to go green.",
    image: "/Blog-images/1.jpeg",
    category: "Solar Energy",
    author: "Shreeji Team",
    date: "Nov 20, 2025",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Solar Panel Maintenance: A Complete Guide",
    excerpt: "Keep your solar system running at peak efficiency with these maintenance tips and best practices.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    category: "Solar Energy",
    author: "Shreeji Team",
    date: "Oct 28, 2025",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "EV Charging at Home: Everything You Need to Know",
    excerpt: "Planning to install an EV charger at home? This guide covers types, costs, installation process, and maintenance tips.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    category: "EV Charging",
    author: "Shreeji Team",
    date: "Nov 10, 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "LED vs Traditional Lighting: Making the Switch",
    excerpt: "A comprehensive comparison of LED lighting versus traditional options. Learn about energy savings, longevity, and ROI.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
    category: "LED Lighting",
    author: "Shreeji Team",
    date: "Nov 15, 2025",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Electrical Safety Tips for Your Home",
    excerpt: "Essential electrical safety practices every homeowner should know to prevent accidents and ensure a safe living environment.",
    image: "https://static.vecteezy.com/system/resources/previews/039/339/377/non_2x/electrical-engineer-work-tester-measuring-voltage-and-current-of-power-electric-line-in-electrical-cabinet-control-for-industrial-production-photo.jpg",
    category: "Electrical",
    author: "Shreeji Team",
    date: "Nov 5, 2025",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Smart Lighting Solutions for Modern Homes",
    excerpt: "Explore how smart LED lighting can transform your living spaces while reducing energy consumption.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    category: "LED Lighting",
    author: "Shreeji Team",
    date: "Oct 22, 2025",
    readTime: "4 min read",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#0A284E] text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
              Our Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Energy Insights & <span className="text-accent">Updates</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Stay informed with the latest news, tips, and trends in energy solutions and electrical systems.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                      <Sun className="w-4 h-4" />
                      {blogPosts[0].category}
                    </span>

                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-green-600 rounded-full text-xs font-semibold">
                      <Car className="w-4 h-4" />
                      EV Charger
                    </span>
                  </div>

                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit flex items-center gap-2" asChild>
                    <Link to="/article">
                      Read Article
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-[#0A284E] rounded-full text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[#0A284E] text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest energy tips, industry news, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
