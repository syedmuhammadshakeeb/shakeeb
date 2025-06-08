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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="glass rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Project Logo */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-6">
                <img src={project.logo} alt={project.title} className="max-w-full max-h-full object-fill" />
              </div>

              <div className="p-6">
                {/* Project Type Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-primary text-sm font-medium mb-4">
                  <Smartphone size={14} />
                  {project.type}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, idx) => <span key={idx} className="px-2 py-1 bg-background/50 text-foreground/80 rounded text-xs border border-primary/20">
                        {feature}
                      </span>)}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-secondary mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => <span key={idx} className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs">
                        {tech}
                      </span>)}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.link && <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/25" onClick={() => window.open(project.link, '_blank')}>
                      <ExternalLink size={16} className="mr-2" />
                      View App
                    </Button>}
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;