import React from 'react';
import { AlertTriangle } from 'lucide-react';
import ScenarioCard from '../components/ScenarioCard';
import { scenariosData } from '../data/scenarios';

const ScenariosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <AlertTriangle className="h-8 w-8 text-warning mr-3" />
          <h1 className="font-heading text-3xl font-bold">Test Your Misinformation Detection Skills</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="font-heading text-xl font-bold mb-4">Challenge Yourself</h2>
          <p className="text-neutral-600 mb-6">
            Put your knowledge to the test with these interactive scenarios. You'll analyze 
            different types of content and answer questions to see how well you can spot 
            misinformation techniques.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <span className="px-3 py-1 bg-success text-white text-xs font-semibold rounded-full">Beginner</span>
            <span className="px-3 py-1 bg-warning text-neutral-900 text-xs font-semibold rounded-full">Intermediate</span>
            <span className="px-3 py-1 bg-danger text-white text-xs font-semibold rounded-full">Advanced</span>
          </div>
          
          <p className="text-sm text-neutral-500">
            Start with beginner scenarios and work your way up as you build confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenariosData.map(scenario => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScenariosPage;