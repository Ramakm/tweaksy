import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Crown, Zap } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: { monthly: 0, annual: 0 },
      badge: null,
      buttonVariant: "outline" as const,
      buttonText: "Get Started Free",
      features: [
        "3 AI image generations per month",
        "7 image edits per month", 
        "Standard resolution exports",
        "Basic templates library",
        "Community support",
        "Watermark on exports"
      ]
    },
    {
      name: "Pro",
      description: "For creative professionals",
      price: { monthly: 19, annual: 15 },
      badge: "Most Popular",
      buttonVariant: "professional" as const,
      buttonText: "Start Pro Trial",
      popular: true,
      features: [
        "Unlimited AI generations",
        "Unlimited image edits",
        "4K resolution exports",
        "Premium templates library",
        "Advanced editing tools",
        "Priority support",
        "No watermarks",
        "Custom brand kits"
      ]
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: { monthly: 49, annual: 39 },
      badge: "Best Value",
      buttonVariant: "premium" as const,
      buttonText: "Contact Sales",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager",
        "SSO & advanced security",
        "Custom training",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-premium/10 border border-premium/20 mb-6">
            <Crown className="h-4 w-4 text-premium mr-2" />
            <span className="text-sm font-medium text-premium">Simple Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start creating for{" "}
            <span className="gradient-text">free</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan for your creative needs. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted/50 rounded-xl p-1">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                !isAnnual 
                  ? "bg-background text-foreground shadow-soft" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all relative ${
                isAnnual 
                  ? "bg-background text-foreground shadow-soft" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-success text-success-foreground text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative fade-in-up stagger-delay-${index + 1} ${
                plan.popular 
                  ? "border-primary/50 shadow-elegant scale-105 bg-gradient-to-b from-primary/5 to-transparent" 
                  : "professional-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className={`px-4 py-1 rounded-full text-xs font-semibold ${
                    plan.popular 
                      ? "bg-primary text-primary-foreground shadow-elegant" 
                      : "bg-premium text-premium-foreground shadow-soft"
                  }`}>
                    {plan.badge}
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                
                {/* Price */}
                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold gradient-text">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.price.monthly === 0 ? "" : "/month"}
                    </span>
                  </div>
                  {isAnnual && plan.price.monthly > 0 && (
                    <div className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.price.annual * 12}/year)
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full font-semibold"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-muted-foreground mb-4">
            Have questions about our pricing?
          </p>
          <Button variant="link" className="text-primary font-semibold">
            View FAQ and detailed feature comparison →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;