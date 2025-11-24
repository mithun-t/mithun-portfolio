import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Code2, TrendingUp } from "lucide-react";
import { useState } from "react";

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "work" | "freelance";
  description: string;
  technologies: string[];
  achievements: string[];
  modules?: string[];
}

const timelineData: TimelineItem[] = [
  {
    period: "2020 - 2021 (1.5 years)",
    role: "Software Developer",
    company: "eBiosCore - HMIS Platform",
    location: "Bangalore, India",
    type: "work",
    description: "Started career building healthcare management systems with traditional tech stack",
    technologies: ["ASP.NET 4.2", "Oracle DB", "Ajax", "jQuery", "JavaScript", "Bootstrap", "C#", "ITextSharp"],
    achievements: [
      "Learned healthcare domain and HMIS workflows",
      "Built foundation modules for hospital management",
      "Implemented PDF generation for medical reports"
    ]
  },
  {
    period: "2021 - Present (2.5+ years)",
    role: "Fullstack Software Developer",
    company: "eBiosCore - HMIS Platform",
    location: "Bangalore, India",
    type: "work",
    description: "Upgraded to modern tech stack and became key contributor to 70% of 150+ modules",
    technologies: [
      "React", "TypeScript", ".NET Core 9", "Entity Framework", "LINQ", 
      "Material UI", "SQL Server", "Redux Toolkit", "React Query", 
      "React Hook Form", "Zod", "QuestPDF", "HMAC Signature"
    ],
    achievements: [
      "Led migration to modern React/.NET Core stack",
      "Developed 70% of 150+ HMIS modules",
      "Built complete LMIS (Laboratory Management) system",
      "Created generic CRUD operations reducing code repetition",
      "Implemented ABHA M1 and M2 integrations",
      "Optimized performance across multiple modules"
    ],
    modules: [
      "LMIS - Laboratory Management Information System",
      "Billing & Security Management",
      "Goods Receive Note & Purchase Order",
      "Department Unit Allocation & List Masters",
      "Admission & Diagnosis Management",
      "Patient Management & Clinical Records",
      "Pharmacy & Appointment Systems",
      "Ward/Bed Transfer & Room Setup"
    ]
  },
  {
    period: "2023 - Present (1 year)",
    role: "Freelance Full Stack Developer",
    company: "Independent Projects",
    location: "Remote",
    type: "freelance",
    description: "Delivering custom software solutions while continuing primary role",
    technologies: [
      "React.js", "TypeScript", "Tailwind CSS", ".NET Core 9",
      "Zustand", "React Query", "Shadcn UI", "Remix",
      "PostgreSQL", "QuestPDF", "Razorpay Payment Gateway"
    ],
    achievements: [
      // "Built complete Learning Management System (LMS)",
      "Developed Gym Management System from scratch",
      "Created eCommerce platform with payment integration",
      "Delivered projects ahead of schedule"
    ],
    modules: [
      // "LMS: Dashboard, Study Materials, Examinations, Live Classes",
      "GMS: Member & Employee Management, Equipment Tracking, Check-in System",
      "eCommerce: Product Display, Cart, Payment Gateway, Returns Flow, SEO"
    ]
  }
];

const Timeline = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Career <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              4+ years of professional growth and continuous learning
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

            {timelineData.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative mb-12 md:mb-24 animate-fade-in ${
                    isLeft ? "md:pr-[calc(50%+3rem)]" : "md:pl-[calc(50%+3rem)] md:text-right"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 -translate-y-1/2 top-8 z-20 ${
                      item.type === "work" ? "bg-primary" : "bg-accent"
                    } shadow-glow animate-pulse-glow`}
                  >
                    <div className={`absolute inset-0 rounded-full ${
                      item.type === "work" ? "bg-primary" : "bg-accent"
                    } animate-ping opacity-75`} />
                  </div>

                  {/* Content card */}
                  <Card
                    className={`ml-16 md:ml-0 p-6 backdrop-blur-sm bg-card/90 border-border/50 hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${
                      isExpanded ? "shadow-xl scale-[1.02]" : ""
                    }`}
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <div className={`flex items-start gap-4 mb-4 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                      <div className={`p-3 rounded-lg ${
                        item.type === "work" ? "bg-primary/10" : "bg-accent/10"
                      }`}>
                        {item.type === "work" ? (
                          <Briefcase className={`w-6 h-6 ${item.type === "work" ? "text-primary" : "text-accent"}`} />
                        ) : (
                          <Code2 className="w-6 h-6 text-accent" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant={item.type === "work" ? "default" : "secondary"} className="font-semibold">
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.period}
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="w-3 h-3 mr-1" />
                            {item.location}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                        <p className="text-lg text-primary font-semibold mb-2">{item.company}</p>
                        <p className="text-muted-foreground mb-4">{item.description}</p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Technologies:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.slice(0, isExpanded ? undefined : 6).map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {!isExpanded && item.technologies.length > 6 && (
                              <Badge variant="outline" className="text-xs">
                                +{item.technologies.length - 6} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Achievements - always visible but limited */}
                        <div className={`space-y-2 transition-all duration-500 ${
                          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-40 opacity-90"
                        }`}>
                          <p className="text-sm font-semibold">Key Achievements:</p>
                          <ul className="space-y-1">
                            {item.achievements.slice(0, isExpanded ? undefined : 3).map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Modules - only when expanded */}
                          {isExpanded && item.modules && (
                            <div className="mt-4 pt-4 border-t border-border/50">
                              <p className="text-sm font-semibold mb-2">Modules & Projects:</p>
                              <ul className="space-y-1">
                                {item.modules.map((module, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-accent mt-1">▸</span>
                                    <span>{module}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <p className="text-xs text-muted-foreground mt-4 italic">
                          {isExpanded ? "Click to collapse" : "Click to expand details"}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}

            {/* Timeline end */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-glow animate-float">
                <TrendingUp className="w-5 h-5" />
                Growing & Learning Every Day
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
