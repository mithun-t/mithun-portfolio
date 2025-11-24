import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mithunt04@gmail.com",
      href: "mailto:mithunt04@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9562601187",
      href: "tel:+919562601187",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/mithun-t",
      href: "https://github.com/mithun-t",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mithun-t",
      href: "https://linkedin.com/in/mithun-t",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's discuss how I can contribute to your next project
          </p>

          <Card className="p-8 md:p-12 backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((item, idx) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-muted-foreground mb-6">
                Available for fulltime opportunities and freelance projects
              </p>
              <div className="flex gap-4 justify-center">
                <a href="mailto:mithunt04@gmail.com">
                  <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity">
                    Send Email
                  </Button>
                </a>
                <a href="tel:+919562601187">
                  <Button variant="outline" size="lg" className="hover:border-primary hover:text-primary transition-all">
                    Schedule Call
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
