import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Download, Share2, TrendingUp, AlertCircle, CheckCircle, Brain, Target, Zap } from "lucide-react";
import { RadarChart } from "@/components/RadarChart";
import { RecommendationCard } from "@/components/RecommendationCard";
import { SkillGapMap } from "@/components/SkillGapMap";

interface Results {
  psychometric: {
    interestScore: number;
    personalityFit: number;
    cognitiveStyle: number;
    motivation: number;
    overall: number;
  };
  technical: {
    aptitude: number;
    prerequisite: number;
    domainKnowledge: number;
    overall: number;
  };
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
    overall: number;
  };
  recommendation: {
    decision: "Yes" | "Maybe" | "No";
    confidence: number;
    strengths: string[];
    weaknesses: string[];
    nextSteps: string[];
  };
  careerPaths: Array<{
    title: string;
    match: number;
    description: string;
    salary: string;
    demand: string;
  }>;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results } = location.state as { results: Results };

  const getRecommendationColor = (decision: string) => {
    switch (decision) {
      case "Yes": return "success";
      case "Maybe": return "warning";
      case "No": return "destructive";
      default: return "muted";
    }
  };

  const getRecommendationIcon = (decision: string) => {
    switch (decision) {
      case "Yes": return CheckCircle;
      case "Maybe": return AlertCircle;
      case "No": return AlertCircle;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share Results
              </Button>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Your Assessment Results</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analysis of your readiness and alignment for 3D Experience Design
          </p>
        </div>

        {/* Main Recommendation */}
        <Card className="p-8 shadow-card border-border/50 mb-8">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              results.recommendation.decision === "Yes" 
                ? "bg-success/20 text-success" 
                : results.recommendation.decision === "Maybe"
                  ? "bg-warning/20 text-warning"
                  : "bg-destructive/20 text-destructive"
            }`}>
              {(() => {
                const Icon = getRecommendationIcon(results.recommendation.decision);
                return <Icon className="h-8 w-8" />;
              })()}
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              {results.recommendation.decision === "Yes" && "You're Ready for 3D Experience Design!"}
              {results.recommendation.decision === "Maybe" && "You Have Potential - With Some Development"}
              {results.recommendation.decision === "No" && "Consider Alternative Paths First"}
            </h2>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-muted-foreground">Confidence Score</span>
              <div className="flex items-center space-x-2">
                <Progress value={results.recommendation.confidence} className="w-32 h-2" />
                <span className="font-bold text-lg">{results.recommendation.confidence}%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center space-x-4 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Psychological Fit</h3>
                <div className="text-2xl font-bold text-primary">{results.psychometric.overall}%</div>
              </div>
            </div>
            <Progress value={results.psychometric.overall} className="mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Interest</span>
                <span>{results.psychometric.interestScore}%</span>
              </div>
              <div className="flex justify-between">
                <span>Personality</span>
                <span>{results.psychometric.personalityFit}%</span>
              </div>
              <div className="flex justify-between">
                <span>Motivation</span>
                <span>{results.psychometric.motivation}%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-lg font-semibold">Technical Readiness</h3>
                <div className="text-2xl font-bold text-accent">{results.technical.overall}%</div>
              </div>
            </div>
            <Progress value={results.technical.overall} className="mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Aptitude</span>
                <span>{results.technical.aptitude}%</span>
              </div>
              <div className="flex justify-between">
                <span>Prerequisites</span>
                <span>{results.technical.prerequisite}%</span>
              </div>
              <div className="flex justify-between">
                <span>Domain Knowledge</span>
                <span>{results.technical.domainKnowledge}%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center space-x-4 mb-4">
              <TrendingUp className="h-8 w-8 text-success" />
              <div>
                <h3 className="text-lg font-semibold">WISCAR Analysis</h3>
                <div className="text-2xl font-bold text-success">{results.wiscar.overall}%</div>
              </div>
            </div>
            <Progress value={results.wiscar.overall} className="mb-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Will</span>
                <span>{results.wiscar.will}%</span>
              </div>
              <div className="flex justify-between">
                <span>Skill</span>
                <span>{results.wiscar.skill}%</span>
              </div>
              <div className="flex justify-between">
                <span>Real-World Fit</span>
                <span>{results.wiscar.realWorld}%</span>
              </div>
            </div>
          </Card>
        </div>

        {/* WISCAR Radar Chart */}
        <Card className="p-8 shadow-card border-border/50 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">WISCAR Framework Analysis</h3>
          <RadarChart data={results.wiscar} />
        </Card>

        {/* Recommendations and Career Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <RecommendationCard 
            recommendation={results.recommendation}
            decision={results.recommendation.decision}
          />
          
          <Card className="p-6 shadow-card border-border/50">
            <h3 className="text-xl font-bold mb-6">Top Career Matches</h3>
            <div className="space-y-4">
              {results.careerPaths.slice(0, 4).map((career, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{career.title}</h4>
                    <Badge variant="secondary">{career.match}% match</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{career.description}</p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Avg. Salary: {career.salary}</span>
                    <span>Demand: {career.demand}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skill Gap Analysis */}
        <Card className="p-8 shadow-card border-border/50 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Skill Development Roadmap</h3>
          <SkillGapMap results={results} />
        </Card>

        {/* Action Steps */}
        <Card className="p-8 shadow-card border-border/50 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Take Action?</h3>
          <p className="text-muted-foreground mb-8">
            Based on your results, here are the recommended next steps to advance your 3D design career
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              <Zap className="mr-2 h-5 w-5" />
              View Learning Path
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Retake Assessment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;