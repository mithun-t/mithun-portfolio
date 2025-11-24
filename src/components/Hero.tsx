import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown, Download } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-glow animate-float">
                <img 
                  src={profileImage} 
                  alt="Mithun T - Fullstack Software Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">Mithun T</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Fullstack Software Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              4+ years of experience building scalable web applications with React, TypeScript, and .NET Core
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a href="https://github.com/mithun-t" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2 group hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/mithun-t" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2 group hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:mithunt04@gmail.com">
              <Button variant="outline" size="lg" className="gap-2 group hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Email
              </Button>
            </a>
            <a href="tel:+919562601187">
              <Button variant="outline" size="lg" className="gap-2 group hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Call
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-bounce-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </Button>
            <a href="/resume.pdf" download="Mithun_T_Resume.pdf">
              <Button 
                size="lg"
                variant="outline"
                className="gap-2 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </a>
            <Button 
              onClick={scrollToAbout} 
              variant="outline" 
              size="lg"
              className="hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;