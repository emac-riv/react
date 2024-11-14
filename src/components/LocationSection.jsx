import React from 'react'

const LocationSection = () => {
  return (
    <div>
        <section className='location-section'>
            <div className='map-container'>
                <img src="/images/location-points.svg" alt="Geografisk bild" />
            </div>
            <div className='location-info'>
                <div className='medical-center'>
                    <h3>Medical Center 1</h3>
                    <div className='contact-info'>
                        <img src="/images/map-icon.svg" alt="Lokaliseringsikon" />
                        <p>4517 Washington Ave, Manchester, Kentucky 39495</p>
                    </div>
                    <div className='contact-info'>
                        <img src="/images/phone-call-icon.svg" alt="Telefonikon" />
                        <p>(406) 555-0120</p>
                    </div>
                    <div className='contact-info'>
                        <img src="/images/clock-icon.svg" alt="Klockikon" />
                        <p><span className='bold-text'>Mon - Fri:</span> 9:00 am - 22:00 pm <br />
                            <span className='bold-text'>Sat - Sun:</span> 9:00 am - 20:00 pm</p>
                    </div>
                </div>
                <div className='medical-center'>
                    <h3>Medical Center 2 </h3>
                    <div className='contact-info'>
                        <img src="/images/map-icon.svg" alt="Lokaliseringsikon" />
                        <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                    </div>
                    <div className='contact-info'>
                        <img src="/images/phone-call-icon.svg" alt="Telefonikon" />
                        <p>(406) 544-0123</p>
                    </div>
                    <div className='contact-info'>
                        <img src="/images/clock-icon.svg" alt="Klockikon" />
                        <p><span className='bold-text'>Mon - Fri:</span> 9:00 am - 22:00 pm <br />
                            <span className='bold-text'>Sat - Sun:</span> 9:00 am - 20:00 pm</p>
                    </div>
                </div>
                <div className='socials-icons'>
                    <a href="/"><img src="/images/Facebook-icon.svg" alt="Facebookikon" /></a>
                    <a href="/"><img src="/images/twitter-icon.svg" alt="Twitterikon" /></a>
                    <a href="/"><img src="/images/instagram-icon.svg" alt="Instagramikon" /></a>
                    <a href="/"><img src="/images/youtube-icon.svg" alt="Youtubeikon" /></a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LocationSection