import React, { useState, useEffect } from 'react';
import { 
  FiBriefcase, 
  FiCalendar, 
  FiTrendingUp,
  FiCode,
  FiDatabase,
  FiCheckCircle,
  FiBarChart2,
  FiCloud,
  FiTarget,
  FiCpu,
  FiBarChart,
  FiZap,
  FiGlobe,
  FiBox
} from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('experience');
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  // ===== ANIMAÇÃO DAS SKILLS =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !skillsAnimated) {
            setSkillsAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, [skillsAnimated]);

  // ===== TEXTO RESUMIDO - VENDEDOR =====
  const expertiseSummary = language === 'ptBR'
    ? "Desenvolvedor Front-End e Quality Assurance com expertise em metodologias ágeis, e automação de processos. Transformo desafios complexos em soluções escaláveis através de código limpo, testes robustos e integração de tecnologias modernas como React e IA generativa."
    : "I am a Front-End Developer and Quality Assurance professional with expertise in agile methodologies and process automation. I transform complex challenges into scalable solutions through clean code, robust testing, and the integration of modern technologies such as React and generative AI.";

  // ===== EXPERIÊNCIAS PROFISSIONAIS =====
  const experiences = [
    {
      id: 1,
      company: "Capgemini S/A",
      position: language === 'ptBR' ? "Analista de Soluções Digitais II" : "Digital Solutions Analyst II",
      period: "Nov 2022 - Jan 2026",
      description: language === 'ptBR'
        ? "Atuação tanto no desenvolvimento quanto na qualidade da Plataforma Pega System e Salesforce desde testes funcionais até testes não funcionais, realizando entregas com máximo de qualidade possível para agregar valor a entrega final do projeto."
        : "I worked on both the development and quality assurance of the Pega System and Salesforce platforms, performing functional and non-functional testing, and delivering results with the highest possible quality to add value to the project’s final delivery.",
      technologies: ["Tests", "Pega System", "Postman", "Agile", "Salesforce"]
    },
    {
      id: 2,
      company: "NTT DATA Brasil",
      position: language === 'ptBR' ? "Programador Junior" : "Junior Programmer",
      period: "Jan 2026 - Presente",
      description: language === 'ptBR'
        ? "Automação de testes"
        : "Test automation",
      technologies: ["Cypress", "Generative AI", "Agile"]
    }
  ];

  // ===== SKILLS COM PORCENTAGENS =====
  const technicalSkills = [
    { id: 1, name: language === 'ptBR' ? "Metodologias Ágeis" : "Agile Methodologies", percentage: 100, icon: <FiTrendingUp />, color: "#10B981" },
    { id: 2, name: "React", percentage: 70, icon: <FiZap />, color: "#61DAFB" }, // Ícone alternativo para React
    { id: 3, name: language === 'ptBR' ? "CSS Avançado" : "Advanced CSS", percentage: 80, icon: <FiCode />, color: "#2965F1" },
    { id: 4, name: "MySQL", percentage: 70, icon: <FiDatabase />, color: "#4479A1" },
    { id: 5, name: language === 'ptBR' ? "Testes Manuais" : "Manual Tests", percentage: 100, icon: <FiCheckCircle />, color: "#8B5CF6" },
    { id: 6, name: "Cypress", percentage: 50, icon: <FiTarget />, color: "#17202C" },
    { id: 7, name: "Excel", percentage: 70, icon: <FiBarChart2 />, color: "#217346" },
    { id: 9, name: "Power BI", percentage: 60, icon: <FiBarChart />, color: "#F2C811" },
    { id: 9, name: "Salesforce", percentage: 40, icon: <FiCpu />, color: "#00A1E0" }
  ];

  // ===== TECNOLOGIAS CHAVE =====
  const keyTechnologies = [
    { id: 1, name: "AWS Cloud", description: language === 'ptBR' ? "Arquitetura serverless e soluções escaláveis" : "Serverless architecture and scalable solutions", icon: <FiCloud /> },
    { id: 2, name: "Test Automation", description: language === 'ptBR' ? "Automação E2E com Cypress e Postman" : "E2E automation with Cypress and Postman", icon: <FiCheckCircle /> },
    { id: 3, name: "Low-Code", description: language === 'ptBR' ? "Pega System e Power Apps" : "Pega System and Power Apps", icon: <FiCode /> },
    { id: 4, name: "Generative AI", description: language === 'ptBR' ? "LLMs e automação inteligente" : "LLMs and intelligent automation", icon: <FiGlobe /> }
  ];

  // ===== PLAYISTAS DO SPOTIFY (PLACEHOLDER) =====
  const playlists = [
    { id: 1, name: "Deep Focus", description: "Concentração máxima para programação", tracks: 250, genre: "Lo-fi & Ambient" },
    { id: 2, name: "Coding Flow", description: "Batidas para manter o ritmo", tracks: 180, genre: "Eletrônica & Synth" },
    { id: 3, name: "QA Testing Vibes", description: "Para sessões intensas de testes", tracks: 120, genre: "Chill & Focus" }
  ];

  // ===== FUNÇÃO PARA NÍVEL DE PROFICIÊNCIA =====
  const getProficiencyLevel = (percentage) => {
    if (percentage <= 40) return language === 'ptBR' ? 'Básico' : 'Basic';
    if (percentage <= 70) return language === 'ptBR' ? 'Intermediário' : 'Intermediate';
    if (percentage < 90) return language === 'ptBR' ? 'Avançado' : 'Advanced';
    return language === 'ptBR' ? 'Especialista' : 'Expert';
  };

  // ===== RENDERIZAÇÃO =====
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* CABEÇALHO */}
        <div className="skills-header">
          <h2 className="section-title">
            <span className="title-highlight">#</span> {language === 'ptBR' ? 'Skills & Experiência' : 'Skills & Experience'}
          </h2>
          <p className="section-subtitle">
            {language === 'ptBR' 
              ? 'Desenvolvimento Front-End • QA  • Automação' 
              : 'Front-End Development • QA  • Automation'}
          </p>
        </div>

        {/* RESUMO DE EXPERTISE */}
        <div className="expertise-summary">
          <p>{expertiseSummary}</p>
        </div>

        {/* TABS DE NAVEGAÇÃO */}
        <div className="skills-tabs">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FiBriefcase />
            {language === 'ptBR' ? 'Experiência' : 'Experience'}
          </button>
          <button 
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            <FiTrendingUp />
            {language === 'ptBR' ? 'Skills Técnicas' : 'Technical Skills'}
          </button>
        </div>

        {/* CONTEÚDO DAS TABS */}
        <div className="tab-content-wrapper">
          
          {/* TAB: EXPERIÊNCIA */}
          {activeTab === 'experience' && (
            <div className="experience-tab">
              
              {/* TIMELINE */}
              <div className="experience-timeline">
                {experiences.map((exp) => (
                  <div key={exp.id} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                      {exp.id < experiences.length && <div className="marker-line"></div>}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.company}</h3>
                        <span className="timeline-period">
                          <FiCalendar /> {exp.period}
                        </span>
                      </div>
                      <h4 className="timeline-position">{exp.position}</h4>
                      <p className="timeline-description">{exp.description}</p>
                      
                      {/* TECNOLOGIAS DA EMPRESA */}
                      <div className="company-tech">
                        {exp.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* TECNOLOGIAS CHAVE */}
              <div className="key-technologies">
                <h3>{language === 'ptBR' ? 'Tecnologias Chave' : 'Key Technologies'}</h3>
                <div className="tech-grid">
                  {keyTechnologies.map((tech) => (
                    <div key={tech.id} className="tech-card">
                      <div className="tech-icon">{tech.icon}</div>
                      <div className="tech-content">
                        <h4>{tech.name}</h4>
                        <p>{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: SKILLS TÉCNICAS */}
          {activeTab === 'skills' && (
            <div className="skills-tab">
              <div className="skills-grid">
                {technicalSkills.map((skill) => (
                  <div key={skill.id} className="skill-card">
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-percentage">{skill.percentage}%</span>
                      </div>
                    </div>
                    
                    {/* BARRA DE PROGRESSO */}
                    <div className="skill-progress">
                      <div className="progress-track">
                        <div 
                          className="progress-bar"
                          style={{ 
                            width: skillsAnimated ? `${skill.percentage}%` : '0%',
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                      <div className="progress-labels">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                      </div>
                    </div>
                    
                    {/* NÍVEL DE PROFICIÊNCIA */}
                    <div className="skill-level">
                      <div className="level-indicator">
                        {getProficiencyLevel(skill.percentage)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;