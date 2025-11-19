import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Chirag Siyal. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/ChiragSiyal01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-foreground/70 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/chirag-siyal-3b3986249"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-foreground/70 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:siyalchirag80@gmail.com"
              className="p-2 hover:text-foreground/70 transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Tag */}
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-foreground">❤</span> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
