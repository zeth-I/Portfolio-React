import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import KnowledgeLibrary from './pages/KnowledgeLibrary';
import Playground from './pages/Playground';
import './styles/main.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conhecimentos" element={<KnowledgeLibrary />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;