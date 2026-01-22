import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiGlobe } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import profileImage from '../../Assets/profile.png';
import './Hero.css';

const Hero = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const techStack = [
    'MySQL',
    'React.js', 
    'IA/IA',
    'Angular',
    'Pega System',
    'Power BI',
    'Excel',
    'JIRA'
  ];

  // Efeito de digitação
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % techStack.length;
      const fullText = techStack[i];
      
      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, techStack]);

  // Efeito parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links sociais
  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/zeth-I/zeth-I', color: '#333' },
    { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/devjlcbraga/', color: '#0077B5' },
    { icon: <FiMail />, label: 'Email', href: 'mailto:jlcbraga@outlook.com', color: '#D44638' }
  ];

  // Tech icons
  const techIcons = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#68A063' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaDatabase />, name: 'MySQL', color: '#47A248' }
  ];

  return (
    <section className="hero" id="home">
      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div 
          className="bg-circle bg-circle-1" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="bg-circle bg-circle-2"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="bg-circle bg-circle-3"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>

      <div className="container">
        <div className="hero-content">
          
          {/* Coluna do Texto */}
          <div className="hero-text-col">
            <div className="hero-badges">
              <span className="hero-badge">
                <FiCode /> {language === 'ptBR' ? 'Disponível para projetos' : 'Available for projects'}
              </span>
            </div>

            <div className="hero-heading">
              <h2 className="hero-greeting">{t('hero.greeting')}</h2>
              <h1 className="hero-name">
                José Lucas Cabral Braga
                <span className="name-highlight">.</span>
              </h1>
              <div className="hero-tagline-wrapper">
                <h2 className="hero-tagline">{t('hero.tagline')}</h2>
                <span className="typing-cursor">|</span>
              </div>
            </div>

            <p className="hero-description">
              {t('hero.description')}
            </p>

            {/* Tech Stack Animated */}
            <div className="tech-stack-animated">
              <span className="tech-label">
                {language === 'ptBR' ? 'Especializado em:' : 'Specialized in:'}
              </span>
              <span className="typing-text">{typedText}</span>
            </div>


            {/* Social Links */}
            <div className="hero-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>{t('stats.projects')}</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>{t('stats.experience')}</p>
              </div>
              <div className="stat-item">
                <h3>∞</h3>
                <p>{t('stats.coffee')}</p>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem/Ilustração */}
          <div className="hero-image-col">
            <div className="hero-image-wrapper">
              {/* Avatar/Ilustração */}
              <div className="hero-avatar">
                <div className="avatar-container">
                  <img 
                    src={profileImage} 
                    alt="José Lucas Cabral Braga - Desenvolvedor Front-End & QA"
                    className="profile-image"
                  />
                  <div className="avatar-overlay">
                    <div className="overlay-content">
                      <span className="overlay-text">Quality Assurance</span>
                      <span className="overlay-text">Front-End Developer</span>
                    </div>
                  </div>
                </div>
                {/* Tech Icons Flutuantes */}
                {techIcons.map((tech, index) => (
                  <div 
                    key={index}
                    className="floating-tech-icon"
                    style={{
                      '--delay': `${index * 0.5}s`,
                      '--tech-color': tech.color,
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <div className="tech-icon-wrapper">
                      {tech.icon}
                    </div>
                    <span className="tech-tooltip">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Card de Destaque */}
              <div className="highlight-card">
                <div className="highlight-card-content">
                  <FiCode className="highlight-icon" />
                  <div>
                    <h4>{language === 'ptBR' ? 'Código Limpo' : 'Clean Code'}</h4>
                    <p>{language === 'ptBR' ? 'Práticas e padrões' : 'Best practices & patterns'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">
            {language === 'ptBR' ? 'Role para explorar' : 'Scroll to explore'}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;