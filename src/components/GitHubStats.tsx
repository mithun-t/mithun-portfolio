import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GitHubStats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            GitHub <span className="text-gradient">Statistics</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            My coding activity and contributions
          </p>

          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=mithun-t&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9"
                alt="GitHub Stats"
                className="rounded-lg shadow-glow"
                loading="lazy"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=mithun-t&theme=tokyonight&hide_border=true&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff"
                alt="GitHub Streak"
                className="rounded-lg shadow-glow"
                loading="lazy"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=mithun-t&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9"
                alt="Top Languages"
                className="rounded-lg shadow-glow"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
