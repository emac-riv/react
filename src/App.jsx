import React from 'react'
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  return (
    <BrowserRouter>
      <Header />
        <main>
          <Routes>
            <Route path='/'element={ 
              <>
              <Hero />
              <Features />
              <HistorySection />
              <OverviewSection />
              <Feedback />
              <FAQSection />
              <Newsletter />
            </>
          }/>
            <Route path='/contact' element={
              <>
              <ContactForm/>
              <LocationSection />
              </>
              }/>
              <Route path='/features' element={
                <Features/>}/>
          </Routes>          
        </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App