import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "siyalchirag80@gmail.com",
      link: "mailto:siyalchirag80@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9350438274",
      link: "tel:+919350438274",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "chirag-siyal-3b3986249",
      link: "https://linkedin.com/in/chirag-siyal-3b3986249",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ChiragSiyal01",
      link: "https://github.com/ChiragSiyal01",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm actively seeking Backend/Cloud Developer internship opportunities. 
              Let's connect and discuss how I can contribute to your team!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={contact.label}
                className="p-6 bg-card border-border hover:border-foreground/20 transition-all duration-300 hover:scale-105 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={contact.link}
                  target={contact.link.startsWith("http") ? "_blank" : undefined}
                  rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4"
                >
                  <div className="p-4 bg-accent rounded-full group-hover:bg-muted transition-colors duration-300">
                    <contact.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium text-lg">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-to-br from-accent/20 to-muted/20 border-border animate-fade-in">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Ready to Work Together?</h3>
                <p className="text-muted-foreground">
                  I'm open to internship opportunities in Backend Development, Cloud Computing, and DevOps.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.location.href = "mailto:siyalchirag80@gmail.com"}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-accent"
                  onClick={() => window.open("https://linkedin.com/in/chirag-siyal-3b3986249", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Card>

          {/* Location */}
          <div className="text-center text-muted-foreground animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Based in India • Open to Remote Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
