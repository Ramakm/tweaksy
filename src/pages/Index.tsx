import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Palette, Users, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">Tweaksy</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost-hover">Features</Button>
            <Button variant="ghost-hover">Pricing</Button>
            <Button variant="ghost-hover">About</Button>
            <Button variant="outline">Sign In</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8 slide-in">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Magic happens</span> when creativity meets AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Tweaksy transforms your images with AI-powered editing that's{" "}
            <span className="text-primary font-semibold">intuitive, instant, and incredible</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Editing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="enterprise" size="lg" className="text-lg px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              Try Enterprise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-16 relative">
          <img 
            src={heroImage} 
            alt="AI-powered image editing interface"
            className="rounded-2xl shadow-magical floating max-w-full h-auto mx-auto"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How <span className="gradient-text">magic</span> works
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
              <span className="text-2xl font-bold text-primary-foreground">1</span>
            </div>
            <h3 className="text-2xl font-bold">Upload the Einstein</h3>
            <p className="text-muted-foreground">Drop your image and watch the magic begin. Any format, any size.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
              <span className="text-2xl font-bold text-primary-foreground">2</span>
            </div>
            <h3 className="text-2xl font-bold">Drop the bombshell</h3>
            <p className="text-muted-foreground">Tell us what you want. "Make it pop" or "Remove background" - we speak your language.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
              <span className="text-2xl font-bold text-primary-foreground">3</span>
            </div>
            <h3 className="text-2xl font-bold">Flip the script—now it's "Edit Happens"</h3>
            <p className="text-muted-foreground">Our AI works its magic in seconds. No complex tools, just pure creativity.</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-glow">
              <span className="text-2xl font-bold text-primary-foreground">4</span>
            </div>
            <h3 className="text-2xl font-bold">Light up the genius</h3>
            <p className="text-muted-foreground">Download your masterpiece and share it with the world. Genius activated!</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Features that make you go <span className="gradient-text">"Wow!"</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature 1 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">Edit Like It's Magic</h3>
            </div>
            <p className="text-xl text-muted-foreground">
              Transform your images with natural language. Say "make it vintage" and watch the AI work its magic.
            </p>
          </div>
          <div className="relative">
            <img 
              src={beforeAfter1} 
              alt="Before and after image transformation"
              className="rounded-2xl shadow-card"
            />
          </div>

          {/* Feature 2 */}
          <div className="lg:order-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Zap className="h-8 w-8 text-accent" />
              <h3 className="text-3xl font-bold">Enhance Instantly</h3>
            </div>
            <p className="text-xl text-muted-foreground">
              Professional-grade enhancements in milliseconds. Colors pop, details shine, perfection delivered.
            </p>
          </div>
          <div className="lg:order-1 relative">
            <img 
              src={beforeAfter2} 
              alt="Image enhancement comparison"
              className="rounded-2xl shadow-card"
            />
          </div>

          {/* Feature 3 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Palette className="h-8 w-8 text-success" />
              <h3 className="text-3xl font-bold">Always On-Brand</h3>
            </div>
            <p className="text-xl text-muted-foreground">
              Maintain your brand consistency across all images. Custom styles that learn from your preferences.
            </p>
          </div>
          <div className="relative">
            <img 
              src={beforeAfter3} 
              alt="Brand consistency example"
              className="rounded-2xl shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What our users are <span className="gradient-text">saying</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 border-primary/20 shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <CardTitle>"This is pure witchcraft!"</CardTitle>
              <CardDescription>Sarah Chen, Creative Director</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "I upload a boring product shot and boom - it's magazine-ready. Tweaksy just gets it. My team thinks I hired a secret designer."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <CardTitle>"My productivity went through the roof"</CardTitle>
              <CardDescription>Marcus Rodriguez, Marketing Manager</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "What used to take hours now takes seconds. I'm creating content faster than ever, and it looks better too. This is the future."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <CardTitle>"Game-changer for our brand"</CardTitle>
              <CardDescription>Emily Watson, Brand Manager</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Consistent, on-brand visuals across all our campaigns. Our brand identity has never looked better or been more cohesive."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <Users className="h-16 w-16 text-primary mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Create Together</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Collaborate in real-time with your team. Share projects, give feedback, and create amazing content together. 
            Because the best ideas happen when creative minds connect.
          </p>
          <Button variant="hero" size="lg" className="mt-8">
            <Users className="mr-2 h-5 w-5" />
            Start Collaborating
          </Button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Start your journey for <span className="gradient-text">free</span>
        </h2>

        <div className="max-w-md mx-auto">
          <Card className="bg-gradient-secondary border-primary/30 shadow-magical transform hover:scale-105 transition-magical">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Free Tier</CardTitle>
              <CardDescription className="text-lg">Perfect to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <span className="text-5xl font-bold gradient-text">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>3 free creates per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>7 free edits per month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Standard resolution exports</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>Community support</span>
                </li>
              </ul>
              
              <Button variant="pricing" className="w-full text-lg py-3">
                Get Started Free
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-text">Tweaksy</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 Tweaksy. Making image editing magical for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;