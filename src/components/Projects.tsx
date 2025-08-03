import { ExternalLink, Github, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Projects = () => {
  const projects = [{
    title: "Siin Live Shopping App",
    logo: "/lovable-uploads/f1977563-0351-4fc9-9d08-7f34f948d9e8.png",
    description: "Real-time shopping application featuring live auctions, streaming capabilities, and interactive user experiences.",
    features: ["Real-time shopping", "Live auctions", "Live streaming", "Interactive UI"],
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC", "Real-time APIs"],
    link: "https://play.google.com/store",
    type: "Mobile App"
  }, {
    title: "Bahrain Tourism App",
    logo: "/lovable-uploads/4748e5f3-6939-4b3e-b25c-7a07f40003a3.png",
    description: "Comprehensive tourist planning tool with Google Maps integration and offline support using Hive database.",
    features: ["Tourist planning", "Google Maps integration", "Offline support", "Local attractions"],
    technologies: ["Flutter", "Google Maps API", "Hive", "REST APIs", "Geolocation"],
    type: "Government Project"
  }, {
    title: "RCSI AI Sim App",
    logo: "/lovable-uploads/ad18bee2-615c-4426-8690-34497c4e0304.png",
    description: "Advanced simulated clinical AI patient training platform with real-time interaction and comprehensive feedback systems.",
    features: ["AI simulation", "Clinical training", "Real-time interaction", "Feedback system"],
    technologies: ["Flutter", "AI/ML APIs", "Real-time communication", "Database integration"],
    type: "Education Platform"
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-up hover-scale" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              {/* Project Image with Overlay */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <img 
                  src={project.logo} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Type Badge - Floating */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full text-primary text-sm font-medium shadow-lg">
                  <Smartphone size={12} />
                  {project.type}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.link && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" 
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      View App
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    onClick={() => window.open('https://github.com/shakeebklab', '_blank')}
                  >
                    <Github size={14} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Projects;