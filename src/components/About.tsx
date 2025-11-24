import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { MapPin, Briefcase, Calendar } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <Card className="p-8 backdrop-blur-sm bg-card/80 border-border/50 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate fullstack software developer with <span className="text-primary font-semibold">4 years of hands-on experience</span> building 
                robust, scalable web applications. Currently based in <span className="text-primary font-semibold">Bangalore</span>, I specialize in creating 
                modern healthcare solutions and enterprise applications.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className="text-sm text-muted-foreground">4+ Years</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Availability</p>
                    <p className="text-sm text-muted-foreground">Open to opportunities</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                My expertise lies in developing comprehensive <span className="text-primary font-semibold">Hospital Management Systems (HMIS)</span>, 
                with deep knowledge of the <span className="text-primary font-semibold">eBiosCore</span> platform where I've worked on 
                over <span className="text-primary font-semibold">70% of its 150+ modules</span>. I'm proficient in the full development lifecycle, 
                from architecture design to deployment and optimization.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
