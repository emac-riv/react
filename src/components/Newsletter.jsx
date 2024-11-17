import React, { useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!email.trim()) {
            setError('Valid email required to subscribe.')
        } else {
            setError('')
            alert('Thank you for subscribing!')
            setEmail ('')
        }
    }


    return (
        <div>
            <section className="newsletter-section">
                <div className="newsletter-content">
                    <img src="/images/notifications.svg" alt="Notification Icon" />
                    <h3>Subscribe to our newsletter to stay informed about latest updates</h3>
                    <form className="subscribe-form" onSubmit={handleSubmit}>
                        <div>
                            <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {error && <p className="error">{error}</p>}
                        </div>
                        <button type="submit">
                            <img src="/images/subscribe.svg" alt="Subscribe Icon" />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Newsletter