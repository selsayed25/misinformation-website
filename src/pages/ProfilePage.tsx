import React from 'react';
import { User, Award, RefreshCw, Clock } from 'lucide-react';
import { useGameContext } from '../context/GameContext';
import ProgressBar from '../components/ProgressBar';
import { lessonsData } from '../data/lessons';
import { scenariosData } from '../data/scenarios';

const ProfilePage: React.FC = () => {
  const { state, dispatch } = useGameContext();
  
  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      dispatch({ type: 'RESET_PROGRESS' });
    }
  };
  
  const badges = [
    {
      id: 'badge1',
      name: 'Truth Seeker',
      description: 'Completed your first lesson',
      image: 'https://images.pexels.com/photos/3826676/pexels-photo-3826676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      earned: state.user.completedLessons.length > 0
    },
    {
      id: 'badge2',
      name: 'Fact Checker',
      description: 'Completed your first scenario',
      image: 'https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      earned: state.completedScenarios.length > 0
    },
    {
      id: 'badge3',
      name: 'Information Expert',
      description: 'Completed all lessons',
      image: 'https://images.pexels.com/photos/6203796/pexels-photo-6203796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      earned: state.user.completedLessons.length === lessonsData.length
    },
    {
      id: 'badge4',
      name: 'Master Detective',
      description: 'Completed all scenarios',
      image: 'https://images.pexels.com/photos/6203503/pexels-photo-6203503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      earned: state.completedScenarios.length === scenariosData.length
    }
  ];
  
  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <User className="h-8 w-8 text-primary mr-3" />
          <h1 className="font-heading text-3xl font-bold">Your Profile</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="font-heading text-xl font-bold mb-6">Learning Progress</h2>
              
              <div className="mb-6">
                <ProgressBar 
                  progress={state.user.progress} 
                  total={100} 
                  label="Overall Completion" 
                  className="mb-8"
                />
                
                <ProgressBar 
                  progress={state.user.completedLessons.length} 
                  total={lessonsData.length} 
                  label="Lessons Completed" 
                  className="mb-8"
                />
                
                <ProgressBar 
                  progress={state.completedScenarios.length} 
                  total={scenariosData.length} 
                  label="Scenarios Completed" 
                />
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary mr-2" />
                  <span>Last activity: Today</span>
                </div>
                
                <button 
                  onClick={resetProgress}
                  className="flex items-center text-danger hover:text-danger/80 transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Reset Progress
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-xl font-bold">Your Achievements</h2>
                <div className="flex items-center bg-accent/10 text-accent rounded-full px-3 py-1">
                  <Award className="h-4 w-4 mr-1" />
                  <span className="text-sm font-semibold">
                    {badges.filter(b => b.earned).length}/{badges.length} Earned
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {badges.map(badge => (
                  <div key={badge.id} className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full overflow-hidden relative mb-2 ${badge.earned ? 'opacity-100' : 'opacity-40 grayscale'}`}>
                      <img 
                        src={badge.image} 
                        alt={badge.name} 
                        className="w-full h-full object-cover"
                      />
                      {!badge.earned && (
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-40">
                          <span className="text-white text-xs font-bold">Locked</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-heading text-sm font-bold text-center">{badge.name}</h3>
                    <p className="text-xs text-neutral-600 text-center">{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="font-heading text-xl font-bold flex items-center mb-4">
                <Award className="h-5 w-5 text-accent mr-2" />
                Your Score
              </h2>
              
              <div className="text-center py-4">
                <div className="text-5xl font-bold text-primary mb-2">{state.user.score}</div>
                <p className="text-neutral-600">points earned</p>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-4 mt-4">
                <h3 className="font-heading font-semibold text-sm mb-3">How Points Work:</h3>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li className="flex items-start">
                    <span className="h-5 w-5 inline-flex items-center justify-center bg-primary text-white rounded-full text-xs mr-2 flex-shrink-0">+</span>
                    <span>Earn points by correctly answering questions in scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 inline-flex items-center justify-center bg-success text-white rounded-full text-xs mr-2 flex-shrink-0">+</span>
                    <span>Bonus points for completing all lessons and scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 inline-flex items-center justify-center bg-accent text-white rounded-full text-xs mr-2 flex-shrink-0">+</span>
                    <span>Special achievements unlock extra points</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;