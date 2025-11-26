import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTheme } from "next-themes";
import { Briefcase, Code2, Layers, Trophy } from "lucide-react";

const CareerStats = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();

  // Data representing your career growth based on your timeline
  const data = [
    { year: "2021", level: 30, role: "Junior Dev", label: "Started Journey" },
    { year: "2022", level: 55, role: "FullStack Web Developer", label: "Fullstack Transition" },
    { year: "2023", level: 70, role: "Senior Developer", label: "Major Module Delivery" },
    { year: "2024", level: 95, role: "Team Lead/Freelance", label: "LMS & GMS Projects" },
    { year: "2025", level: 100, role: "Team Lead/Freelance", label: "Enterprise Solutions" },
  ];

  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border p-3 rounded-lg shadow-lg">
          <p className="font-bold text-foreground mb-1">{label}</p>
          <p className="text-primary text-sm font-medium">
            {payload[0].payload.role}
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            {payload[0].payload.label}
          </p>
        </div>
      );
    }
    return null;
  };

  // Stats to display alongside the graph
  const stats = [
    {
      label: "Total Experience",
      value: "4+ Years",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      description: "Building scalable solutions",
    },
    {
      label: "Modules Delivered",
      value: "150+",
      icon: <Layers className="w-5 h-5 text-primary" />,
      description: "Across HMIS & Enterprise apps",
    },
    {
      label: "Freelance Projects",
      value: "5+",
      icon: <Trophy className="w-5 h-5 text-primary" />,
      description: "End-to-end product delivery",
    },
    {
      label: "Tech Stack",
      value: "15+",
      icon: <Code2 className="w-5 h-5 text-primary" />,
      description: "Technologies mastered",
    },
  ];

  return (
    <section id="career-stats" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Career <span className="text-gradient">Trajectory</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 h-full">
            {/* Left Side: Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-colors flex items-center p-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 mr-4">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Right Side: Growth Graph */}
            <Card className="lg:col-span-2 p-6 backdrop-blur-sm bg-card/50 border-border/50 shadow-lg flex flex-col">
              <CardHeader className="px-0 pt-0 pb-6">
                <CardTitle className="text-xl">Professional Growth Impact</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Consistent growth in technical capabilities and project complexity over time.
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 min-h-[300px] p-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="year" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis 
                      hide 
                      domain={[0, 110]} 
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--primary))', strokeWidth: 2 }} />
                    <Area
                      type="monotone"
                      dataKey="level"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorLevel)"
                      activeDot={{ r: 6, strokeWidth: 0, fill: "hsl(var(--foreground))" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerStats;