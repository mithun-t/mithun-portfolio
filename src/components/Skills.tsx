import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Redux Toolkit", "React Query", "React Hook Form", "Zod", "Material UI", "Shadcn UI", "Tailwind CSS", "Bootstrap", "Ajax", "jQuery", "Remix"],
    },
    {
      title: "Backend",
      skills: [".NET Core 9", "ASP.NET 4.2", "Web API", "Entity Framework", "LINQ", "C#"],
    },
    {
      title: "Database",
      skills: ["SQL Server", "PostgreSQL", "Oracle DB"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "QuestPDF", "ITextSharp", "HMAC Signature", "ABHA Integration", "Sadadu Payment Gateway", "SEO", "Zustand"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1.5 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
