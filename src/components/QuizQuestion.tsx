import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean, points: number) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleOptionSelect = (optionId: string) => {
    if (selectedOption) return; // Prevent changing answer
    
    setSelectedOption(optionId);
    setShowFeedback(true);
    
    const selectedOptionObj = question.options.find(option => option.id === optionId);
    if (selectedOptionObj) {
      onAnswer(selectedOptionObj.isCorrect, selectedOptionObj.isCorrect ? question.points : 0);
    }
  };
  
  const isCorrect = (optionId: string) => {
    return question.options.find(option => option.id === optionId)?.isCorrect;
  };
  
  return (
    <div className="card mb-6 slide-up">
      <h3 className="font-heading text-xl font-bold mb-4">{question.text}</h3>
      
      <div className="space-y-3 mb-6">
        {question.options.map(option => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            disabled={selectedOption !== null}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-200
              ${selectedOption === option.id 
                ? (isCorrect(option.id) 
                  ? 'bg-success/10 border-success' 
                  : 'bg-danger/10 border-danger')
                : 'border-neutral-300 hover:border-secondary'
              }
              ${selectedOption && isCorrect(option.id) ? 'border-success' : ''}
            `}
          >
            <div className="flex items-center">
              <div className="flex-grow">
                {option.text}
              </div>
              {showFeedback && selectedOption === option.id && (
                <>
                  {isCorrect(option.id) ? (
                    <CheckCircle className="h-5 w-5 text-success ml-2 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-danger ml-2 flex-shrink-0" />
                  )}
                </>
              )}
              {showFeedback && selectedOption !== option.id && isCorrect(option.id) && (
                <CheckCircle className="h-5 w-5 text-success ml-2 flex-shrink-0" />
              )}
            </div>
          </button>
        ))}
      </div>
      
      {showFeedback && (
        <div className="p-4 rounded-lg bg-neutral-100 slide-up">
          <p className="font-semibold mb-2">
            {selectedOption && isCorrect(selectedOption) 
              ? '✓ Correct!' 
              : '✗ Not quite right.'}
          </p>
          <p>
            {question.options.find(option => option.id === selectedOption)?.explanation || 
             question.options.find(option => option.isCorrect)?.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;