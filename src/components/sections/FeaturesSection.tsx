import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Palette, Users, ArrowRight, Wand2, Image, Layers } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI-Powered Generation",
      description: "Create stunning images from simple text prompts with our advanced AI models.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Zap,
      title: "Real-Time Editing",
      description: "Edit images instantly with professional tools that respond to your creativity.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Layers,
      title: "Template Library",
      description: "Access thousands of professionally designed templates for any occasion.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Work together seamlessly with real-time collaboration and sharing features.",
      color: "text-premium",
      bgColor: "bg-premium/10",
    },
    {
      icon: Image,
      title: "Cloud Storage",
      description: "Never lose your work with automatic cloud sync and unlimited storage.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Palette,
      title: "Brand Consistency",
      description: "Maintain your brand identity with custom color palettes and style guides.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const showcases = [
    {
      image: beforeAfter1,
      title: "Edit Like Magic",
      subtitle: "Natural Language Editing",
      description: "Transform your images with simple commands like 'make it vintage' or 'enhance colors'.",
      badge: "AI-Powered",
    },
    {
      image: beforeAfter2,
      title: "Enhance Instantly",
      subtitle: "Professional Results",
      description: "Professional-grade enhancements in milliseconds. Colors pop, details shine, perfection delivered.",
      badge: "Lightning Fast",
    },
    {
      image: beforeAfter3,
      title: "Always On-Brand",
      subtitle: "Brand Consistency",
      description: "Maintain perfect brand consistency across all your images with intelligent style matching.",
      badge: "Smart Branding",
    },
  ];

  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to create{" "}
            <span className="gradient-text">amazing visuals</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional tools and AI-powered features designed for creators, marketers, and businesses of all sizes.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`professional-card fade-in-up stagger-delay-${(index % 4) + 1}`}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Showcases */}
        <div className="space-y-24">
          {showcases.map((showcase, index) => (
            <div 
              key={showcase.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 fade-in-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                  ✨ {showcase.badge}
                </div>
                
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-2">{showcase.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{showcase.subtitle}</p>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    {showcase.description}
                  </p>
                </div>
                
                <Button variant="cta-secondary" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image */}
              <div className={`relative fade-in-up stagger-delay-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                  <img 
                    src={showcase.image} 
                    alt={`${showcase.title} - ${showcase.description}`}
                    className="relative rounded-xl shadow-elegant hover:shadow-premium transition-all duration-500 w-full h-auto transform group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 fade-in-up">
          <Button variant="professional" size="xl" className="group">
            <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Explore All Features
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;