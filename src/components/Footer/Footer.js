// Footer.js
import React from 'react';
import { 
  FiHeart, 
  FiGithub, 
  FiLinkedin, 
  FiMail,
  FiCode,
  FiZap,
  FiCpu,
  FiDatabase,
  FiCheckCircle,
  FiGlobe,
  FiPackage
} from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Tecnologias usadas no projeto
  const technologies = [
    {
      id: 1,
      name: "React c/ Hooks",
      icon: <FiZap />,
      color: "#61DAFB"
    },
    {
      id: 2,
      name: "React Icons",
      icon: <FiPackage />,
      color: "#E91E63"
    },
    {
      id: 3,
      name: "Context API",
      icon: <FiCpu />,
      color: "#4CAF50"
    },
    {
      id: 4,
      name: "CSS Moderno",
      icon: <FiCode />,
      color: "#2965F1"
    },
    {
      id: 5,
      name: "JavaScript ES6+",
      icon: <FiCode />,
      color: "#F7DF1E"
    },
    {
      id: 6,
      name: "Responsive Design",
      icon: <FiGlobe />,
      color: "#8B5CF6"
    }
  ];

  return (
    <footer className="footer-section" id="footer">
      <div className="footer-container">
        
        {/* CONTEÚDO PRINCIPAL */}
        <div className="footer-content">
          
          {/* SEÇÃO DA LOGO */}
          <div className="footer-logo-section">
            <a href="/" className="footer-logo">
              <img 
                src="/devzeth.png" 
                alt="DevZeth Logo" 
                className="logo-image"
              />
              <div className="logo-text">
                <span className="logo-title">DevZeth</span>
              </div>
            </a>
            
            <p className="footer-tagline">
              {language === 'ptBR'
                ? 'Transformando ideias em soluções digitais com código limpo e testes robustos.'
                : 'Transforming ideas into digital solutions with clean code and robust testing.'}
            </p>
          </div>
          
          {/* SEÇÃO DE TECNOLOGIAS */}
          <div className="footer-tech-section">
            <h3 className="tech-title">
              {language === 'ptBR' ? 'Tecnologias Usadas' : 'Technologies Used'}
            </h3>
            
            <div className="tech-grid">
              {technologies.map((tech) => (
                <div key={tech.id} className="tech-item">
                  <div className="tech-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <div className="tech-info">
                    <h4>{tech.name}</h4>
                    <p>{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* RODAPÉ INFERIOR */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} DevZeth. {language === 'ptBR' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
            <br />
            {language === 'ptBR' 
              ? 'Feito com ' 
              : 'Made with '}
            <FiHeart style={{ color: '#ef4444', display: 'inline-block', margin: '0 5px' }} />
            {language === 'ptBR' 
              ? ' por um desenvolvedor Front-End & QA' 
              : ' by a Front-End & QA Developer'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;