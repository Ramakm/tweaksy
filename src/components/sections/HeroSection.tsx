import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero-bg" id="home">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Trusted by 50,000+ creators</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Unleash Your{" "}
                <span className="gradient-text">Creativity</span>{" "}
                with AI-Powered Image Editing
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Transform your ideas into stunning visuals in seconds. Professional-grade editing tools powered by cutting-edge AI technology.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="professional" 
                size="xl" 
                className="text-lg group"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Creating Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="cta-secondary" 
                size="xl" 
                className="text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-8 opacity-70">
              <span className="text-sm font-medium text-muted-foreground">Used by teams at:</span>
              <div className="flex items-center gap-6">
                {["Adobe", "Canva", "Figma", "Dribbble"].map((company) => (
                  <div key={company} className="px-3 py-1 text-sm font-medium text-muted-foreground bg-muted/50 rounded-md">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-up stagger-delay-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <img 
                src={heroImage} 
                alt="AI-powered image editing interface showcasing professional tools and real-time editing capabilities"
                className="relative rounded-2xl shadow-elegant hover:shadow-premium transition-all duration-500 w-full h-auto transform group-hover:scale-105"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-soft animate-bounce">
                ✨ AI Powered
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                🚀 Real-time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;