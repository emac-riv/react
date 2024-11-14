import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <section className="newsletter-section">
    <div className="newsletter-content">
        <img src="/images/notifications.svg" alt="Notification Icon"/>
        <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
        <form className="subscribe-form">
            <input type="email" placeholder="Your email"/>
            <button type="submit">
                <img src="/images/subscribe.svg" alt="Subscribe Icon"/>            
            </button>
        </form>
    </div>
</section>
    </div>
  )
}

export default Newsletter