export interface Question {
  id: string;
  question: string;
  description?: string;
  options: string[];
  category: string;
  construct: string;
}

export const assessmentQuestions = {
  psychometric: [
    {
      id: "psych_1",
      question: "How excited do you feel when you see impressive 3D visualizations or virtual environments?",
      description: "This measures your natural interest and emotional response to 3D content.",
      options: [
        "Not excited at all - I don't really notice or care",
        "Slightly interested - I appreciate good visuals but don't think much about them",
        "Moderately excited - I enjoy good 3D work and sometimes wonder how it's made",
        "Very excited - I love analyzing 3D environments and often think about the creation process",
        "Extremely excited - I get genuinely thrilled and inspired by excellent 3D design work"
      ],
      category: "interest",
      construct: "intrinsic_motivation"
    },
    {
      id: "psych_2", 
      question: "When working on creative projects, I prefer to:",
      description: "This assesses your creative work style and approach to problem-solving.",
      options: [
        "Follow detailed instructions and established procedures exactly",
        "Use guidelines but make small personal modifications",
        "Blend structured approaches with creative experimentation",
        "Start with loose guidelines and develop my own unique approach",
        "Work completely from scratch with full creative freedom"
      ],
      category: "personality",
      construct: "openness_creativity"
    },
    {
      id: "psych_3",
      question: "How do you typically handle complex, multi-step technical challenges?",
      description: "This evaluates your persistence and problem-solving approach.",
      options: [
        "I often get overwhelmed and avoid complex problems",
        "I try briefly but give up if it doesn't work quickly",
        "I work through systematically but sometimes get frustrated",
        "I persist through difficulties and usually find solutions",
        "I thrive on complex challenges and rarely give up"
      ],
      category: "motivation",
      construct: "grit_persistence"
    },
    {
      id: "psych_4",
      question: "When learning new software or technical skills, how do you prefer to approach it?",
      description: "This measures your learning style and adaptability.",
      options: [
        "I need extensive formal training before I feel comfortable",
        "I prefer structured tutorials with step-by-step guidance",
        "I like a mix of tutorials and hands-on experimentation",
        "I prefer to experiment first, then seek help when stuck",
        "I learn best by diving in and figuring things out independently"
      ],
      category: "cognitive_style",
      construct: "learning_preference"
    },
    {
      id: "psych_5",
      question: "How well do you think you can visualize and manipulate 3D objects in your mind?",
      description: "This assesses spatial reasoning abilities crucial for 3D design.",
      options: [
        "I struggle to visualize 3D objects mentally",
        "I can picture simple shapes but have difficulty with complex objects",
        "I can visualize moderately complex 3D scenes with some effort",
        "I'm quite good at mental 3D visualization and rotation",
        "I excel at visualizing complex 3D scenes and transformations"
      ],
      category: "cognitive_style",
      construct: "spatial_reasoning"
    },
    {
      id: "psych_6",
      question: "What motivates you most in your work or projects?",
      description: "This identifies your primary motivational drivers.",
      options: [
        "External recognition and rewards from others",
        "Meeting deadlines and completing assigned tasks",
        "Learning new skills and expanding my knowledge",
        "Creating something unique and expressing my creativity",
        "Solving complex problems and overcoming challenges"
      ],
      category: "motivation", 
      construct: "motivation_type"
    }
  ],
  
  technical: [
    {
      id: "tech_1",
      question: "What is the primary difference between vertices, edges, and faces in 3D modeling?",
      description: "This tests basic 3D geometry knowledge essential for any 3D work.",
      options: [
        "I'm not familiar with these terms",
        "They're all the same thing, just different names",
        "Vertices are points, but I'm unclear about edges and faces",
        "Vertices are points, edges connect vertices, faces are flat surfaces",
        "Vertices are points, edges are lines between vertices, faces are polygons formed by edges"
      ],
      category: "domain_knowledge",
      construct: "3d_fundamentals"
    },
    {
      id: "tech_2",
      question: "If you're looking at a 3D coordinate system, what happens when you increase the Y value?",
      description: "This tests understanding of 3D coordinate systems used in all 3D software.",
      options: [
        "I don't understand 3D coordinate systems",
        "The object moves left or right",
        "The object moves forward or backward", 
        "The object moves up or down (depends on the software)",
        "It depends on whether it's a right-handed or left-handed coordinate system"
      ],
      category: "prerequisite",
      construct: "math_spatial"
    },
    {
      id: "tech_3",
      question: "What is UV mapping in 3D modeling?",
      description: "This assesses knowledge of texturing concepts in 3D work.",
      options: [
        "I haven't heard of UV mapping",
        "It's a type of 3D modeling technique",
        "It's related to lighting in 3D scenes",
        "It's the process of applying 2D textures to 3D surfaces",
        "It's unwrapping 3D surfaces to create 2D texture coordinates"
      ],
      category: "domain_knowledge",
      construct: "texturing_concepts"
    },
    {
      id: "tech_4",
      question: "In logical reasoning: If all 3D artists use computers, and Sarah uses a computer, what can we conclude?",
      description: "This tests logical reasoning skills important for problem-solving.",
      options: [
        "Sarah is definitely a 3D artist",
        "Sarah is probably a 3D artist",
        "Sarah might or might not be a 3D artist",
        "Sarah is not a 3D artist",
        "There's not enough information"
      ],
      category: "aptitude",
      construct: "logical_reasoning"
    },
    {
      id: "tech_5",
      question: "What is the next number in this sequence: 2, 6, 18, 54, ?",
      description: "This tests pattern recognition and mathematical reasoning.",
      options: [
        "108",
        "126", 
        "162",
        "180",
        "216"
      ],
      category: "aptitude",
      construct: "pattern_recognition"
    },
    {
      id: "tech_6",
      question: "Which of these concepts is most important for creating realistic lighting in 3D scenes?",
      description: "This tests understanding of advanced 3D rendering concepts.",
      options: [
        "Polygon count",
        "Texture resolution",
        "Global illumination",
        "Animation keyframes",
        "Mesh topology"
      ],
      category: "domain_knowledge",
      construct: "rendering_concepts"
    }
  ],
  
  wiscar: [
    {
      id: "wiscar_1",
      question: "How many hours per week would you realistically commit to learning 3D design skills?",
      description: "Will - This measures your commitment and time investment willingness.",
      options: [
        "Less than 2 hours - I have very limited time",
        "2-5 hours - I can dedicate some regular time",
        "5-10 hours - I'm willing to make a moderate commitment",
        "10-20 hours - I'm ready to make it a significant priority",
        "20+ hours - I'm fully committed to intensive learning"
      ],
      category: "will",
      construct: "time_commitment"
    },
    {
      id: "wiscar_2",
      question: "How often do you find yourself browsing 3D art, game environments, or VR content in your free time?",
      description: "Interest - This measures genuine curiosity and natural engagement.",
      options: [
        "Never - I don't seek out this type of content",
        "Rarely - Only when it's shared by others",
        "Occasionally - A few times per month when I remember",
        "Regularly - Several times per week",
        "Frequently - Almost daily, I actively seek out new content"
      ],
      category: "interest",
      construct: "natural_engagement"
    },
    {
      id: "wiscar_3",
      question: "What is your current level of experience with creative or technical software?",
      description: "Skill - This assesses your baseline technical skill level.",
      options: [
        "Beginner - I mainly use basic applications like web browsers and word processors",
        "Some experience - I've used photo editing or basic design software occasionally",
        "Moderate - I'm comfortable with creative software like Photoshop or design tools",
        "Advanced - I have experience with professional creative or technical software",
        "Expert - I'm proficient in multiple complex software packages and learn new tools quickly"
      ],
      category: "skill",
      construct: "technical_foundation"
    },
    {
      id: "wiscar_4",
      question: "When faced with a complex problem, how do you typically approach it?",
      description: "Cognitive - This evaluates problem-solving and analytical thinking.",
      options: [
        "I often feel overwhelmed and need significant help to start",
        "I try a few obvious solutions, then seek help if they don't work",
        "I break it down into smaller parts and work through systematically",
        "I research thoroughly, create a plan, and execute methodically",
        "I analyze from multiple angles, consider various approaches, and adapt my strategy"
      ],
      category: "cognitive",
      construct: "analytical_thinking"
    },
    {
      id: "wiscar_5",
      question: "How do you typically respond to feedback and criticism on your work?",
      description: "Ability - This measures openness to learning and growth mindset.",
      options: [
        "I tend to take criticism personally and find it discouraging",
        "I accept feedback but don't always know how to apply it effectively",
        "I appreciate constructive feedback and try to incorporate it",
        "I actively seek feedback and use it to improve my work",
        "I seek out critical feedback, analyze it deeply, and use it for continuous improvement"
      ],
      category: "ability",
      construct: "growth_mindset"
    },
    {
      id: "wiscar_6",
      question: "Which statement best describes your understanding of 3D design career opportunities?",
      description: "Real-world - This assesses career knowledge and market awareness.",
      options: [
        "I have little knowledge of 3D design career paths or requirements",
        "I know 3D design exists but am unclear about specific opportunities",
        "I understand some basic career paths like game design or animation",
        "I'm familiar with various 3D career paths, required skills, and industry trends",
        "I have comprehensive knowledge of the 3D industry, specializations, and market demands"
      ],
      category: "real_world",
      construct: "career_awareness"
    }
  ]
} as const;