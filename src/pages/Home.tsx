import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Brain, Lightbulb, Shield } from 'lucide-react';
import { useGameContext } from '../context/GameContext';

const Home: React.FC = () => {
  const { state } = useGameContext();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Fight Misinformation in the Digital Age
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200">
              An interactive journey to sharpen your critical thinking and become a better information consumer.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/lessons" className="btn btn-accent text-center">
                Start Learning
              </Link>
              <Link to="/challenge" className="btn bg-white text-primary hover:bg-neutral-100 text-center">
                Take the Challenge
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Why Information Literacy Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform">
              <AlertTriangle className="h-12 w-12 text-danger mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Recognize Deception</h3>
              <p className="text-neutral-600">Learn to spot the warning signs of fake news, propaganda, and misleading content.</p>
            </div>
            
            <div className="card flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform">
              <Brain className="h-12 w-12 text-secondary mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Train Your Mind</h3>
              <p className="text-neutral-600">Develop critical thinking skills that help you evaluate information more effectively.</p>
            </div>
            
            <div className="card flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform">
              <Lightbulb className="h-12 w-12 text-warning mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Understand Tactics</h3>
              <p className="text-neutral-600">Learn the psychological techniques used to spread misinformation and bypass critical thinking.</p>
            </div>
            
            <div className="card flex flex-col items-center text-center hover:translate-y-[-5px] transition-transform">
              <Shield className="h-12 w-12 text-success mb-4" />
              <h3 className="font-heading text-xl font-bold mb-2">Protect Yourself</h3>
              <p className="text-neutral-600">Equip yourself with practical tools and strategies to verify information before believing or sharing.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Progress Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-center mb-8">Your Learning Journey</h2>
            
            {state.user.progress > 0 ? (
              <div className="card">
                <h3 className="font-heading text-xl font-bold mb-4">Your Progress</h3>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Overall Completion</span>
                    <span className="font-semibold">{state.user.progress}%</span>
                  </div>
                  <div className="h-4 w-full bg-neutral-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-success transition-all duration-500 ease-out"
                      style={{ width: `${state.user.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Lessons Completed</span>
                    <span className="font-semibold">{state.user.completedLessons.length}/4</span>
                  </div>
                  <div className="h-4 w-full bg-neutral-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary transition-all duration-500 ease-out"
                      style={{ width: `${(state.user.completedLessons.length / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Scenarios Completed</span>
                    <span className="font-semibold">{state.completedScenarios.length}/3</span>
                  </div>
                  <div className="h-4 w-full bg-neutral-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-500 ease-out"
                      style={{ width: `${(state.completedScenarios.length / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-6">
                  {state.user.completedLessons.length < 4 ? (
                    <Link to="/lessons" className="btn btn-primary">
                      Continue Learning
                    </Link>
                  ) : state.completedScenarios.length < 3 ? (
                    <Link to="/scenarios" className="btn btn-primary">
                      Try More Scenarios
                    </Link>
                  ) : (
                    <Link to="/profile" className="btn btn-accent">
                      View Your Profile
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="card text-center">
                <h3 className="font-heading text-xl font-bold mb-4">Begin Your Journey</h3>
                <p className="text-neutral-600 mb-6">
                  Start learning about misinformation and test your knowledge with interactive scenarios.
                </p>
                <Link to="/lessons" className="btn btn-primary">
                  Start First Lesson
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;