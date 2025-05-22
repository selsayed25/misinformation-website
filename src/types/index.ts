export interface User {
  id: string;
  progress: number;
  completedLessons: string[];
  score: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  earned: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'text' | 'video' | 'interactive';
  duration: number; // minutes
  quizId?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  content: ContentItem[];
  questions: Question[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: MisinformationType;
}

export interface ContentItem {
  id: string;
  type: 'text' | 'image' | 'social-post' | 'article' | 'video';
  content: string;
  source?: string;
  isMisleading: boolean;
  explanation?: string;
}

export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  points: number;
}

export type MisinformationType = 
  | 'fake-news' 
  | 'conspiracy' 
  | 'propaganda' 
  | 'clickbait' 
  | 'deepfake' 
  | 'misleading-stats'
  | 'out-of-context'
  | 'satire-confusion';

export interface GlossaryItem {
  term: string;
  definition: string;
  examples: string[];
  techniques: string[];
  relatedTerms: string[];
}

export interface AppState {
  user: User;
  currentLesson: Lesson | null;
  currentScenario: Scenario | null;
  completedScenarios: string[];
  darkMode: boolean;
  soundEnabled: boolean;
}