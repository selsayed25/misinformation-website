import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, AlertTriangle, CheckCircle, XCircle, Brain } from 'lucide-react';
import { scenariosData } from '../data/scenarios';
import { useGameContext } from '../context/GameContext';
import QuizQuestion from '../components/QuizQuestion';

const ScenarioDetail: React.FC = () => {
  const { scenarioId } = useParams<{ scenarioId: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useGameContext();
  
  const [currentStep, setCurrentStep] = useState<'intro' | 'content' | 'questions' | 'results'>('intro');
  const [answers, setAnswers] = useState<{id: string, isCorrect: boolean, points: number}[]>([]);
  
  const scenario = scenariosData.find(s => s.id === scenarioId);
  
  useEffect(() => {
    if (scenario) {
      dispatch({ type: 'SET_CURRENT_SCENARIO', payload: scenario });
    }
    
    return () => {
      dispatch({ type: 'SET_CURRENT_SCENARIO', payload: null });
    };
  }, [scenario, dispatch]);
  
  if (!scenario) {
    return (
      <div className="min-h-screen bg-neutral-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Scenario Not Found</h1>
          <p className="mb-6">The scenario you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/scenarios')}
            className="btn btn-primary"
          >
            Back to Scenarios
          </button>
        </div>
      </div>
    );
  }
  
  const handleAnswer = (questionId: string, isCorrect: boolean, points: number) => {
    setAnswers([...answers, {id: questionId, isCorrect, points}]);
  };
  
  const totalPoints = answers.reduce((sum, answer) => sum + answer.points, 0);
  const maxPossiblePoints = scenario.questions.reduce((sum, question) => sum + question.points, 0);
  const correctAnswers = answers.filter(answer => answer.isCorrect).length;
  const scorePct = Math.round((totalPoints / maxPossiblePoints) * 100);
  
  const handleComplete = () => {
    dispatch({ type: 'COMPLETE_SCENARIO', payload: scenario.id });
    dispatch({ type: 'UPDATE_SCORE', payload: totalPoints });
  };
  
  const getCategoryIcon = () => {
    switch (scenario.category) {
      case 'fake-news':
        return <AlertTriangle className="h-6 w-6 text-danger" />;
      case 'propaganda':
        return <Brain className="h-6 w-6 text-warning" />;
      default:
        return <AlertTriangle className="h-6 w-6 text-danger" />;
    }
  };
  
  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {currentStep === 'intro' && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-6 text-center">
              <div className="flex justify-center mb-6">
                {getCategoryIcon()}
              </div>
              <h1 className="font-heading text-3xl font-bold mb-4">{scenario.title}</h1>
              <p className="text-lg mb-8">{scenario.description}</p>
              <button 
                onClick={() => setCurrentStep('content')}
                className="btn btn-primary"
              >
                Begin Challenge
              </button>
            </div>
          )}
          
          {currentStep === 'content' && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h2 className="font-heading text-2xl font-bold mb-6">Examine the Content</h2>
              
              {scenario.content.map((item) => (
                <div key={item.id} className="mb-8">
                  {item.type === 'text' ? (
                    <div className="border border-neutral-300 rounded-lg p-4">
                      <p className="font-semibold text-neutral-700 mb-2">{item.content}</p>
                      <div className="text-sm text-neutral-500">Source: {item.source}</div>
                    </div>
                  ) : item.type === 'social-post' ? (
                    <div className="border border-neutral-300 rounded-lg p-4 bg-neutral-50">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-300 mr-3"></div>
                        <div>
                          <p className="font-semibold">{item.source}</p>
                          <p className="text-xs text-neutral-500">Posted yesterday</p>
                        </div>
                      </div>
                      <p className="mb-4">{item.content}</p>
                      <div className="flex justify-between text-sm text-neutral-500 border-t border-neutral-300 pt-3">
                        <span>42 Likes</span>
                        <span>17 Comments</span>
                        <span>95 Shares</span>
                      </div>
                    </div>
                  ) : item.type === 'image' && (
                    <div>
                      <img 
                        src={item.content} 
                        alt="Content" 
                        className="w-full rounded-lg mb-2" 
                      />
                      <div className="text-sm text-neutral-500">Source: {item.source}</div>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-8 text-center">
                <p className="mb-4 text-lg">
                  Study the content carefully. What can you observe about it?
                </p>
                <button 
                  onClick={() => setCurrentStep('questions')}
                  className="btn btn-primary"
                >
                  Answer Questions
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 'questions' && (
            <div className="mb-6">
              <h2 className="font-heading text-2xl font-bold mb-6">Test Your Knowledge</h2>
              
              {scenario.questions.map((question, index) => {
                // Check if we already answered this question
                const answered = answers.some(a => a.id === question.id);
                
                // Only show next question if previous one is answered
                if (index > answers.length) return null;
                
                return (
                  <QuizQuestion 
                    key={question.id}
                    question={question}
                    onAnswer={(isCorrect, points) => handleAnswer(question.id, isCorrect, points)}
                  />
                );
              })}
              
              {answers.length === scenario.questions.length && (
                <div className="text-center mt-8">
                  <button 
                    onClick={() => setCurrentStep('results')}
                    className="btn btn-primary"
                  >
                    See Results
                  </button>
                </div>
              )}
            </div>
          )}
          
          {currentStep === 'results' && (
            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <div className="text-center">
                <div className="inline-block rounded-full p-4 bg-neutral-100 mb-4">
                  {scorePct >= 70 ? (
                    <Award className="h-12 w-12 text-success" />
                  ) : scorePct >= 40 ? (
                    <Brain className="h-12 w-12 text-warning" />
                  ) : (
                    <XCircle className="h-12 w-12 text-danger" />
                  )}
                </div>
                
                <h2 className="font-heading text-2xl font-bold mb-2">
                  {scorePct >= 70 
                    ? 'Well Done!' 
                    : scorePct >= 40 
                      ? 'Good Effort!' 
                      : 'Keep Practicing!'}
                </h2>
                
                <p className="text-lg mb-6">
                  You scored {totalPoints} out of {maxPossiblePoints} points ({scorePct}%)
                </p>
                
                <div className="flex justify-center items-center mb-8">
                  <div className="flex items-center mr-8">
                    <CheckCircle className="h-5 w-5 text-success mr-2" />
                    <span>{correctAnswers} Correct</span>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-danger mr-2" />
                    <span>{scenario.questions.length - correctAnswers} Incorrect</span>
                  </div>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg mb-6 text-left">
                  <h3 className="font-heading font-bold mb-2">The Truth About This Content:</h3>
                  <p>
                    {scenario.content[0].explanation}
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-4 rounded-lg mb-8 text-left">
                  <h3 className="font-heading font-bold mb-2">Key Takeaways:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Always check multiple sources before believing or sharing content.</li>
                    <li>Be skeptical of content that triggers strong emotional reactions.</li>
                    <li>Look for verifiable evidence and credible citations.</li>
                    <li>Consider who benefits from spreading this information.</li>
                  </ul>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      handleComplete();
                      navigate('/scenarios');
                    }}
                    className="btn btn-primary"
                  >
                    Complete & Continue
                  </button>
                  
                  <button 
                    onClick={() => {
                      setCurrentStep('intro');
                      setAnswers([]);
                    }}
                    className="btn bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioDetail;