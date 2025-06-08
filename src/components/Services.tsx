
import { Smartphone, Code, TestTube, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="text-primary" size={32} />,
      title: "Custom Mobile App Development",
      description: "End-to-end mobile application development for businesses, startups, and final year projects using Flutter and modern technologies.",
      features: ["Cross-platform development", "Business applications", "Startup solutions", "Academic projects"]
    },
    {
      icon: <Code className="text-secondary" size={32} />,
      title: "Responsive UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces with maintainable code architecture and optimal user experience.",
      features: ["Modern UI design", "Responsive layouts", "Clean architecture", "User-centered design"]
    },
    {
      icon: <TestTube className="text-primary" size={32} />,
      title: "Unit Testing & Quality Assurance",
      description: "Comprehensive testing strategies and clean architecture implementation to ensure robust and reliable applications.",
      features: ["Unit testing", "Integration testing", "Code quality", "Performance optimization"]
    },
    {
      icon: <Rocket className="text-secondary" size={32} />,
      title: "App Deployment & Maintenance",
      description: "Complete deployment pipeline setup and ongoing maintenance support for your mobile applications.",
      features: ["Play Store deployment", "App Store publishing", "Ongoing maintenance", "Performance monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive mobile development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
