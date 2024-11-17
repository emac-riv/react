import React from 'react'

const OverviewSection = () => {
    return (
        <div>
            <section className="overview-section">
                <div className="overview-item">
                    <div className="overview-content">
                        <h2>Make your money <br /> transfer simple and clear</h2>
                        <ul className="overview-list">
                            <li><img src="/images/check-circle.svg" alt="Checkmark" /> Banking transactions are free for you</li>
                            <li><img src="/images/check-circle.svg" alt="Checkmark" /> No monthly cash commission</li>
                            <li><img src="/images/check-circle.svg" alt="Checkmark" /> Manage payments and transactions online</li>
                        </ul>
                        <button className="overview-button">
                            <img src="/images/Learnmore.svg" alt="Lär dig mer" />
                        </button>
                    </div>
                    <div className="overview-image">
                        <img src="/images/sep-forecast.svg" alt="Graf som visar data" />
                    </div>
                </div>

                <div className="overview-item">
                    <div className="overview-image">
                        <img src="/images/contacts.svg" alt="Kontaktlista med ett exempel på ett kreditkort" />
                    </div>
                    <div className="overview-content">
                        <h2>Recieve payment from <br /> international bank details</h2>
                        <div className="mini-overview">
                            <div className="mini-item">
                                <img src="/images/payments-online.svg" alt="Ikon som liknar ett kreditkort" />
                                <p>Manage your payments online. Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="mini-item">
                                <img src="/images/lorem-icon.svg" alt="Ikon" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquam!</p>
                            </div>
                        </div>
                        <button className="overview-button">
                            <img src="/images/Learnmore.svg" alt="Lär dig mer" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OverviewSection