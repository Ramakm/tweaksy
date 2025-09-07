import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Heart, ArrowRight } from "lucide-react";

const AboutSection = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-founder", 
      bio: "Former Adobe engineer with 10+ years in AI and computer vision.",
      avatar: "AJ"
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-founder",
      bio: "Machine learning expert from Stanford, previously at Google AI.",
      avatar: "SK"  
    },
    {
      name: "Marcus Chen",
      role: "Head of Design",
      bio: "Award-winning designer with experience at top creative agencies.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez", 
      role: "Head of Product",
      bio: "Product strategist focused on user experience and growth.",
      avatar: "ER"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and creativity."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature is designed with our users' needs and workflows in mind."
    },
    {
      icon: Zap,
      title: "Speed & Quality", 
      description: "We believe you shouldn't have to choose between fast and beautiful."
    },
    {
      icon: Heart,
      title: "Creative Empowerment",
      description: "We're passionate about empowering everyone to express their creativity."
    }
  ];

  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Heart className="h-4 w-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent">Our Story</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Empowering creativity through{" "}
            <span className="gradient-text">AI innovation</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2023 by a team of AI researchers and creative professionals, Tweaksy was born from a simple belief: 
            everyone deserves access to professional-grade creative tools, regardless of their technical expertise.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20 fade-in-up">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We're democratizing creativity by making advanced AI-powered image editing and generation tools accessible to everyone. 
              From solo creators to enterprise teams, we believe that powerful creative technology should be intuitive, 
              fast, and affordable.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 fade-in-up">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`text-center professional-card fade-in-up stagger-delay-${index + 1}`}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12 fade-in-up">
            <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-xl text-muted-foreground">
              The passionate people behind Tweaksy's innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className={`text-center professional-card fade-in-up stagger-delay-${index + 1} hover:shadow-elegant`}
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-xl font-bold">
                  {member.avatar}
                </div>
                
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20 fade-in-up">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2023",
                  title: "Founded Tweaksy", 
                  description: "Started with a vision to democratize AI-powered creativity"
                },
                {
                  year: "2023",
                  title: "First 1,000 Users",
                  description: "Reached our first milestone with amazing community feedback"
                },
                {
                  year: "2024", 
                  title: "AI Engine V2.0",
                  description: "Launched advanced AI models with 10x faster processing"
                },
                {
                  year: "2024",
                  title: "50,000+ Creators",
                  description: "Growing community of creators, marketers, and businesses"
                }
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-6">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Join Our Creative Community</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of the creative revolution. Connect with fellow creators, share your work, and get inspired.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg" className="group">
                <Users className="mr-2 h-5 w-5" />
                Join Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cta-secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;