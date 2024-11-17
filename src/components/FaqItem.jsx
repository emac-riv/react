import React, { useState } from 'react'

function FaqItem({title, content}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleopen = () => {
        setIsOpen (!isOpen)
    }

  return (
    <div className='faq-item'>
        <div className='faq-questions' onClick={toggleopen}>
            <h3>{title}</h3>           
            <img src={isOpen? "/images/arrow-up.svg" : "/images/more-arrow.svg"} alt="Pil nedåt" /> 
        </div>
        {isOpen && (
            <div className='faq-answer'>
            <p>{content}</p>
        </div>
    )}

    </div>
  )
}

export default FaqItem