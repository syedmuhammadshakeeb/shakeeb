
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Flutter Developer",
      company: "K-Labs",
      location: "Karachi, Pakistan",
      period: "September 2024 – Present",
      description: "Developing custom software solutions with focus on UI enhancements and team collaboration. Working on scalable mobile applications using Flutter and modern development practices.",
      highlights: [
        "Custom software solutions",
        "UI enhancements",
        "Team collaboration",
        "Scalable architectures"
      ]
    },
    {
      title: "Trainee Flutter Developer",
      company: "Quanrio",
      location: "Karachi, Pakistan",
      period: "March 2024 – June 2024",
      description: "Gained hands-on experience in problem-solving, team coordination, and conducting training workshops. Contributed to various Flutter projects while learning industry best practices.",
      highlights: [
        "Problem solving",
        "Team coordination",
        "Training workshops",
        "Industry best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions and growing expertise in mobile development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <Briefcase className="text-primary" size={16} />
                      <span className="text-primary font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-secondary" size={16} />
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-2 rounded-full">
                  <Calendar className="text-primary" size={16} />
                  <span className="text-foreground font-medium text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
