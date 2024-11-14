import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="gradient">
        <section className="hero">  
          <div className="hero-text">
            <h1>Manage All Your <br/> Money in One App</h1>
            <p>We offer you a new generation of the mobile banking. 
            <br/> Save, spend & manage money in your pocket</p>
            <div className="app-buttons">
              <img src="/images/appstore.svg" alt="Knapp för att ladda ner appen genom App Store"/>                
              <img src="/images/googleplay.svg" alt=" Knapp för att ladda ner appen genom Google Play"/>                
            </div>
          </div>   
          <div className="hero-image">
              <img src="/images/Första sidan telefon.svg" alt="2 telefoner som förhandsvisar appen"/>
            </div>
            <div className="next-arrow">
              <button>
              <img src="/images/next-btn.svg" alt="Pil neråt"/>
              <p>Discover more</p>
              </button>   
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero