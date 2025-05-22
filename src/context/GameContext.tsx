import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AppState, Lesson, Scenario, User } from '../types';

type GameAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_CURRENT_LESSON'; payload: Lesson | null }
  | { type: 'SET_CURRENT_SCENARIO'; payload: Scenario | null }
  | { type: 'COMPLETE_LESSON'; payload: string }
  | { type: 'COMPLETE_SCENARIO'; payload: string }
  | { type: 'UPDATE_SCORE'; payload: number }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'TOGGLE_SOUND' }
  | { type: 'RESET_PROGRESS' };

const initialState: AppState = {
  user: {
    id: 'user-1',
    progress: 0,
    completedLessons: [],
    score: 0,
    badges: []
  },
  currentLesson: null,
  currentScenario: null,
  completedScenarios: [],
  darkMode: false,
  soundEnabled: true
};

const gameReducer = (state: AppState, action: GameAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_CURRENT_LESSON':
      return { ...state, currentLesson: action.payload };
    case 'SET_CURRENT_SCENARIO':
      return { ...state, currentScenario: action.payload };
    case 'COMPLETE_LESSON':
      if (state.user.completedLessons.includes(action.payload)) {
        return state;
      }
      const newCompletedLessons = [...state.user.completedLessons, action.payload];
      const newProgress = Math.min(100, state.user.progress + 10);
      return {
        ...state,
        user: {
          ...state.user,
          completedLessons: newCompletedLessons,
          progress: newProgress
        }
      };
    case 'COMPLETE_SCENARIO':
      if (state.completedScenarios.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        completedScenarios: [...state.completedScenarios, action.payload]
      };
    case 'UPDATE_SCORE':
      return {
        ...state,
        user: {
          ...state.user,
          score: state.user.score + action.payload
        }
      };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'TOGGLE_SOUND':
      return { ...state, soundEnabled: !state.soundEnabled };
    case 'RESET_PROGRESS':
      return {
        ...state,
        user: {
          ...state.user,
          progress: 0,
          completedLessons: [],
          score: 0
        },
        completedScenarios: []
      };
    default:
      return state;
  }
};

interface GameContextProps {
  state: AppState;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('truthDetectorState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        // Initialize with saved state
        if (parsedState.user) {
          dispatch({ type: 'SET_USER', payload: parsedState.user });
        }
        if (parsedState.completedScenarios) {
          parsedState.completedScenarios.forEach((scenarioId: string) => {
            dispatch({ type: 'COMPLETE_SCENARIO', payload: scenarioId });
          });
        }
      } catch (error) {
        console.error('Error loading saved state:', error);
      }
    }
  }, []);

  // Save state to localStorage when it changes
  useEffect(() => {
    const stateToSave = {
      user: state.user,
      completedScenarios: state.completedScenarios,
    };
    localStorage.setItem('truthDetectorState', JSON.stringify(stateToSave));
  }, [state.user, state.completedScenarios]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = (): GameContextProps => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};