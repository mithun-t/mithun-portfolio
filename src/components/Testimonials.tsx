import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Senior Developer",
    role: "Tech Lead at eBiosCore",
    content: "Mithun consistently delivers high-quality code and shows exceptional problem-solving skills. His work on the LMIS system was outstanding.",
    avatar: "SD"
  },
  {
    name: "Project Manager",
    role: "Healthcare Solutions",
    content: "Working with Mithun on the Hospital Management System was a pleasure. He understands complex healthcare workflows and translates them into elegant technical solutions.",
    avatar: "PM"
  },
  {
    name: "Client",
    role: "LMS Platform Owner",
    content: "Mithun delivered our Learning Management System ahead of schedule with excellent code quality. Highly recommended for full-stack projects.",
    avatar: "CL"
  }
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 backdrop-blur-sm bg-card/80 border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
