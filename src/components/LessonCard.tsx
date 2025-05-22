import React from 'react';
import { Clock, CheckCircle, BookOpen } from 'lucide-react';
import { Lesson } from '../types';
import { Link } from 'react-router-dom';
import { useGameContext } from '../context/GameContext';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const { state } = useGameContext();
  const isCompleted = state.user.completedLessons.includes(lesson.id);

  return (
    <div className={`card hover:shadow-lg transition-all duration-300 ${isCompleted ? 'border-l-4 border-success' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-heading text-lg font-bold">{lesson.title}</h3>
        {isCompleted ? (
          <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
        ) : (
          <BookOpen className="h-6 w-6 text-secondary flex-shrink-0" />
        )}
      </div>
      
      <p className="text-neutral-600 text-sm mb-4">{lesson.description}</p>
      
      <div className="flex items-center text-neutral-500 text-sm mb-4">
        <Clock className="h-4 w-4 mr-1" />
        <span>{lesson.duration} min read</span>
      </div>
      
      <Link 
        to={`/lesson/${lesson.id}`}
        className={`btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}`}
      >
        {isCompleted ? 'Review Lesson' : 'Start Learning'}
      </Link>
    </div>
  );
};

export default LessonCard;