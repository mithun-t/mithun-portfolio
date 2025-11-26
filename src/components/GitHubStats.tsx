import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import GitHubCalendar from 'react-github-calendar';

const GitHubStats = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();

  // Custom theme to match your "primary" color (hsl(200 95% 45%))
  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section id="github" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            My open source contributions and coding streaks
          </p>

          {/* Interactive Contribution Graph */}
          <Card className="p-8 mb-8 backdrop-blur-sm bg-card/50 border-border/50 shadow-lg flex justify-center items-center overflow-x-auto">
            <div className="min-w-[700px] w-full flex justify-center">
               <GitHubCalendar 
                username="mithun-t"
                colorScheme={theme === "dark" ? "dark" : "light"}
                style={{
                  color: theme === "dark" ? "#e2e8f0" : "#1e293b",
                }}
              /> 
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-1 gap-6">
            {/* Streak Stats */}
            <Card className="p-4 backdrop-blur-sm bg-card/50 border-border/50 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 flex justify-center items-center overflow-hidden">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=mithun-t&theme=${
                  theme === "dark" ? "tokyonight" : "default"
                }&hide_border=true&background=${
                  theme === "dark" ? "00000000" : "00000000"
                }&ring=0ea5e9&fire=0ea5e9&currStreakLabel=0ea5e9`}
                alt="GitHub Streak"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </Card>

            {/* Top Languages */}
            {/* <Card className="p-4 backdrop-blur-sm bg-card/50 border-border/50 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 flex justify-center items-center overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=mithun-t&show_icons=true&theme=radical`}
                alt="Top Languages"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </Card> */}
            {/* Top Languages */}
            <Card className="p-4 backdrop-blur-sm bg-card/50 border-border/50 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 flex justify-center items-center overflow-hidden">
              <img
                src={`https://github-profile-trophy.vercel.app/?username=mithun-t&theme=radical&margin-w=15&margin-h=15&no-bg=true&no-frame=true`}
                alt="GitHub Trophies"
                className="max-w-full h-auto"
                loading="lazy"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;