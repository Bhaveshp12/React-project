import React from 'react';

function Drive(props) {
    return (
       <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-4">
                    <img src="img/usermanagement.png" alt="um" />
                </div>
                <div className="col-8 secure">
                    <span>Secure & reliable</span>
                    <h2>Dependability you can trust <br /> to run your business</h2>
                    <p>Podio’s stability (99.99% uptime last year) and intuitive interface makes <br />
                         deployment straightforward. And as part of Citrix, we adhere to the most <br />
                          rigorous security standards.</p>
                    <button className='mybtn'>Learn More</button>
                    <span><a href="#" className='mx-5'>Download our Security Whitepaper</a></span>
                </div>
            </div>
        </div>
       </>
    );
}

export default Drive;