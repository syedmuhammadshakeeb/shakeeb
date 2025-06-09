
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/syedmuhammadshakeeb",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/syedshakeeb01/",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:shakeeb12a@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-2xl font-bold gradient-text">
            Syed Muhammad Shakeeb
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary hover:shadow-lg hover:shadow-primary/25 hover:scale-110 transition-all duration-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Syed Muhammad Shakeeb. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
