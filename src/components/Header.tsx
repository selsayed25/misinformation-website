import React from 'react';
import { Book, User, Home, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { useGameContext } from '../context/GameContext';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { state, dispatch } = useGameContext();
  const { darkMode, soundEnabled } = state;

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <Book className="h-8 w-8 mr-2 text-accent" />
              <span className="text-xl font-heading font-bold">Truth Detector</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link to="/" className="flex items-center hover:text-accent transition-colors">
              <Home className="h-5 w-5 mr-1" />
              <span className="hidden md:inline">Home</span>
            </Link>
            
            <Link to="/lessons" className="flex items-center hover:text-accent transition-colors">
              <Book className="h-5 w-5 mr-1" />
              <span className="hidden md:inline">Lessons</span>
            </Link>
            
            <Link to="/profile" className="flex items-center hover:text-accent transition-colors">
              <User className="h-5 w-5 mr-1" />
              <span className="hidden md:inline">Profile</span>
            </Link>
            
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
              className="flex items-center hover:text-accent transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_SOUND' })}
              className="flex items-center hover:text-accent transition-colors"
              aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
            >
              {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </button>
          </nav>
        </div>
        
        {/* Progress bar */}
        <div className="mt-2 h-1 w-full bg-primary-dark rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${state.user.progress}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;