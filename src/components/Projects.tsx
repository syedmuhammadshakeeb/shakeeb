import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [{
    title: "Siin Live Shopping App",
    description: "Real-time shopping application featuring live auctions, streaming capabilities, and interactive user experiences.",
    features: ["Real-time shopping", "Live auctions", "Live streaming", "Interactive UI"],
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC", "Real-time APIs"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.siinshop.app",
    appStoreLink: null
  }, {
    title: "Bahrain Tourism App", 
    description: "Comprehensive tourist planning tool with Google Maps integration and offline support using Hive database.",
    features: ["Tourist planning", "Google Maps integration", "Offline support", "Local attractions"],
    technologies: ["Flutter", "Google Maps API", "Hive", "REST APIs", "Geolocation"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.btea.tg",
    appStoreLink: null
  }, {
    title: "RCSI AI Sim App",
    description: "Advanced simulated clinical AI patient training platform with real-time interaction and comprehensive feedback systems.",
    features: ["AI simulation", "Clinical training", "Real-time interaction", "Feedback system"],
    technologies: ["Flutter", "AI/ML APIs", "Real-time communication", "Database integration"],
    playStoreLink: null,
    appStoreLink: null
  }];

  return (
    <section id="projects" className="py-20">
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

                {/* Store Buttons */}
                <div className="pt-4 flex flex-col gap-3">
                  {project.playStoreLink && (
                    <Button 
                      className="w-full bg-[#34A853] hover:bg-[#2d9249] text-white shadow-lg hover:shadow-xl transition-all duration-300 gap-2" 
                      onClick={() => window.open(project.playStoreLink!, '_blank')}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                      </svg>
                      Google Play
                    </Button>
                  )}
                  {project.appStoreLink && (
                    <Button 
                      className="w-full bg-[#0D0D0D] hover:bg-[#1a1a1a] text-white shadow-lg hover:shadow-xl transition-all duration-300 gap-2" 
                      onClick={() => window.open(project.appStoreLink!, '_blank')}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </Button>
                  )}
                  {!project.playStoreLink && !project.appStoreLink && (
                    <div className="text-center text-muted-foreground text-sm py-2">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;