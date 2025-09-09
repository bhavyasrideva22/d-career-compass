interface Answer {
  questionId: string;
  value: number;
  category: string;
}

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

export const calculateResults = (answers: Answer[]): Results => {
  // Helper function to calculate average score for a category
  const getScoreByCategory = (category: string): number => {
    const categoryAnswers = answers.filter(a => a.category === category);
    if (categoryAnswers.length === 0) return 0;
    
    const sum = categoryAnswers.reduce((acc, answer) => acc + answer.value, 0);
    return Math.round((sum / categoryAnswers.length) * 20); // Convert 0-4 scale to 0-100
  };

  // Calculate psychometric scores
  const interestScore = getScoreByCategory("interest");
  const personalityFit = getScoreByCategory("personality");
  const cognitiveStyle = getScoreByCategory("cognitive_style");
  const motivation = getScoreByCategory("motivation");
  const psychometricOverall = Math.round((interestScore + personalityFit + cognitiveStyle + motivation) / 4);

  // Calculate technical scores
  const aptitude = getScoreByCategory("aptitude");
  const prerequisite = getScoreByCategory("prerequisite");
  const domainKnowledge = getScoreByCategory("domain_knowledge");
  const technicalOverall = Math.round((aptitude + prerequisite + domainKnowledge) / 3);

  // Calculate WISCAR scores
  const will = getScoreByCategory("will");
  const interest = getScoreByCategory("interest");
  const skill = getScoreByCategory("skill");
  const cognitive = getScoreByCategory("cognitive");
  const ability = getScoreByCategory("ability");
  const realWorld = getScoreByCategory("real_world");
  const wiscarOverall = Math.round((will + interest + skill + cognitive + ability + realWorld) / 6);

  // Calculate overall readiness score
  const overallScore = Math.round((psychometricOverall * 0.3 + technicalOverall * 0.4 + wiscarOverall * 0.3));

  // Generate recommendation
  let decision: "Yes" | "Maybe" | "No";
  let confidence: number;
  let strengths: string[] = [];
  let weaknesses: string[] = [];
  let nextSteps: string[] = [];

  if (overallScore >= 75) {
    decision = "Yes";
    confidence = Math.min(95, overallScore + Math.random() * 10);
  } else if (overallScore >= 50) {
    decision = "Maybe";
    confidence = Math.min(85, overallScore + Math.random() * 15);
  } else {
    decision = "No";
    confidence = Math.min(75, overallScore + Math.random() * 20);
  }

  // Generate strengths based on high scores
  if (interestScore >= 70) strengths.push("Strong natural interest in 3D design");
  if (motivation >= 70) strengths.push("High intrinsic motivation and drive");
  if (aptitude >= 70) strengths.push("Excellent problem-solving and analytical skills");
  if (personalityFit >= 70) strengths.push("Personality traits align well with creative work");
  if (will >= 70) strengths.push("Strong commitment and willingness to invest time");
  if (skill >= 70) strengths.push("Solid technical foundation to build upon");

  // Generate weaknesses based on low scores
  if (technicalOverall < 50) weaknesses.push("Technical skills need significant development");
  if (domainKnowledge < 40) weaknesses.push("Limited knowledge of 3D design fundamentals");
  if (motivation < 50) weaknesses.push("Motivation levels may need strengthening");
  if (realWorld < 50) weaknesses.push("Career awareness and industry knowledge needs improvement");
  if (cognitive < 50) weaknesses.push("Problem-solving approach could be enhanced");

  // Generate next steps based on decision and weak areas
  if (decision === "Yes") {
    nextSteps.push("Begin with foundational 3D modeling courses");
    nextSteps.push("Choose a specialization (game design, architectural visualization, etc.)");
    nextSteps.push("Build a portfolio with personal projects");
    nextSteps.push("Join 3D design communities and seek mentorship");
  } else if (decision === "Maybe") {
    if (technicalOverall < 60) nextSteps.push("Focus on building technical prerequisite skills first");
    if (domainKnowledge < 50) nextSteps.push("Take introductory courses in 3D design fundamentals");
    if (motivation < 60) nextSteps.push("Explore different aspects of 3D design to find your passion");
    nextSteps.push("Reassess after 3-6 months of focused learning");
  } else {
    nextSteps.push("Consider related fields like UI/UX design or graphic design");
    nextSteps.push("Develop stronger foundational math and problem-solving skills");
    nextSteps.push("Explore whether 3D design aligns with your true interests");
    nextSteps.push("Consider professional career counseling");
  }

  // Generate career paths with match scores
  const careerPaths = [
    {
      title: "3D Environment Artist",
      match: Math.max(60, Math.min(95, overallScore + (interestScore * 0.3) + (skill * 0.2))),
      description: "Design immersive game worlds and VR experiences",
      salary: "$55,000 - $85,000",
      demand: "High"
    },
    {
      title: "UX Designer (AR/VR)",
      match: Math.max(55, Math.min(90, overallScore + (personalityFit * 0.3) + (cognitive * 0.2))),
      description: "Create user-centered immersive experiences",
      salary: "$70,000 - $120,000",
      demand: "Very High"
    },
    {
      title: "3D Animator",
      match: Math.max(50, Math.min(88, overallScore + (interestScore * 0.4) + (motivation * 0.1))),
      description: "Bring characters and objects to life through animation",
      salary: "$50,000 - $80,000",
      demand: "Moderate"
    },
    {
      title: "Architectural Visualizer",
      match: Math.max(45, Math.min(85, overallScore + (cognitive * 0.3) + (skill * 0.3))),
      description: "Create photorealistic renderings of architectural designs",
      salary: "$45,000 - $75,000",
      demand: "Moderate"
    },
    {
      title: "Technical Artist",
      match: Math.max(40, Math.min(92, overallScore + (aptitude * 0.4) + (skill * 0.3))),
      description: "Bridge the gap between art and programming in game development",
      salary: "$75,000 - $130,000",
      demand: "High"
    }
  ].sort((a, b) => b.match - a.match);

  return {
    psychometric: {
      interestScore,
      personalityFit,
      cognitiveStyle,
      motivation,
      overall: psychometricOverall
    },
    technical: {
      aptitude,
      prerequisite,
      domainKnowledge,
      overall: technicalOverall
    },
    wiscar: {
      will,
      interest,
      skill,
      cognitive,
      ability,
      realWorld,
      overall: wiscarOverall
    },
    recommendation: {
      decision,
      confidence: Math.round(confidence),
      strengths,
      weaknesses,
      nextSteps
    },
    careerPaths
  };
};