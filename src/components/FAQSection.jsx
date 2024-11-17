import React, { useEffect, useState } from 'react'
import FaqItem from './FaqItem'

const FAQSection = () => {
  const [faqQuestions, setQuestions] = useState([]);

  async function getQuestions() {
    const res = await fetch("https://win24-assignment.azurewebsites.net/api/faq",
      { headers: { "Content-Type": "application/json" } })
    const fetchedData = await res.json();

    setQuestions(fetchedData);
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <div>
      <section className="faq-section">
        <div className="faq-header">
          <h2>Any questions? <br />Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get <br />in touch?</p>
          <div className="contact-options">
            <div className="contact-option">
              <img src="/images/phone-icon.svg" alt="" />
              <p>Still have questions?</p>
              <a href="#">Contact us <img src="/images/purple-arrow.svg" alt="" /></a>
            </div>
            <div className="contact-option">
              <img src="/images/message-icon.svg" alt="" />
              <p>Don't like phone calls?</p>
              <a href="#">Contact us <img src="/images/green-arrow.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="faq-items">
          {
            faqQuestions?.map((item) => {
               return <FaqItem key={item.id} title={item.title} content={item.content} />
            })
          }
        </div>
      </section>
    </div>
  )
}

export default FAQSection