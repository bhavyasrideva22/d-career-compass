import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface SkillGapMapProps {
  results: {
    psychometric: { overall: number };
    technical: { overall: number; aptitude: number; prerequisite: number; domainKnowledge: number };
    wiscar: { skill: number; cognitive: number; ability: number };
  };
}

export const SkillGapMap = ({ results }: SkillGapMapProps) => {
  const skillAreas = [
    {
      name: "3D Fundamentals",
      current: results.technical.domainKnowledge,
      target: 85,
      priority: "High",
      description: "Core 3D modeling, texturing, and rendering concepts"
    },
    {
      name: "Technical Skills",
      current: results.technical.prerequisite,
      target: 80,
      priority: "High", 
      description: "Math, programming logic, and software proficiency"
    },
    {
      name: "Problem Solving",
      current: results.technical.aptitude,
      target: 75,
      priority: "Medium",
      description: "Analytical thinking and logical reasoning"
    },
    {
      name: "Learning Ability",
      current: results.wiscar.ability,
      target: 80,
      priority: "Medium",
      description: "Adaptability and growth mindset"
    },
    {
      name: "Creative Foundation",
      current: results.wiscar.skill,
      target: 70,
      priority: "Low",
      description: "Artistic skills and creative software experience"
    }
  ];

  const getGapIcon = (current: number, target: number) => {
    const gap = target - current;
    if (gap > 20) return <TrendingUp className="h-4 w-4 text-destructive" />;
    if (gap > 10) return <TrendingUp className="h-4 w-4 text-warning" />;
    if (gap < -5) return <TrendingDown className="h-4 w-4 text-success" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "warning";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-success mb-1">
            {skillAreas.filter(skill => skill.current >= skill.target).length}
          </div>
          <div className="text-sm text-muted-foreground">Skills At Target</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-warning mb-1">
            {skillAreas.filter(skill => skill.target - skill.current > 0 && skill.target - skill.current <= 20).length}
          </div>
          <div className="text-sm text-muted-foreground">Skills Developing</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-destructive mb-1">
            {skillAreas.filter(skill => skill.target - skill.current > 20).length}
          </div>
          <div className="text-sm text-muted-foreground">Skills Need Focus</div>
        </Card>
      </div>

      <div className="space-y-4">
        {skillAreas.map((skill, index) => {
          const gap = skill.target - skill.current;
          const gapPercentage = Math.abs(gap);
          
          return (
            <Card key={index} className="p-6 shadow-card border-border/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold">{skill.name}</h4>
                    {getGapIcon(skill.current, skill.target)}
                    <Badge variant={getPriorityColor(skill.priority) as any}>
                      {skill.priority} Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Current Level</span>
                  <span className="font-medium">{skill.current}%</span>
                </div>
                <Progress value={skill.current} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Target Level</span>
                  <span className="font-medium">{skill.target}%</span>
                </div>
                <Progress value={skill.target} className="h-1 opacity-50" />
                
                <div className="flex justify-between items-center text-sm pt-2 border-t border-border">
                  <span className={gap > 0 ? "text-warning" : "text-success"}>
                    {gap > 0 ? `${gapPercentage}% gap to close` : "Target achieved!"}
                  </span>
                  <span className="text-muted-foreground">
                    {gap > 20 ? "3-6 months" : gap > 10 ? "1-3 months" : gap > 0 ? "2-4 weeks" : "Maintain"}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};