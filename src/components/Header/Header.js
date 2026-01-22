import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiSun, 
  FiMoon, 
  FiMenu, 
  FiX, 
  FiHome, 
  FiBook, 
  FiCode, 
  FiUser, 
  FiPlayCircle,
  FiGlobe 
} from 'react-icons/fi';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Verificar preferência do sistema
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle do modo noturno
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  // Fechar menu mobile ao clicar em um link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Textos baseados no idioma
  const navItems = [
    { 
      id: 'home', 
      icon: <FiHome className="nav-icon" />, 
      label: language === 'ptBR' ? 'Início' : 'Home',
      to: '/',
      type: 'link'
    },
    { 
      id: 'about', 
      icon: <FiUser className="nav-icon" />, 
      label: language === 'ptBR' ? 'Sobre' : 'About',
      href: '#about',
      type: 'anchor'
    },
    { 
      id: 'skills', 
      icon: <FiCode className="nav-icon" />, 
      label: language === 'ptBR' ? 'Skills' : 'Skills',
      href: '#skills',
      type: 'anchor'
    },
    { 
      id: 'library', 
      icon: <FiBook className="nav-icon" />, 
      label: language === 'ptBR' ? 'Biblioteca' : 'Library',
      to: '/conhecimentos',
      type: 'link'
    },
    { 
      id: 'playground', 
      icon: <FiPlayCircle className="nav-icon" />, 
      label: language === 'ptBR' ? 'Playground QA' : 'Playground QA',
      to: '/playground',
      type: 'link'
    }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="header-content">
          
          {/* LOGO */}
          <div className="logo">
            <Link to="/" onClick={closeMobileMenu}>
              <div className="logo-text">
                <span className="logo-icon">&lt;/&gt;</span>
                <span className="logo-name">DevZeth</span>
              </div>
            </Link>
          </div>

          {/* MENU DE NAVEGAÇÃO */}
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="nav-links">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link 
                    key={item.id}
                    to={item.to} 
                    onClick={closeMobileMenu} 
                    className="nav-link"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <a 
                    key={item.id}
                    href={item.href} 
                    onClick={closeMobileMenu} 
                    className="nav-link"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                )
              ))}
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div className="header-actions">
              
              {/* TOGGLE IDIOMA */}
              <button 
                className="language-toggle"
                onClick={toggleLanguage}
                aria-label={language === 'ptBR' ? "Switch to English" : "Mudar para Português"}
                title={language === 'ptBR' ? "English" : "Português"}
              >
                <FiGlobe className="language-icon" />
                <span className="language-code">
                  {language === 'ptBR' ? 'EN' : 'PT'}
                </span>
              </button>
            
              {/* TOGGLE MODO NOTURNO */}
              <button 
                className="theme-toggle"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 
                  (language === 'ptBR' ? "Ativar modo claro" : "Enable light mode") : 
                  (language === 'ptBR' ? "Ativar modo escuro" : "Enable dark mode")
                }
              >
                {darkMode ? (
                  <FiSun className="theme-icon" />
                ) : (
                  <FiMoon className="theme-icon" />
                )}
              </button>

              {/* BOTÃO CV/DOWNLOAD */}
              <a 
                href="/cv.pdf" 
                className="btn-cv"
                download
              >
                {language === 'ptBR' ? 'Baixar CV' : 'Download CV'}
              </a>
            </div>
          </nav>

          {/* BOTÃO MENU MOBILE */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 
              (language === 'ptBR' ? "Fechar menu" : "Close menu") : 
              (language === 'ptBR' ? "Abrir menu" : "Open menu")
            }
          >
            {mobileMenuOpen ? (
              <FiX className="toggle-icon" />
            ) : (
              <FiMenu className="toggle-icon" />
            )}
          </button>
        </div>
      </div>

      {/* OVERLAY DO MENU MOBILE */}
      {mobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;