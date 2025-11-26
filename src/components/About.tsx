import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Calendar, Download, Terminal, ExternalLink } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Narrative & Stats */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Building digital products with <span className="text-primary">passion and precision</span>
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-foreground font-medium">Fullstack Software Developer</span> with 
                <span className="text-primary font-semibold"> 4+ years of experience</span> in building robust, scalable web applications. 
                Based in <span className="text-foreground font-medium">Bangalore</span>, I specialize in creating modern healthcare solutions 
                and enterprise applications that solve real-world problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies in the <span className="text-foreground font-medium">eBiosCore</span> platform, where I've architected 
                and optimized over <span className="text-primary font-semibold">70% of its 150+ modules</span>. From database design 
                to frontend interactivity, I enjoy every aspect of the development lifecycle.
              </p>

              {/* Quick Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-sm">Bangalore</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Experience</p>
                    <p className="font-medium text-sm">4+ Years</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 shadow-sm">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Availability</p>
                    <p className="font-medium text-sm">Open to work</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/resume.pdf" download="Mithun_T_Resume.pdf">
                  <Button className="gradient-primary shadow-glow gap-2 text-primary-foreground">
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  onClick={scrollToProjects} 
                  className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Projects
                </Button>
              </div>
            </div>

            {/* Right Column: Visual Code Block */}
            <div className="relative hidden lg:block">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10 transform rotate-3 scale-95" />
              
              <Card className="bg-[#1e1e1e] border-border/20 text-gray-300 p-0 overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                {/* Fake Browser/Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Terminal className="w-3 h-3" />
                    <span>developer.json</span>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-1">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-white">=</span> <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-sky-300">name</span>: <span className="text-green-300">"Mithun T"</span>,
                    </div>
                    <div>
                      <span className="text-sky-300">role</span>: <span className="text-green-300">"Fullstack Developer"</span>,
                    </div>
                    <div>
                      <span className="text-sky-300">status</span>: <span className="text-green-300">"Building scalable solutions"</span>,
                    </div>
                    <div>
                      <span className="text-sky-300">skills</span>: <span className="text-white">[</span>
                    </div>
                    <div className="pl-4 text-orange-300">
                      "React", "TypeScript", ".NET Core",
                      <br />
                      "SQL Server", "PostgreSQL"
                    </div>
                    <div className="text-white">],</div>
                    <div>
                      <span className="text-sky-300">passion</span>: <span className="text-green-300">"Clean Architecture"</span>,
                    </div>
                    <div>
                      <span className="text-sky-300">location</span>: <span className="text-green-300">"Bangalore, India"</span>
                    </div>
                  </div>
                  <div className="text-white">{`};`}</div>
                </div>
              </Card>
              
              {/* Decorative badge */}
              <Badge className="absolute -bottom-4 -right-4 px-4 py-2 bg-background border-primary/20 text-primary shadow-lg animate-bounce-in">
                4+ Years Experience
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;