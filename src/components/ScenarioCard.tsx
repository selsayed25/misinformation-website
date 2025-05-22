import React from 'react';
import { ExternalLink, Award, AlertTriangle } from 'lucide-react';
import { Scenario } from '../types';
import { Link } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';

interface ScenarioCardProps {
  scenario: Scenario;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-success text-white';
    case 'intermediate':
      return 'bg-warning text-neutral-900';
    case 'advanced':
      return 'bg-danger text-white';
    default:
      return 'bg-secondary text-white';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'fake-news':
      return <AlertTriangle className="h-5 w-5" />;
    case 'conspiracy':
      return <AlertTriangle className="h-5 w-5" />;
    case 'propaganda':
      return <AlertTriangle className="h-5 w-5" />;
    case 'clickbait':
      return <ExternalLink className="h-5 w-5" />;
    default:
      return <AlertTriangle className="h-5 w-5" />;
  }
};

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario }) => {
  const { state } = useGameContext();
  const isCompleted = state.completedScenarios.includes(scenario.id);

  return (
    <div className="card hover:shadow-lg transition-all duration-300 overflow-hidden">
      {isCompleted && (
        <div className="absolute top-3 right-3">
          <Award className="h-6 w-6 text-success" />
        </div>
      )}
      
      <div className="flex items-center mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold mr-2 ${getDifficultyColor(scenario.difficulty)}`}>
          {scenario.difficulty.charAt(0).toUpperCase() + scenario.difficulty.slice(1)}
        </span>
        <span className="flex items-center text-xs text-neutral-600">
          {getCategoryIcon(scenario.category)}
          <span className="ml-1">{scenario.category.replace('-', ' ')}</span>
        </span>
      </div>
      
      <h3 className="font-heading text-xl font-bold mb-2">{scenario.title}</h3>
      <p className="text-neutral-600 mb-4">{scenario.description}</p>
      
      <Link 
        to={`/scenario/${scenario.id}`}
        className="btn btn-primary inline-block"
      >
        {isCompleted ? 'Try Again' : 'Start Challenge'}
      </Link>
    </div>
  );
};

export default ScenarioCard;