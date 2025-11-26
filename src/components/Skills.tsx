import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { 
  Layout, 
  Server, 
  Database, 
  Settings, 
} from "lucide-react";

interface Skill {
  name: string;
  url: string;
  iconSlug?: string; // Slug for simpleicons.org
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-primary" />,
      description: "Building responsive, interactive user interfaces",
      skills: [
        { name: "React", url: "https://react.dev", iconSlug: "react" },
        { name: "TypeScript", url: "https://www.typescriptlang.org", iconSlug: "typescript" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", iconSlug: "javascript" },
        { name: "Redux Toolkit", url: "https://redux-toolkit.js.org", iconSlug: "redux" },
        { name: "Zustand", url: "https://zustand-demo.pmnd.rs", iconSlug: "" }, // No official simple-icon
        { name: "React Query", url: "https://tanstack.com/query/latest", iconSlug: "reactquery" },
        { name: "Remix", url: "https://remix.run", iconSlug: "remix" },
        { name: "React Hook Form", url: "https://react-hook-form.com", iconSlug: "reacthookform" },
        { name: "Zod", url: "https://zod.dev", iconSlug: "zod" },
        { name: "Material UI", url: "https://mui.com", iconSlug: "mui" },
        { name: "Shadcn UI", url: "https://ui.shadcn.com", iconSlug: "shadcnui" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com", iconSlug: "tailwindcss" },
        { name: "Bootstrap", url: "https://getbootstrap.com", iconSlug: "bootstrap" },
        { name: "Ajax", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX", iconSlug: "" },
        { name: "jQuery", url: "https://jquery.com", iconSlug: "jquery" }
      ],
    },
    {
      title: "Backend & Architecture",
      icon: <Server className="w-6 h-6 text-primary" />,
      description: "Designing robust server-side logic and APIs",
      skills: [
        { name: ".NET Core 9", url: "https://dotnet.microsoft.com", iconSlug: "dotnet" },
        { name: "ASP.NET 4.2", url: "https://dotnet.microsoft.com/apps/aspnet", iconSlug: "dotnet" },
        { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp", iconSlug: "csharp" },
        { name: "Web API", url: "https://dotnet.microsoft.com/apps/aspnet/apis", iconSlug: "dotnet" },
        { name: "Entity Framework", url: "https://learn.microsoft.com/en-us/ef", iconSlug: "" },
        { name: "LINQ", url: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq", iconSlug: "" },
        { name: "HMAC Signature", url: "https://en.wikipedia.org/wiki/HMAC", iconSlug: "" }
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6 text-primary" />,
      description: "Optimizing data storage and retrieval",
      skills: [
        { name: "SQL Server", url: "https://www.microsoft.com/en-us/sql-server", iconSlug: "microsoftsqlserver" },
        { name: "PostgreSQL", url: "https://www.postgresql.org", iconSlug: "postgresql" },
        { name: "Oracle DB", url: "https://www.oracle.com/database", iconSlug: "oracle" }
      ],
    },
    {
      title: "Tools & Integrations",
      icon: <Settings className="w-6 h-6 text-primary" />,
      description: "DevOps, testing, and third-party integrations",
      skills: [
        { name: "Git", url: "https://git-scm.com", iconSlug: "git" },
        { name: "GitHub", url: "https://github.com", iconSlug: "github" },
        { name: "QuestPDF", url: "https://www.questpdf.com", iconSlug: "" },
        { name: "ITextSharp", url: "https://github.com/itext/itextsharp", iconSlug: "" },
        { name: "ABHA Integration", url: "https://abdm.gov.in", iconSlug: "" },
        { name: "Razorpay Payment", url: "https://razorpay.com", iconSlug: "" },
        { name: "SEO Optimization", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", iconSlug: "google" },
        { name: "VS Code", url: "https://code.visualstudio.com", iconSlug: "visualstudiocode" }
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies I use to build scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className={`group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <a 
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-2 text-sm py-1.5 px-3.5 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer border-transparent hover:shadow-sm hover:-translate-y-0.5"
                      >
                        {skill.iconSlug && (
                          <img 
                            src={`https://cdn.simpleicons.org/${skill.iconSlug}`} 
                            alt={`${skill.name} icon`}
                            className="w-3.5 h-3.5 dark:invert"
                            loading="lazy"
                          />
                        )}
                        {skill.name}
                      </Badge>
                    </a>
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