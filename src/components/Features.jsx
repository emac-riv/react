import React from 'react'

const Features = () => {
  return (
    <div>
        <section className="features">
            <div className="logos">
                <img src="/images/logo.svg" alt=""/>
                <img src="/images/logo (1).svg" alt=""/>
                <img src="/images/logo (6).svg" alt=""/>
                <img src="/images/logoipssum.svg" alt=""/>
                <img src="/images/logoipsum2.svg" alt=""/>
                <img src="/images/logoipsum3.svg" alt=""/>
            </div>    

       <div className="features-container">
            <div className="phone-image">
                <img src="/images/sida2telefon.svg" alt="Telefonbild som visar appen"/>        
            </div>
       <div className="features-content">
            <h2>App Features</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore dolorum sequi, officiis
         a assumenda eaque quia iste veritatis maxime fugiat quo dicta temporibus adipisci.</p>        


         <div className="features-grid">
            <div className="feature">
                <img src="/images/payments.svg" alt="Icon Easy Payments"/>
                <div>
                    <h3>Easy Payments</h3>
                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
            </div>
            <div className="feature">
                <img src="/images/security.svg" alt="Icon Data Security"/>
                <div>
                    <h3>Data Security</h3>
                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                </div>
            </div>
            <div className="feature">
                <img src="/images/statistics.svg" alt="Icon Cost Statistics"/>
                <div>
                    <h3>Cost Statistics</h3>
                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
            </div>
            <div className="feature">
                <img src="/images/support.svg" alt="Icon Support"/>
                <div>
                    <h3>Support 24/7</h3>
                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
            </div>
            <div className="feature">
                <img src="/images/cashback.svg" alt="Icon Cashback"/>
                <div>
                    <h3>Regular Cashback</h3>
                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>
            </div>
            <div className="feature">
                <img src="/images/standards.svg" alt="Icon Top Standards"/>
                <div>
                    <h3>Top Standards</h3>
                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

    </div>
  )
}

export default Features