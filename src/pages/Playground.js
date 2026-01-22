// Playground.js - Versão Otimizada e Corrigida
import React from 'react';
import { FiBook, FiTool, FiUsers, FiTrendingUp, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Playground.css';

// Importação condicional para evitar erros se o contexto não existir
let useLanguage;
try {
  const languageModule = require('../contexts/LanguageContext');
  useLanguage = languageModule.useLanguage;
} catch (error) {
  console.warn('LanguageContext não encontrado, usando idioma padrão');
  // Fallback se o contexto não existir
  useLanguage = () => ({ language: 'ptBR' });
}

const Playground = () => {
  // Usando o hook com fallback seguro
  const { language = 'ptBR' } = useLanguage?.() || { language: 'ptBR' };

  // Conteúdo completo das duas línguas
  const content = {
    ptBR: {
      title: "Playground QA",
      subtitle: "Laboratório de Qualidade & Certificação",
      construction: "🚧 Em Construção",
      description: "Espaço para compartilhar conhecimento sobre QA e preparação para certificações.",
      cta: "Em breve você encontrará:",
      timelineTitle: "Linha do Tempo",
      features: [
        { icon: <FiBook />, title: "Estudos CTFL", desc: "Conteúdo para certificação Foundation Level do ISTQB" },
        { icon: <FiTool />, title: "Ferramentas QA", desc: "Tutoriais sobre Cypress, Postman e Selenium" },
        { icon: <FiUsers />, title: "Comunidade", desc: "Espaço para compartilhar experiências e dúvidas" },
        { icon: <FiTrendingUp />, title: "Carreira QA", desc: "Guia de evolução profissional em Quality Assurance" }
      ],
      timeline: [
        { date: "Q1 2026", text: "Conteúdo CTFL estruturado" },
        { date: "Q2 2026", text: "Automação com Cypress" },
        { date: "Q3 2026", text: "Comunidade e estudos em grupo" },
        { date: "Q4 2026", text: "Preparação para certificações avançadas" }
      ],
      certification: {
        title: "ISTQB CTFL",
        description: "Certificação fundamental para iniciar uma carreira sólida em Quality Assurance.",
        tags: ["Fundamentos", "Testes", "Qualidade", "ISTQB"]
      },
      back: "← Voltar para Home",
      footer: "Compartilhando conhecimento para construir uma comunidade QA mais forte."
    },
    en: {
      title: "QA Playground",
      subtitle: "Quality & Certification Lab",
      construction: "🚧 Under Construction",
      description: "Space to share QA knowledge and certification preparation.",
      cta: "Coming soon:",
      timelineTitle: "Timeline",
      features: [
        { icon: <FiBook />, title: "CTFL Studies", desc: "Content for ISTQB Foundation Level certification" },
        { icon: <FiTool />, title: "QA Tools", desc: "Tutorials about Cypress, Postman and Selenium" },
        { icon: <FiUsers />, title: "Community", desc: "Space to share experiences and questions" },
        { icon: <FiTrendingUp />, title: "QA Career", desc: "Professional evolution guide in Quality Assurance" }
      ],
      timeline: [
        { date: "Q1 2026", text: "Structured CTFL content" },
        { date: "Q2 2026", text: "Automation with Cypress" },
        { date: "Q3 2026", text: "Community and group studies" },
        { date: "Q4 2026", text: "Advanced certifications preparation" }
      ],
      certification: {
        title: "ISTQB CTFL",
        description: "Fundamental certification to start a solid career in Quality Assurance.",
        tags: ["Foundation", "Testing", "Quality", "ISTQB"]
      },
      back: "← Back to Home",
      footer: "Sharing knowledge to build a stronger QA community."
    }
  };

  // Seleciona o conteúdo baseado no idioma com fallback
  const langContent = content[language] || content.ptBR;

  return (
    <>
      <Header />
      
      <main className="playground-grid">
        {/* Hero Section */}
        <section className="grid-hero">
          <div className="construction-banner">
            <FiClock className="pulse-icon" />
            <span className="badge-text">{langContent.construction}</span>
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title">{langContent.title}</h1>
            <p className="hero-subtitle">{langContent.subtitle}</p>
            <p className="hero-description">{langContent.description}</p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid-features">
          <h2 className="section-label">{langContent.cta}</h2>
          <div className="features-grid">
            {langContent.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="grid-timeline">
          <h2 className="section-label">{langContent.timelineTitle}</h2>
          <div className="timeline-cards">
            {langContent.timeline.map((item, index) => (
              <div key={index} className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-number">0{index + 1}</div>
                  <div className="timeline-date">{item.date}</div>
                </div>
                <p className="timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certification */}
        <section className="grid-certification">
          <div className="certification-card">
            <FiBook className="cert-icon" />
            <div className="cert-content">
              <h3>{langContent.certification.title}</h3>
              <p>{langContent.certification.description}</p>
              <div className="tags">
                {langContent.certification.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="grid-back">
          <div className="back-container">
            <Link to="/" className="back-btn">
              {langContent.back}
            </Link>
            <p className="footer-note">{langContent.footer}</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Playground;