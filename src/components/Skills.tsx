
import { Code, Smartphone, Database, Github } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-primary" size={24} />,
      skills: ["Flutter", "Dart", "Android", "iOS"]
    },
    {
      title: "Programming",
      icon: <Code className="text-secondary" size={24} />,
      skills: ["Python"]
    },
    {
      title: "Backend & APIs",
      icon: <Database className="text-primary" size={24} />,
      skills: ["REST API", "HTTP", "Dio", "Firebase"]
    },
    {
      title: "Tools & Platforms",
      icon: <Github className="text-secondary" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Android Studio"]
    }
  ];

  const frameworks = [
    "Riverpod", "Provider", "Bloc", "GetX", "MVVM", "Google Maps", 
    "Stripe", "Localization", "SharedPrefs", "Hive", "SQLite"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern mobile applications
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-center mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-background/50 text-foreground rounded-full text-sm border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks & Libraries */}
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">Frameworks & Libraries</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {frameworks.map((framework, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
