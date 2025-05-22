import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { lessonsData } from '../data/lessons';
import { useGameContext } from '../context/GameContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const LessonDetail: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useGameContext();
  
  const lesson = lessonsData.find(l => l.id === lessonId);
  
  useEffect(() => {
    if (lesson) {
      dispatch({ type: 'SET_CURRENT_LESSON', payload: lesson });
    }
    
    return () => {
      dispatch({ type: 'SET_CURRENT_LESSON', payload: null });
    };
  }, [lesson, dispatch]);
  
  if (!lesson) {
    return (
      <div className="min-h-screen bg-neutral-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Lesson Not Found</h1>
          <p className="mb-6">The lesson you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/lessons')}
            className="btn btn-primary"
          >
            Back to Lessons
          </button>
        </div>
      </div>
    );
  }
  
  const currentIndex = lessonsData.findIndex(l => l.id === lessonId);
  const previousLesson = currentIndex > 0 ? lessonsData[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessonsData.length - 1 ? lessonsData[currentIndex + 1] : null;
  
  const isCompleted = state.user.completedLessons.includes(lesson.id);
  
  const handleComplete = () => {
    dispatch({ type: 'COMPLETE_LESSON', payload: lesson.id });
    
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    } else {
      navigate('/lessons');
    }
  };
  
  return (
    <div className="min-h-screen bg-neutral-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-6">
            <div className="flex items-center text-neutral-500 text-sm mb-4">
              <span>Lesson {currentIndex + 1} of {lessonsData.length}</span>
              <span className="mx-2">•</span>
              <span>{lesson.duration} min read</span>
              {isCompleted && (
                <>
                  <span className="mx-2">•</span>
                  <span className="flex items-center text-success">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Completed
                  </span>
                </>
              )}
            </div>
            
            <h1 className="font-heading text-3xl font-bold mb-6">{lesson.title}</h1>
            
            <div className="prose max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {lesson.content}
              </ReactMarkdown>
            </div>
          </div>
          
          <div className="flex justify-between">
            {previousLesson ? (
              <button 
                onClick={() => navigate(`/lesson/${previousLesson.id}`)}
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Previous: {previousLesson.title}
              </button>
            ) : (
              <div></div>
            )}
            
            {isCompleted ? (
              <div className="flex items-center text-success">
                <CheckCircle className="h-5 w-5 mr-1" />
                Completed
              </div>
            ) : (
              <button 
                onClick={handleComplete}
                className="btn btn-primary"
              >
                {nextLesson ? 'Complete & Continue' : 'Complete Lesson'}
              </button>
            )}
            
            {nextLesson && (
              <button 
                onClick={() => navigate(`/lesson/${nextLesson.id}`)}
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                Next: {nextLesson.title}
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;