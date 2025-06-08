
import { GraduationCap, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "BS Software Engineering",
      institution: "University of Karachi",
      period: "2022 – Current",
      icon: <GraduationCap className="text-primary" size={20} />
    },
    {
      degree: "Intermediate Pre-Engineering",
      institution: "Govt. Dehli College",
      period: "2019 – 2021",
      icon: <Award className="text-secondary" size={20} />
    },
    {
      degree: "Matric (Science)",
      institution: "Ali Foundation Academy",
      period: "2017 – 2019",
      icon: <Award className="text-primary" size={20} />
    }
  ];

  const traits = [
    { icon: <Zap className="text-primary" size={24} />, title: "Innovation", desc: "Creative problem-solving approach" },
    { icon: <Users className="text-secondary" size={24} />, title: "Teamwork", desc: "Collaborative and supportive" },
    { icon: <GraduationCap className="text-primary" size={24} />, title: "Communication", desc: "Clear and effective dialogue" },
    { icon: <Award className="text-secondary" size={24} />, title: "Efficiency", desc: "Optimized and clean solutions" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative mobile solutions with clean, efficient code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-fade-up">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                As a driven Flutter developer based in Karachi, Pakistan, I specialize in building 
                scalable and impactful mobile applications. My experience spans across government 
                and enterprise sectors, particularly in Bahrain, where I've contributed to 
                meaningful projects that make a difference.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                My commitment lies in delivering clean code, exceptional UI/UX experiences, and 
                technical innovation that solves real-world problems. I believe in the power of 
                technology to transform businesses and improve lives.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass p-6 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm">{edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Traits */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">Core Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {trait.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{trait.title}</h4>
                <p className="text-muted-foreground text-sm">{trait.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
