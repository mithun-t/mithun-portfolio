import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Learning Management System (LMS)",
      description: "Comprehensive education platform with course management, live classes, and student tracking capabilities",
      role: "Frontend Developer",
      techStack: ["React.js", "Tailwind CSS", "React Query", "Zustand"],
      features: [
        "Interactive Dashboard with analytics and insights",
        "Study Materials management and distribution",
        "Recorded session playback with progress tracking",
        "Examination and Quiz system with automated grading",
        "Attendance tracking and reporting",
        "Watch History for content consumption analytics",
        "Live class integration with real-time interaction",
      ],
      type: "Freelance",
    },
    {
      title: "Gym Management System (GMS)",
      description: "Complete gym operations management solution with member tracking, equipment management, and workout planning",
      role: "Fullstack Developer",
      techStack: ["React", "TypeScript", ".NET Core 9", "Entity Framework", "PostgreSQL", "Shadcn UI", "Zustand", "React Query", "QuestPDF"],
      features: [
        "Member Management with detailed profiles and history",
        "Employee Management and role-based access control",
        "Equipment Management with maintenance tracking",
        "Check In/Check Out system with automated logging",
        "Workout assignment and tracking for members",
        "Exercise Library with detailed instructions",
        "PDF generation for reports and membership cards",
      ],
      type: "Freelance",
    },
    {
      title: "eCommerce Web Application",
      description: "Modern e-commerce platform with payment integration and comprehensive shopping features",
      role: "Frontend Developer",
      techStack: ["Remix", "Tailwind CSS", "Sadadu Payment Gateway"],
      features: [
        "Product Display with advanced filtering and sorting",
        "Detailed Product View with image galleries",
        "Shopping Cart with real-time updates",
        "Payment Integration using Sadadu Gateway",
        "Product Return flow management",
        "Dynamic Home page with featured products",
        "Top deals and Mega Offer sections",
        "Wish List functionality",
        "SEO optimization with Canonical URLs",
      ],
      type: "Freelance",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Freelance <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Building innovative solutions in my spare time
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={project.title}
                className={`p-6 md:p-8 backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Code2 className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-2">{project.description}</p>
                    <Badge variant="outline" className="border-accent/50 text-accent">
                      {project.type} • {project.role}
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="font-semibold text-sm text-primary mb-3">Key Features:</p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
