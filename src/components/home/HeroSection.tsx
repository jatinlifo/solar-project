import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 backdrop-blur-sm">
              <Sun className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Powering Sustainable Future</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              SHREEJI{" "}
              <span className="text-accent">ENTERPRISES</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium italic">
              "The Foundation of Growth and Excellence"
            </p>

            <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Your trusted partner for comprehensive energy solutions. From solar installations to electrical systems, LED lighting to EV charging infrastructure – we power your progress.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-primary-foreground/70">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">1000+</p>
                <p className="text-sm text-primary-foreground/70">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
                  alt="Solar panels installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 bg-card p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Sun className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Solar Energy</p>
                    <p className="font-bold text-foreground">Clean Power</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">EV Charging</p>
                    <p className="font-bold text-foreground">Fast & Safe</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/4 bg-card p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Certified</p>
                    <p className="font-bold text-foreground">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
