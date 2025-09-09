import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { assessmentQuestions } from "@/data/questions";
import { calculateResults } from "@/utils/scoring";

interface Answer {
  questionId: string;
  value: number;
  category: string;
}

const Assessment = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const sections = [
    { name: "Psychometric", questions: assessmentQuestions.psychometric, color: "primary" },
    { name: "Technical", questions: assessmentQuestions.technical, color: "accent" },
    { name: "WISCAR", questions: assessmentQuestions.wiscar, color: "success" }
  ];

  const currentSectionData = sections[currentSection];
  const currentQuestionData = currentSectionData.questions[currentQuestion];
  const totalQuestions = sections.reduce((sum, section) => sum + section.questions.length, 0);
  const answeredQuestions = answers.length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const answer: Answer = {
        questionId: currentQuestionData.id,
        value: parseInt(selectedAnswer),
        category: currentQuestionData.category
      };

      setAnswers(prev => {
        const existingIndex = prev.findIndex(a => a.questionId === currentQuestionData.id);
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = answer;
          return updated;
        }
        return [...prev, answer];
      });

      setSelectedAnswer("");

      // Navigate to next question or section
      if (currentQuestion < currentSectionData.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else if (currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
        setCurrentQuestion(0);
      } else {
        // Assessment complete - navigate to results
        const results = calculateResults([...answers, answer]);
        navigate("/results", { state: { results, answers: [...answers, answer] } });
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
      setCurrentQuestion(sections[currentSection - 1].questions.length - 1);
    }

    // Load previous answer if exists
    if (currentQuestion > 0 || currentSection > 0) {
      const prevQuestionData = currentQuestion > 0 
        ? currentSectionData.questions[currentQuestion - 1]
        : sections[currentSection - 1].questions[sections[currentSection - 1].questions.length - 1];
      
      const existingAnswer = answers.find(a => a.questionId === prevQuestionData.id);
      setSelectedAnswer(existingAnswer ? existingAnswer.value.toString() : "");
    }
  };

  const canGoNext = selectedAnswer !== "";
  const canGoPrevious = currentSection > 0 || currentQuestion > 0;

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <Badge variant="secondary" className="px-4 py-2">
              Question {answeredQuestions + 1} of {totalQuestions}
            </Badge>
          </div>
          
          <Progress value={progress} className="w-full h-2 mb-6" />
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            {sections.map((section, index) => (
              <div key={section.name} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  index < currentSection 
                    ? "bg-success text-background" 
                    : index === currentSection 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                }`}>
                  {index < currentSection ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                <span className={`ml-2 font-medium ${
                  index === currentSection ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {section.name}
                </span>
                {index < sections.length - 1 && (
                  <div className="w-8 h-0.5 bg-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-card border-border/50 mb-8">
          <div className="text-center mb-8">
            <Badge 
              variant="secondary" 
              className={`mb-4 px-4 py-2 bg-${currentSectionData.color}/10 text-${currentSectionData.color}`}
            >
              {currentSectionData.name} Assessment
            </Badge>
            <h2 className="text-2xl font-bold mb-4">
              {currentQuestionData.question}
            </h2>
            {currentQuestionData.description && (
              <p className="text-muted-foreground">
                {currentQuestionData.description}
              </p>
            )}
          </div>

          <RadioGroup 
            value={selectedAnswer} 
            onValueChange={handleAnswerSelect}
            className="space-y-4"
          >
            {currentQuestionData.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label 
                  htmlFor={`option-${index}`} 
                  className="flex-1 cursor-pointer text-left"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className="px-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canGoNext}
            className="px-6 bg-gradient-primary hover:shadow-glow"
          >
            {currentSection === sections.length - 1 && currentQuestion === currentSectionData.questions.length - 1 
              ? "View Results" 
              : "Next"
            }
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;