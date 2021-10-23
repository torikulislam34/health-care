import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
        <div className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="left-container text-start">  
                           <h2>HEALTH-CARE</h2>
                            <p>Our Main Focus is Global Healthcare &&  Technologys.  </p>
                            <p><small> Health-Care © . All rights reserved.</small></p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <ul className="footer-menu">
                                <li className="menu">Home</li>
                                <li className="menu">Services</li>
                                <li className="menu">About</li>
                                <li className="menu">Details</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact-us">
                            <h2>Contact With Our Platform</h2>
                             <input className='form-control mt-5'  type="text" placeholder ='please enter your email' />
                             <h5 className= 'text-start text-warning'>Phone : +66 223 7900 24</h5>
                             <div className ='address text-start'>
                                 <p>Barishal, Jalokati, Bangladesh</p>
                                <p>812, Dhaka, Bangladesh</p>
                                <p>B6, Green Road</p>

                             </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;