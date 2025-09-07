import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Tweaksy transformed our content creation workflow. What used to take our team hours now happens in minutes. The AI suggestions are incredibly smart and save us so much time.",
      author: "Sarah Chen",
      role: "Creative Director",
      company: "Digital Agency Co.",
      rating: 5,
      avatar: "SC"
    },
    {
      quote: "The quality of AI-generated images is outstanding. Our marketing campaigns have never looked better, and our engagement rates have increased by 300% since we started using Tweaksy.",
      author: "Marcus Rodriguez", 
      role: "Marketing Manager",
      company: "TechStart Inc.",
      rating: 5,
      avatar: "MR"
    },
    {
      quote: "As a freelance designer, Tweaksy is a game-changer. The template library and AI editing tools help me deliver professional results faster than ever. My clients are amazed by the quality.",
      author: "Emily Watson",
      role: "Freelance Designer",
      company: "Independent",
      rating: 5,
      avatar: "EW"
    },
    {
      quote: "The collaboration features are fantastic. Our remote team can work together seamlessly, and the real-time editing capabilities make our creative process so much more efficient.",
      author: "David Kim",
      role: "Brand Manager", 
      company: "Global Brands Ltd.",
      rating: 5,
      avatar: "DK"
    },
    {
      quote: "Brand consistency was always a challenge until we found Tweaksy. The AI understands our style guidelines perfectly and maintains consistency across all our visual content.",
      author: "Lisa Thompson",
      role: "Head of Design",
      company: "E-commerce Plus",
      rating: 5,
      avatar: "LT"
    },
    {
      quote: "I've tried many image editing tools, but nothing comes close to Tweaksy's AI capabilities. The natural language editing is pure magic - just describe what you want and it happens.",
      author: "Alex Zhang",
      role: "Content Creator",
      company: "Social Media Pro",
      rating: 5,
      avatar: "AZ"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6">
            <Star className="h-4 w-4 text-success mr-2" />
            <span className="text-sm font-medium text-success">Loved by Creators</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What our{" "}
            <span className="gradient-text">community</span>{" "}
            is saying
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join thousands of creators, marketers, and businesses who trust Tweaksy for their visual content needs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: "Happy Users", value: "50,000+" },
            { label: "Images Created", value: "2M+" },
            { label: "Time Saved", value: "10,000+ hrs" },
            { label: "Average Rating", value: "4.9/5" }
          ].map((stat, index) => (
            <div key={stat.label} className={`text-center fade-in-up stagger-delay-${index + 1}`}>
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.author}
              className={`professional-card fade-in-up stagger-delay-${(index % 3) + 1} hover:shadow-elegant`}
            >
              <CardHeader className="pb-4">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/30 mb-2" />
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">{testimonial.author}</CardTitle>
                    <CardDescription className="text-xs">
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-20 fade-in-up">
          <p className="text-muted-foreground mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Adobe", "Canva", "Figma", "Dribbble", "Behance", "Unsplash"].map((company) => (
              <div key={company} className="px-4 py-2 text-lg font-semibold text-muted-foreground bg-muted/50 rounded-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;