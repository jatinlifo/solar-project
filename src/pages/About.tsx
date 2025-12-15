import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, Users, Clock, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#0A284E] text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-4 border border-primary-foreground/20">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Foundation of Growth and <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Building sustainable futures through quality energy solutions and exceptional service since day one.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                A Legacy of Trust & Quality
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shreeji Enterprises was founded with a vision to provide comprehensive energy and electrical solutions to homes and businesses. What started as a small venture has grown into a trusted name in the industry.
                </p>
                <p>
                  Our journey has been driven by a commitment to quality, customer satisfaction, and sustainable practices. We believe in building long-term relationships with our clients by delivering exceptional value at every step.
                </p>
                <p>
                  Today, we proudly serve hundreds of customers, offering everything from solar installations to EV charging solutions, all backed by expert service and genuine products.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/About-images/1.jpeg"
                alt="Team at work"
                className="rounded-2xl shadow-lg"
              />
              {/* <div className="absolute -bottom-8 -left-8 bg-accent p-6 rounded-2xl shadow-lg">
                <p className="text-4xl font-bold text-foreground">7+</p>
                <p className="text-foreground/80">Years of Excellence</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Service and Maintenance are Reliable
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Shreeji Enterprises. Our electrical maintenance services include regular inspection, testing, and servicing of your electrical systems to ensure they are functioning correctly and safely. Our certified professionals conduct thorough on-site inspections to identify potential problems such as faulty wiring, overloaded circuits, and other electrical issues that could lead to equipment failure and downtime.
                </p>
                <p>
                  Our goal is to provide all our clients with reliable and cost-effective electrical engineering solutions and systems. We specialize in understanding project requirements and working with clients from the initial stages to address their key needs in design, execution, vendor selection, and electrical safety issues.
                </p>
                <p>
                  The process of installing and maintaining electrical systems and equipment. This may include tasks such as installing wiring, repairing or replacing faulty equipment, and inspecting electrical systems for safety.
                </p>
              </div>
            </div>
            {/* <div className="relative"> */}
              <img
                src="/About-images/2.jpeg"
                alt="Team at work"
                className="rounded-2xl shadow-lg"
              />
              {/* <div className="absolute -bottom-8 -left-8 bg-accent p-6 rounded-2xl shadow-lg">
                <p className="text-4xl font-bold text-foreground">7+</p>
                <p className="text-foreground/80">Years of Excellence</p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, sustainable, and cost-effective energy solutions that empower our customers to build a better future while ensuring the highest standards of quality and service.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of energy and electrical solutions in the region, recognized for our commitment to sustainability, innovation, and customer excellence.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, quality, customer focus, and environmental responsibility guide everything we do. We believe in honest business practices and building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-[#0A284E] text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", icon: Award },
              { number: "500+", label: "Happy Customers", icon: Users },
              { number: "7+", label: "Years Experience", icon: Clock },
              { number: "15+", label: "Expert Team Members", icon: Users },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#CEA42A]">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your energy goals with quality products and expert services.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
