import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero'
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">

      <Header className="Header">  
          <Header />
      </Header>

      <section className="Hero"> 
        <Hero />
      </section>

      <section className="About">
        <About/> 
      </section>

      <section className="Skills">
        <Skills/>
      </section>

      <footer className="Footer">
        <Footer/>
      </footer>

    </div>
  );
}

export default Home;