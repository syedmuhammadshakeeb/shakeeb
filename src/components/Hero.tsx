
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Profile Picture */}
          <div className="mb-8 mt-20 pt-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-secondary p-1 animate-glow">
              <img
                src="/lovable-uploads/d79037fe-31fa-4b28-9fa9-71b426345a98.png"
                alt="Syed Muhammad Shakeeb"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Syed Muhammad</span>
            <br />
            <span className="text-foreground">Shakeeb</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Flutter Developer | App Innovator | UI/UX Enthusiast
          </h2>

          <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Driven developer with strong aptitude for problem-solving and innovation. 
            Demonstrates proficiency in coding languages and teamwork, combined with excellent communication skills.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-8">
            <Button
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
