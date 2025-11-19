import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profilePic from "@/assets/profile-pic.jpg";

const Hero = () => {
  const skills = ["Java", "Spring Boot", "AWS", "MySQL", "Linux", "REST APIs"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      {/* Animated Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-medium">Hi There,</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              I am <span className="text-primary">Chirag Siyal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Java Backend Developer • AWS Cloud Enthusiast • Linux Administrator
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Computer Science Engineering student passionate about building scalable backend systems
              and cloud architectures. Currently seeking Backend/Cloud internships.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card border border-border rounded-full text-foreground text-sm font-medium hover:bg-accent hover:scale-105 transition-all duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-accent"
                onClick={() => window.open("https://github.com/ChiragSiyal01", "_blank")}
              >
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ChiragSiyal01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/chirag-siyal-3b3986249"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:siyalchirag80@gmail.com"
                className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/50 rounded-full blur-2xl group-hover:bg-accent/70 transition-all duration-300" />
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                  <img
                    src={profilePic}
                    alt="Chirag Siyal"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/50 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-foreground" />
      </div>
    </section>
  );
};

export default Hero;
