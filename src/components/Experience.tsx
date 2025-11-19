import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TBCE Solution",
      role: "Trainee",
      period: "Sep 2025 - Present",
      type: "Current Position",
      highlights: [
        "Gaining hands-on experience with AWS Cloud services including EC2, S3, IAM, and VPC",
        "Working with Linux systems for server administration and automation",
        "Developing skills in cloud computing technologies and best practices",
        "Learning infrastructure management and deployment strategies",
      ],
    },
    {
      company: "Humming Byte Technologies",
      role: "Software Engineer Intern",
      period: "Jan 2025 - Jun 2025",
      type: "Internship",
      highlights: [
        "Worked on full development lifecycle using Java and Spring Boot framework",
        "Developed and maintained RESTful APIs with relational database integration",
        "Delivered feature enhancements that improved application performance and user experience",
        "Participated in Agile sprints, daily stand-ups, and sprint planning sessions",
        "Contributed to code reviews and technical documentation, ensuring high-quality and maintainable code",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
              {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-border hidden md:block" />
                )}

                <Card className="p-6 md:p-8 bg-card border-border hover:border-foreground/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-accent rounded-full w-fit">
                        <Briefcase className="h-8 w-8 text-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="text-2xl font-bold">{exp.company}</h3>
                          <span className="px-3 py-1 bg-accent text-foreground text-sm rounded-full w-fit">
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{exp.role}</h4>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground">
                            <span className="text-foreground mt-1.5 flex-shrink-0">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
