import React, { useState } from 'react'
import './styles.css';
import { BrowserRouter, Routes, Route, useActionData } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Header from './components/Header'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import HistorySection from './components/HistorySection';
import OverviewSection from './components/OverviewSection';
import Feedback from './components/Feedback';
import FAQSection from './components/FAQSection';
import Newsletter from './components/Newsletter';
import LocationSection from './components/LocationSection';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    if (!darkMode) { document.body.classList.add('dark-mode') }
    else { document.body.classList.remove('dark-mode') }
  }


  return (
    <BrowserRouter>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Features darkMode={darkMode} />
              <HistorySection />
              <OverviewSection />
              <Feedback darkMode={darkMode} />
              <FAQSection />
              <Newsletter />
            </>
          } />
          <Route path='/contact' element={
            <>
              <ContactForm />
              <LocationSection />
            </>
          } />
          <Route path='/features' element={
            <Features />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App