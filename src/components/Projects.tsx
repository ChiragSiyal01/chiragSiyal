import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "YouTube SEO SaaS Tool",
      description:
        "A full-stack application designed for content creators to optimize their YouTube videos for better discoverability and engagement.",
      tech: ["Spring Boot", "Thymeleaf", "YouTube Data API v3", "RESTful APIs", "MySQL"],
      features: [
        "Backend built with Spring Boot for robust API handling",
        "Frontend using Thymeleaf for dynamic server-side rendering",
        "Integration with YouTube Data API v3 for real-time metadata and tag analysis",
        "Helps creators improve video SEO and reach wider audiences",
      ],
      github: "https://github.com/ChiragSiyal01",
      type: "Full-Stack Application",
    },
    {
      title: "Employee Management REST API",
      description:
        "A production-ready backend system for managing employee data with comprehensive CRUD operations and security features.",
      tech: ["Java", "Spring Boot", "MySQL", "JWT", "AWS EC2", "NGINX"],
      features: [
        "Complete CRUD operations for employee management",
        "Role-based access control with JWT authentication",
        "MySQL database for persistent data storage",
        "Deployed on AWS EC2 with NGINX as reverse proxy",
        "Production-ready architecture with security best practices",
      ],
      github: "https://github.com/ChiragSiyal01",
      type: "Backend API",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications showcasing backend development and cloud deployment expertise
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-8 bg-card border-border hover:border-foreground/20 transition-all duration-300 hover:scale-[1.02] group animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-accent text-foreground text-sm rounded-full">
                        {project.type}
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-foreground mt-1 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent text-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center animate-fade-in">
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent"
              onClick={() => window.open("https://github.com/ChiragSiyal01", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
