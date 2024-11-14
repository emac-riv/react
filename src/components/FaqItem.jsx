import React from 'react'

function FaqItem({title, content}) {
  return (
    <div className='faq-item'>
        <div className='faq-questions'>
            <h3>{title}</h3>           
            <img src="/images/more-arrow.svg" alt="Pil nedåt" /> 
        </div>
        <div className='faq-answer'>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default FaqItem