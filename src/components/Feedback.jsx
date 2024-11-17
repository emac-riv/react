import React, { useState, useEffect } from 'react'

const Feedback = ({ darkMode }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch("https://win24-assignment.azurewebsites.net/api/testimonials")
        const data = await response.json()
        setTestimonials(data)
      } catch (error) {
        console.error('Error fetching testimonials', error)
      }
    }
    fetchTestimonials()
  }, [])

  const renderStars  = (rating) => {
    const stars = []
    for (let i = 0; i <rating; i++){
      stars.push (<span key ={i}><img src="/images/star.svg" alt=""/></span>)
    }
    return stars
  }

  return (
    <div>
      <section className="feedback">
        <h2>Clients are Loving Our App</h2>
        {testimonials.map ((testimonial) => 
        <div key={testimonial.id} className='testimonial'>
          <img src="/images/quotes.svg" alt="citationsikon" className='quotes-icon'/>
          <div className="rating">{renderStars(testimonial.starRating)}</div>
          <p className='comment'>{testimonial.comment}</p>
          <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}></div>
          <img src={testimonial.avatarUrl} alt={`${testimonial.author}'s avatar`} />
          <p className='author'>{testimonial.author}</p>
          <p className='job-role'>{testimonial.jobRole}</p>
        </div>)}
      </section>
    </div>
  )
}

export default Feedback