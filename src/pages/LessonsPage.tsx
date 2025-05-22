import React from 'react';
import { Book } from 'lucide-react';
import LessonCard from '../components/LessonCard';
import { lessonsData } from '../data/lessons';
import { Link, useNavigate } from 'react-router-dom';

const LessonsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Book className="h-8 w-8 text-primary mr-3" />
          <h1 className="font-heading text-3xl font-bold">Learn About Misinformation</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="font-heading text-xl font-bold mb-4">Learning Path</h2>
          <p className="text-neutral-600 mb-6">
            Work through these lessons in order to build your understanding of misinformation, 
            disinformation, and propaganda. Each lesson provides valuable knowledge and skills 
            to help you navigate today's complex information environment.
          </p>
          
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="font-heading font-bold mb-2">Start Here</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Begin with the fundamentals and work your way through each lesson.
            </p>
            
            <div className="absolute left-[-9px] bottom-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="font-heading font-bold mb-2">Knowledge Check</h3>
            <p className="text-sm text-neutral-600">
              After completing the lessons, test your skills with interactive scenarios.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessonsData.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mt-8 text-center">
          <h2 className="font-heading text-xl font-bold mb-4">Ready to Test Your Skills?</h2>
          <p className="text-neutral-600 mb-6">
            After completing the lessons, put your knowledge to the test with our interactive scenarios.
          </p>
          <Link to="/scenarios" className="btn btn-primary">
            Go to Scenarios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;