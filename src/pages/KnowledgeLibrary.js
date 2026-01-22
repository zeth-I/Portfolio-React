import React from 'react';
import Header from '../components/Header/Header';
import './KnowledgeLibrary.css';

function KnowledgeLibrary() {
  return (
    <div className="knowledge-library">
      <Header />
      <div style={{ paddingTop: '70px' }}>
        <div className="container">
          <div className="library-header">
            <h1>Biblioteca de Conhecimentos</h1>
            <p>Em construção... 🚧</p>
            <p>Esta página será onde estará organizado meus certificados e grandes entregas.</p>
            <a href="/" className="btn" style={{ marginTop: '20px' }}>
              Voltar para Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeLibrary;