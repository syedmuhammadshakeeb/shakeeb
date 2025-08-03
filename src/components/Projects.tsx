import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [{
    title: "Siin Live Shopping App",
    description: "Real-time shopping application featuring live auctions, streaming capabilities, and interactive user experiences.",
    features: ["Real-time shopping", "Live auctions", "Live streaming", "Interactive UI"],
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC", "Real-time APIs"],
    link: "https://play.google.com/store/apps/details?id=com.siinshop.app"
  }, {
    title: "Bahrain Tourism App", 
    description: "Comprehensive tourist planning tool with Google Maps integration and offline support using Hive database.",
    features: ["Tourist planning", "Google Maps integration", "Offline support", "Local attractions"],
    technologies: ["Flutter", "Google Maps API", "Hive", "REST APIs", "Geolocation"],
    link: "https://play.google.com/store/apps/details?id=com.btea.tg"
  }, {
    title: "RCSI AI Sim App",
    description: "Advanced simulated clinical AI patient training platform with real-time interaction and comprehensive feedback systems.",
    features: ["AI simulation", "Clinical training", "Real-time interaction", "Feedback system"],
    technologies: ["Flutter", "AI/ML APIs", "Real-time communication", "Database integration"]
  }];
  return <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative mobile solutions across different industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-up hover-scale" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  {project.link && (
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" 
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Download size={16} className="mr-2" />
                      Download APK
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;