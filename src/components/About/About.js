import React, { useState } from 'react';
import { 
  FiMapPin, 
  FiBriefcase, 
  FiCalendar, 
  FiCode, 
  FiCheckCircle,
  FiTool,
  FiTarget,
  FiUsers,
  FiBookOpen
} from 'react-icons/fi';
import { FaReact , FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiCypress, SiTypescript, SiNextdotjs } from 'react-icons/si';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const [activeInfo, setActiveInfo] = useState('bio');

  // Biografia em português
  const bioPT = {
    title: "QA & Desenvolvedor Front-End",
    intro: "Especialista em Qualidade de Software e desenvolvimento Front-End com foco em criar experiências digitais excepcionais e livres de bugs.",
    description: `Com 3 anos de experiência no mercado de tecnologia, atuo na intersecção entre desenvolvimento e qualidade. 
    Minha jornada começou em Recife, terra de inovação e tecnologia, onde aprendi a importância de unir código limpo com testes robustos.
    
    Como QA, desenvolvo estratégias de teste que garantem a confiabilidade das aplicações. Como desenvolvedor Front-End, transformo designs em interfaces funcionais, performáticas e acessíveis.
    
    Acredito que qualidade não é uma fase, mas um mindset que deve estar presente em todas as etapas do desenvolvimento.`,
    philosophy: "Código bem testado é código bem escrito. Qualidade e desenvolvimento andam juntos."
  };

  // Biografia em inglês
  const bioEN = {
    title: "QA & Front-End Developer",
    intro: "Software Quality Specialist and Front-End Developer focused on creating exceptional, bug-free digital experiences.",
    description: `With 3 years of experience in the tech market, I work at the intersection of development and quality.
    My journey started in Recife, a land of innovation and technology, where I learned the importance of combining clean code with robust testing.
    
    As a QA, I develop testing strategies that ensure application reliability. As a Front-End Developer, I transform designs into functional, performant, and accessible interfaces.
    
    I believe that quality is not a phase, but a mindset that should be present in all stages of development.`,
    philosophy: "Well-tested code is well-written code. Quality and development go hand in hand."
  };

  const bio = language === 'ptBR' ? bioPT : bioEN;

  // Informações pessoais
  const personalInfo = {
    location: "Recife, Pernambuco",
    experience: "3+ anos",
    projects: "10+ projetos",
    status: language === 'ptBR' ? "Disponível para projetos" : "Available for projects"
  };

  // Áreas de expertise
  const expertiseAreas = [
    {
      title: language === 'ptBR' ? "Quality Assurance" : "Quality Assurance",
      description: language === 'ptBR' 
        ? "Testes automatizados, manuais e garantia de qualidade" 
        : "Automated testing, manual testing and quality assurance",
      icon: <FiCheckCircle />,
      color: "#10B981"
    },
    {
      title: language === 'ptBR' ? "Front-End Development" : "Front-End Development",
      description: language === 'ptBR' 
        ? "Desenvolvimento de interfaces modernas e responsivas" 
        : "Modern and responsive interface development",
      icon: <FiCode />,
      color: "#3B82F6"
    },
    {
      title: language === 'ptBR' ? "Test Automation" : "Test Automation",
      description: language === 'ptBR' 
        ? "Automação de testes E2E, integração e unitários" 
        : "E2E, integration and unit test automation",
      icon: <FiTool />,
      color: "#8B5CF6"
    }
  ];

  // Valores
  const values = [
    {
      title: language === 'ptBR' ? "Qualidade em Primeiro Lugar" : "Quality First",
      description: language === 'ptBR'
        ? "Cada linha de código merece atenção e testes"
        : "Every line of code deserves attention and testing"
    },
    {
      title: language === 'ptBR' ? "Código Limpo & Testável" : "Clean & Testable Code",
      description: language === 'ptBR'
        ? "Desenvolvo pensando na testabilidade desde o início"
        : "I develop with testability in mind from the start"
    },
    {
      title: language === 'ptBR' ? "Colaboração & Feedback" : "Collaboration & Feedback",
      description: language === 'ptBR'
        ? "Trabalho próximo às equipes para qualidade contínua"
        : "Work closely with teams for continuous quality"
    },
    {
      title: language === 'ptBR' ? "Aprendizado Contínuo" : "Continuous Learning",
      description: language === 'ptBR'
        ? "Sempre atualizando conhecimentos em QA e desenvolvimento"
        : "Always updating knowledge in QA and development"
    }
  ];

  // Ferramentas & Tecnologias (para visualização)
  const tools = [
    { icon: <FaReact />, name: "React", category: "Front-End" },
    { icon: <SiNextdotjs />, name: "Next.js", category: "Front-End" },
    { icon: <SiTypescript />, name: "TypeScript", category: "Front-End" },
    { icon: <SiCypress />, name: "Cypress", category: "Testing" },
    { icon: <FaGitAlt />, name: "Git", category: "Tools" },
    { icon: <FaFigma />, name: "Figma", category: "Design" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="about-header">
          <h2 className="section-title">
            <span className="title-highlight"> //</span> {language === 'ptBR' ? 'Sobre Mim' : 'About Me'}
          </h2>
          <p className="section-subtitle">
            {language === 'ptBR' 
              ? 'QA & Desenvolvedor Front-End • Recife, PE' 
              : 'QA & Front-End Developer • Recife, Brazil'}
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="about-content">
          
          {/* Coluna Esquerda - Biografia */}
          <div className="bio-column">
            {/* Cabeçalho da Biografia */}
            <div className="bio-header">
              <div className="bio-title">
                <h3>{bio.title}</h3>
                <div className="title-badge">
                  <span className="badge-dot"></span>
                  {personalInfo.status}
                </div>
              </div>
              <p className="bio-intro">{bio.intro}</p>
            </div>

            {/* Biografia Detalhada */}
            <div className="bio-description">
              {bio.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Filosofia */}
            <div className="philosophy-card">
              <FiTarget className="philosophy-icon" />
              <div>
                <h4>{language === 'ptBR' ? 'Minha Filosofia' : 'My Philosophy'}</h4>
                <p>{bio.philosophy}</p>
              </div>
            </div>

            {/* Valores */}
            <div className="values-section">
              <h4>{language === 'ptBR' ? 'Meus Valores' : 'My Values'}</h4>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-card">
                    <div className="value-number">0{index + 1}</div>
                    <div className="value-content">
                      <h5>{value.title}</h5>
                      <p>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita - Informações & Expertise */}
          <div className="info-column">
            {/* Card de Informações Pessoais */}
            <div className="info-card">
              <h4>{language === 'ptBR' ? 'Informações' : 'Information'}</h4>
              <div className="info-list">
                <div className="info-item">
                  <FiMapPin className="info-icon" />
                  <div>
                    <span className="info-label">{language === 'ptBR' ? 'Localização' : 'Location'}</span>
                    <span className="info-value">{personalInfo.location}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FiBriefcase className="info-icon" />
                  <div>
                    <span className="info-label">{language === 'ptBR' ? 'Experiência' : 'Experience'}</span>
                    <span className="info-value">{personalInfo.experience}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FiCode className="info-icon" />
                  <div>
                    <span className="info-label">{language === 'ptBR' ? 'Projetos' : 'Projects'}</span>
                    <span className="info-value">{personalInfo.projects}</span>
                  </div>
                </div>
                <div className="info-item">
                  <FiCalendar className="info-icon" />
                  <div>
                    <span className="info-label">{language === 'ptBR' ? 'Disponibilidade' : 'Availability'}</span>
                    <span className="info-value availability-badge">
                      {personalInfo.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Áreas de Expertise */}
            <div className="expertise-card">
              <h4>{language === 'ptBR' ? 'Áreas de Expertise' : 'Expertise Areas'}</h4>
              <div className="expertise-list">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="expertise-item">
                    <div className="expertise-icon" style={{ color: area.color }}>
                      {area.icon}
                    </div>
                    <div className="expertise-content">
                      <h5>{area.title}</h5>
                      <p>{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ferramentas & Tecnologias */}
            <div className="tools-card">
              <h4>{language === 'ptBR' ? 'Ferramentas & Tecnologias' : 'Tools & Technologies'}</h4>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <div className="tool-icon">
                      {tool.icon}
                    </div>
                    <div className="tool-info">
                      <span className="tool-name">{tool.name}</span>
                      <span className="tool-category">{tool.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
              {/* Card CTA com WhatsApp */}
              <div className="cta-card">
                <div className="cta-content">
                  <FiUsers className="cta-icon" />
                  <div>
                    <h4>{language === 'ptBR' ? 'Vamos Trabalhar Juntos?' : 'Let\'s Work Together?'}</h4>
                    <p>
                      {language === 'ptBR' 
                        ? 'Pronto para novos desafios em QA e desenvolvimento'
                        : 'Ready for new challenges in QA and development'}
                    </p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/5581996467607" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button whatsapp-button"
                >
                  <svg 
                    className="whatsapp-icon"
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  {language === 'ptBR' ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}
                </a>
              </div>
            
          </div>
        </div>

        {/* Destaque de Projetos */}
        <div className="projects-highlight">
          <div className="highlight-content">
            <FiBookOpen className="highlight-icon" />
            <div>
              <h4>
                {language === 'ptBR' 
                  ? '10+ Projetos Entregues com Qualidade'
                  : '10+ Projects Delivered with Quality'}
              </h4>
              <p>
                {language === 'ptBR'
                  ? 'Desenvolvimento Front-End com cobertura de testes e boas práticas de QA'
                  : 'Front-End development with test coverage and QA best practices'}
              </p>
            </div>
          </div>
          <div className="highlight-stats">
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">{language === 'ptBR' ? 'Satisfação' : 'Satisfaction'}</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">{language === 'ptBR' ? 'Cobertura' : 'Coverage'}</span>
            </div>
            <div className="stat">
              <span className="stat-number">0</span>
              <span className="stat-label">{language === 'ptBR' ? 'Bugs Críticos' : 'Critical Bugs'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;