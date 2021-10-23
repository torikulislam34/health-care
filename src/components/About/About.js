import React from 'react';
import aboutImg  from '../../images/About/aboutImg.jpg';
import './About.css'

const About = () => {

    return (
        <div >
            <div className = "container mt-5 text-start">
            <h1 className= 'text-center m-4 fw-bold'>About<span className ='text-primary'> US</span> </h1>
            <div className = 'row'>
                <div className = 'col-md-6 col-12 about-left'>
                    <h2 className ='fst-italic' style ={{color:'hsl(14, 80%, 45%)'}}>Welcome To</h2>
                    <h1 className ='fw-bold mt-3'>CARE PROGRAMME</h1>

                    <h4 className ='mt-4'>Use HEALTH-CARE™ during Private Training, Classes or independent homework.</h4>
                    <p>FEET-NESS is a fresh new workout that will leave your clients feeling strong, centered and balanced from head to toe. By integrating innovative movements that target the feet with your preferred workout (or with the discipline you are an expert at – Yoga, Pilates, Barre, Circuit Training…), you’ll deliver a TRUE FULL BODY workout that restores the mind-body balance we all so desperately need.</p>
                    <div className="gallary-btn">
                        <button>MORE..</button>
                    </div>
                </div>
                <div className = 'col-md-6 col-12'>
                    <img className ='img-fluid about-img' src={aboutImg} alt="" />
                </div>
            </div>
          </div>
          {/* about footer */}
          <div className ='container text-start about-footer' style = {{backgroundColor:'hsl(10, 50%, 35%)', color:'white'}} >
          <div className ='row'>
             <div className =' col-md-12 col-12 mt-4 text-center'>
                <h1>Join Now !</h1>
                <p>Aenean non mauris vel nisl pulvinar malesuada ut non dui. Praesent ante nisi, varius vitae tincidunt rutrum, suscipit id mauris. Nunc et porta quam, et porttitor lorem. In sagittis nisl non quam varius, iaculis scelerisque urna bibendum. Pellentesque molestie, felis suscipit maximus ultricies.</p>
                <div className="learn">
                <button className='about-btn'>JOIN NOW</button>
                </div>
            </div>
          </div>
          </div>
        </div>
    );
};

export default About;