import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LessonsPage from './pages/LessonsPage';
import LessonDetail from './pages/LessonDetail';
import ScenariosPage from './pages/ScenariosPage';
import ScenarioDetail from './pages/ScenarioDetail';
import GlossaryPage from './pages/GlossaryPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <GameProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/lesson/:lessonId" element={<LessonDetail />} />
              <Route path="/scenarios" element={<ScenariosPage />} />
              <Route path="/scenario/:scenarioId" element={<ScenarioDetail />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/challenge" element={<ScenariosPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;