import React, { createContext, useState, useContext, useEffect } from 'react';

// Textos em português
const ptBR = {
  hero: {
    greeting: "Olá, eu sou",
    name: "Desenvolvedor Full Stack",
    tagline: "Transformando ideias em soluções digitais",
    description: "Profissional de tecnologia com experiência em Quality Assurance e base em desenvolvimento Front-end, atuando com testes funcionais, análise de requisitos e construção de interfaces com Angular e React. Possuo visão de produto, aprendizado rápido e facilidade de adaptação a diferentes times e desafios. Busco contribuir para soluções bem testadas, funcionais e orientadas à experiência do usuário.",
  },
  stats: {
    projects: "Projetos",
    experience: "Experiência",
    coffee: "Cappucino"
  }
};

// Textos em inglês
const enUS = {
  hero: {
    greeting: "Hello, I'm",
    name: "Full Stack Developer",
    tagline: "Transforming ideas into digital solutions",
    description: "Technology professional with experience in Quality Assurance and a background in Front-end development, working with functional testing, requirements analysis, and interface development using Angular and React. I have a product-oriented mindset, fast learning ability, and adaptability to different teams and challenges. I seek to contribute to well-tested, functional solutions focused on user experience.",
  },
  stats: {
    projects: "Projects",
    experience: "Experience",
    coffee: "Cappucino"
  }
};

// Criar o contexto
const LanguageContext = createContext();

// Provedor do contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ptBR');
  const [translations, setTranslations] = useState(ptBR);

  // Verificar idioma salvo no localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'ptBR' || savedLanguage === 'enUS')) {
      setLanguage(savedLanguage);
      setTranslations(savedLanguage === 'enUS' ? enUS : ptBR);
    }
  }, []);

  // Alternar idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'ptBR' ? 'enUS' : 'ptBR';
    setLanguage(newLanguage);
    setTranslations(newLanguage === 'enUS' ? enUS : ptBR);
    localStorage.setItem('language', newLanguage);
  };

  // Traduzir função (opcional, para uso em componentes)
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Retorna a chave se não encontrar tradução
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageProvider');
  }
  return context;
};