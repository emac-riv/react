import React, { useState } from 'react'

const ContactForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [specialist, setSpecialist] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (!fullName || !email || !specialist) {
            setError ('Please fill in all fields!');
        }
        else {
            setError ('')
            alert ('Form submitted. Thank you!')
            setFullName ('')
            setEmail ('')
            setSpecialist ('')
        }
    }

  return (
    <div>
        <section className='contact-page'>
            <div className='contact-left'>
                <h2>Contact us</h2>
                <div className='contact-options'>
                    <img src="/images/email-us.svg" alt="Bild på en ikon som symboliserar ett brev" className='contact-icon'/>
                    <div>
                        <h3>Email us</h3>
                        <p>Please feel free to drop us a line. We will respond as soon as possible</p>
                        <a href="/">Leave a message</a>
                        <img src="/images/arrow-right.svg" alt="Pil som pekar åt höger" />
                    </div>
                </div>
                <div className='contact-options'>
                    <img src="/images/careers-icon.svg" alt="" />
                    <div>
                        <h3>Careers</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, quidem officiis!</p>
                        <a href="/">Send an application</a>
                        <img src="/images/arrow-right.svg" alt="Pil som pekar åt höger" />
                    </div>
                </div>
            </div>
            <div className='contact-right'>
                <h2>Get Online Consultation</h2>
                <form className='consultation-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full name"  value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required/>
                    <input type="email" placeholder="Email Adress"  value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required/>
                    <input type="text" placeholder="Specialist"  value={specialist}
                            onChange={(e) => setSpecialist(e.target.value)}
                            required/>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type='submit'>Make an appointment</button>                    
                </form>
            </div>
        </section>
    </div>
  )
}

export default ContactForm