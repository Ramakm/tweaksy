import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Palette, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Templates", href: "#" },
        { name: "API", href: "#" },
        { name: "Integrations", href: "#" }
      ]
    },
    company: {
      title: "Company", 
      links: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Community", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "System Status", href: "#" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "Security", href: "#" }
      ]
    }
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },  
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Palette className="h-8 w-8 text-primary" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold gradient-text">Tweaksy</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Empowering creativity through AI-powered image editing and generation. 
                Join thousands of creators making stunning visuals in seconds.
              </p>

              {/* Newsletter */}
              <div className="space-y-4">
                <h4 className="font-semibold">Stay Updated</h4>
                <div className="flex space-x-2 max-w-sm">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-background border-border"
                  />
                  <Button variant="cta-primary" size="sm">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Get the latest updates and creative tips delivered to your inbox.
                </p>
              </div>
            </div>

            {/* Links Sections */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Tweaksy. All rights reserved. Making creativity accessible to everyone.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;