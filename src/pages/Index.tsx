import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Brain, Zap, Target, TrendingUp, Users, Award } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative px-6 py-20 mx-auto max-w-7xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Career Assessment Platform
            </Badge>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-primary bg-clip-text text-transparent">
              3D Experience Designer
            </h1>
            <h2 className="mb-8 text-xl font-semibold text-muted-foreground sm:text-2xl">
              Comprehensive Readiness & Career Alignment Assessment
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground">
              Discover your potential in 3D Experience Design through our scientifically-backed assessment. 
              Evaluate your psychological fit, technical readiness, and career alignment in just 25 minutes.
            </p>
            <Button
              onClick={handleStartAssessment}
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="mr-2 h-5 w-5" />
              Start Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* What You'll Discover Section */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">What You'll Discover</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive assessment evaluates multiple dimensions of your readiness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 border-border/50">
            <Brain className="h-12 w-12 text-primary mb-6" />
            <h4 className="text-xl font-semibold mb-4">Psychological Fit</h4>
            <p className="text-muted-foreground">
              Assess your personality traits, motivation, and cognitive style alignment with 3D design work.
            </p>
          </Card>
          
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 border-border/50">
            <Target className="h-12 w-12 text-accent mb-6" />
            <h4 className="text-xl font-semibold mb-4">Technical Readiness</h4>
            <p className="text-muted-foreground">
              Evaluate your current knowledge of 3D concepts, tools, and mathematical foundations.
            </p>
          </Card>
          
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 border-border/50">
            <TrendingUp className="h-12 w-12 text-success mb-6" />
            <h4 className="text-xl font-semibold mb-4">WISCAR Analysis</h4>
            <p className="text-muted-foreground">
              Comprehensive evaluation of Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment.
            </p>
          </Card>
        </div>
      </div>

      {/* Career Paths Section */}
      <div className="px-6 py-20 mx-auto max-w-7xl bg-card/30 rounded-3xl">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Career Paths You'll Explore</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover various career opportunities in the growing 3D design industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "3D Environment Artist", desc: "Design immersive game worlds and VR experiences", icon: Users },
            { title: "UX Designer (AR/VR)", desc: "Create user-centered immersive experiences", icon: Target },
            { title: "Virtual Reality Developer", desc: "Build interactive 3D applications and simulations", icon: Zap },
            { title: "Simulation Engineer", desc: "Develop realistic digital twin environments", icon: Award }
          ].map((career, index) => (
            <Card key={index} className="p-6 shadow-card border-border/50">
              <div className="flex items-start space-x-4">
                <career.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">{career.title}</h4>
                  <p className="text-muted-foreground">{career.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Assessment Overview */}
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Assessment Overview</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured evaluation designed by industry experts and career psychologists
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Psychometric Evaluation</h4>
                <p className="text-muted-foreground">
                  Interest scales, personality fit assessment, cognitive style analysis, and motivation measurement
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Technical Assessment</h4>
                <p className="text-muted-foreground">
                  General aptitude testing, prerequisite knowledge evaluation, and domain-specific quizzes
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-success rounded-full flex items-center justify-center text-background font-bold">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Comprehensive Results</h4>
                <p className="text-muted-foreground">
                  Personalized recommendations, skill gap mapping, and customized learning pathways
                </p>
              </div>
            </div>
          </div>
          
          <Card className="p-8 shadow-card border-border/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground mb-6">Minutes</div>
              <div className="space-y-4 text-left">
                <div className="flex justify-between">
                  <span>Psychometric</span>
                  <span className="text-muted-foreground">10 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical</span>
                  <span className="text-muted-foreground">10 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Results & Analysis</span>
                  <span className="text-muted-foreground">5 min</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 mx-auto max-w-7xl text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Ready to Discover Your 3D Design Potential?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of aspiring designers who have used our assessment to guide their career journey
          </p>
          <Button
            onClick={handleStartAssessment}
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="mr-2 h-5 w-5" />
            Begin Your Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;