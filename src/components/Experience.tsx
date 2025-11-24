import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      period: "Last 2.5 Years",
      title: "Senior Fullstack Developer",
      company: "eBiosCore - Hospital Management System",
      techStack: ["React", "TypeScript", ".NET Core 9", "Entity Framework", "SQL Server", "Material UI", "Redux Toolkit", "React Query"],
      achievements: [
        "Worked on 70% of 150+ modules, including complete development, bug fixes, and feature additions",
        "Independently built LMIS software with Laboratory Report Entry and Investigation List modules",
        "Developed 20+ complete modules including Billing, Security Management, Goods Receive Note, Purchase Order, and more",
        "Created dynamic generic API operations (Save, Fetch, Update, Delete) for all tables, reducing code redundancy",
        "Implemented ABHA M1 and M2 integrations for healthcare compliance",
        "Generated numerous PDF reports using QuestPDF for various modules",
        "Optimized multiple modules for better performance and lighter bundle sizes",
      ],
    },
    {
      period: "First 1.5 Years",
      title: "Fullstack Developer",
      company: "Legacy System - Hospital Management",
      techStack: ["ASP.NET 4.2", "C#", "Oracle DB", "JavaScript", "jQuery", "Ajax", "Bootstrap", "ITextSharp"],
      achievements: [
        "Worked on the same product (eBiosCore) with legacy tech stack",
        "Contributed to various modules and gained deep understanding of hospital management workflows",
        "Generated PDF reports using ITextSharp",
        "Developed responsive UI components using Bootstrap and jQuery",
      ],
    },
  ];

  const modules = [
    "Laboratory Report Entry", "Investigation List", "Billing", "Security Management",
    "Goods Receive Note", "Purchase Order", "Department Unit Allocation", "List Master",
    "Admission", "Diagnosis List", "Patient Invoice Code List", "Payment Type List",
    "Resource List", "Reason List", "Break List", "Department Unit List",
    "Departments List", "Product Tax List", "Product Overview", "Product List",
    "Template List", "Appointment Color Setup", "Physio Therapy", "Bill Estimate",
    "Chargesheet", "Registration", "Discharge", "Discharge Summary", "Revisit",
    "Employee Management", "Appointments", "Clinical Management", "Ward/Bed Transfer",
    "Merge Patient", "Product Transactions", "Pharmacy Management", "Nurses Record Management",
    "Room - Bed Setup"
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Building enterprise healthcare solutions at scale
          </p>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Card
                key={exp.title}
                className={`p-6 md:p-8 backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-6 md:p-8 backdrop-blur-sm bg-card/80 border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Modules I've <span className="text-gradient">Contributed To</span>
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              Complete development, feature additions, or bug fixes across 40+ modules
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {modules.map((module) => (
                <Badge
                  key={module}
                  variant="secondary"
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {module}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
