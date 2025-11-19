import { Card } from "@/components/ui/card";
import { Code2, Cloud, Database, Server, Network, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "RESTful APIs"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, IAM, VPC)", "CloudWatch", "Docker (Learning)"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "Database Design", "SQL Optimization"],
    },
    {
      icon: Server,
      title: "System Administration",
      skills: ["Linux", "System Administration", "Server Management"],
    },
    {
      icon: Network,
      title: "Networking",
      skills: ["Network Protocols", "VPC Configuration", "Network Security"],
    },
    {
      icon: Terminal,
      title: "Tools & Technologies",
      skills: ["Git", "NGINX", "CI/CD (Learning)", "Terraform (Learning)"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable backend systems and cloud infrastructure
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-6 bg-card border-border hover:border-foreground/20 transition-all duration-300 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-muted transition-colors duration-300">
                      <category.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Skills */}
          <div className="mt-12 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Java",
                "Spring Boot",
                "MySQL",
                "REST APIs",
                "AWS Cloud",
                "Linux",
                "Backend Architecture",
                "Networking",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:bg-accent transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
