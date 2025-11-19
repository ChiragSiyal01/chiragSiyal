import { Card } from "@/components/ui/card";
import { GraduationCap, Code2, Cloud } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate and detail-oriented Computer Science Engineering student specializing in{" "}
              <span className="text-primary font-medium">Java Backend Development</span>,{" "}
              <span className="text-primary font-medium">AWS Cloud</span>, and{" "}
              <span className="text-primary font-medium">Linux System Administration</span>. My focus lies in
              building scalable, secure, and high-performance backend architectures that solve real-world problems
              with efficiency and reliability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I am actively seeking opportunities as a <span className="text-primary font-medium">Backend/Cloud
              Developer Intern</span> where I can contribute my skills to impactful projects, collaborate with
              experienced engineers, and continue to grow both technically and professionally.
            </p>
          </Card>

          {/* Currently Exploring */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-center">Currently Exploring</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Code2, title: "Docker", desc: "Container orchestration" },
                { icon: Cloud, title: "Terraform", desc: "Infrastructure as Code" },
                { icon: Code2, title: "CI/CD", desc: "Automated pipelines" },
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className="p-6 bg-card border-border hover:border-foreground/20 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-4 bg-accent rounded-full group-hover:bg-muted transition-colors duration-300">
                      <item.icon className="h-8 w-8 text-foreground" />
                    </div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <Card className="p-8 bg-card border-border hover:border-foreground/20 transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent rounded-full">
                <GraduationCap className="h-8 w-8 text-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <h4 className="text-lg font-semibold">
                  B.Tech in Computer Science Engineering
                </h4>
                <p className="text-muted-foreground">NGF College of Engineering & Technology</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Affiliated with J.C. Bose University of Science and Technology, YMCA
                </p>
                <p className="text-sm text-muted-foreground mt-1">2022 - 2026</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
