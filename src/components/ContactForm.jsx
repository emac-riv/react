import React, { useState } from 'react'

const ContactForm = () => {
    const [FullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [specialist, setSpecialist] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (!fullName || !email || !specialist) {
            setError ('Fyll i alla fält!');
        }
        else {
            setError ('');
            alert ('Formuläret skickat!')
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
                <form className='consultation-form'>
                    <input type="text" placeholder="Full name" required/>
                    <input type="email" placeholder="Email Adress" required/>
                    <input type="text" placeholder="Specialist" required/>
                    <button type='submit'>Make an appointment</button>                    
                </form>
            </div>
        </section>
    </div>
  )
}

export default ContactForm