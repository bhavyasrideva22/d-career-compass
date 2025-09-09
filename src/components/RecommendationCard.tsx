import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

interface RecommendationCardProps {
  recommendation: {
    decision: "Yes" | "Maybe" | "No";
    confidence: number;
    strengths: string[];
    weaknesses: string[];
    nextSteps: string[];
  };
  decision: "Yes" | "Maybe" | "No";
}

export const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const getDecisionIcon = () => {
    switch (recommendation.decision) {
      case "Yes": return <CheckCircle className="h-6 w-6 text-success" />;
      case "Maybe": return <AlertCircle className="h-6 w-6 text-warning" />;
      case "No": return <XCircle className="h-6 w-6 text-destructive" />;
    }
  };

  const getDecisionColor = () => {
    switch (recommendation.decision) {
      case "Yes": return "success";
      case "Maybe": return "warning"; 
      case "No": return "destructive";
    }
  };

  return (
    <Card className="p-6 shadow-card border-border/50">
      <div className="flex items-center space-x-3 mb-6">
        {getDecisionIcon()}
        <h3 className="text-xl font-bold">Recommendation Details</h3>
      </div>

      {/* Strengths */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3 text-success">Your Strengths</h4>
        <div className="space-y-2">
          {recommendation.strengths.length > 0 ? (
            recommendation.strengths.map((strength, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                <span className="text-sm">{strength}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground italic">No specific strengths identified in this assessment.</p>
          )}
        </div>
      </div>

      {/* Areas for Improvement */}
      {recommendation.weaknesses.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-warning">Areas for Development</h4>
          <div className="space-y-2">
            {recommendation.weaknesses.map((weakness, index) => (
              <div key={index} className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-warning flex-shrink-0" />
                <span className="text-sm">{weakness}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Steps */}
      <div>
        <h4 className="font-semibold mb-3">Recommended Next Steps</h4>
        <div className="space-y-3">
          {recommendation.nextSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Badge variant="outline" className="flex-shrink-0 mt-0.5">
                {index + 1}
              </Badge>
              <span className="text-sm">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};