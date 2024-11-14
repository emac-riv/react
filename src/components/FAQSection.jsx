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
          {/* <div className="faq-item">
            <div className="faq-questions">
              <h3>Is any of my personal information stored in the App?</h3>
              <img src="/images/more-arrow.svg" alt="" />
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-questions">
              <h3>What formats can I download my transaction history in?</h3>
              <img src="/images/more-arrow.svg" alt="" />
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-questions">
              <h3>Can I schedule future transfers?</h3>
              <img src="/images/arrow-up.svg" alt="" />
            </div>
            <div className="faq-answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maiores ut, beatae odio possimus nihil, non voluptas magni distinctio iste tempora at. Nulla, ducimus et quo corporis est quam non perferendis delectus soluta cumque, ad tempore odio eius veritatis iusto impedit distinctio ut molestiae beatae. Corporis quidem quam soluta excepturi.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-questions">
              <h3>When can I use Banking App services?</h3>
              <img src="/images/more-arrow.svg" alt="" />
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-questions">
              <h3>Can I create my own password that is easy for me to remember?</h3>
              <img src="/images/more-arrow.svg" alt="" />
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-questions">
              <h3>What happens if I forget or lose my password?</h3>
              <img src="/images/more-arrow.svg" alt="" />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default FAQSection