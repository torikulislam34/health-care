import React from 'react';

import trainer1 from '../../images/trainers/expert02.jpg'
import trainer2 from '../../images/trainers/expert01.jpg'
import trainer3 from '../../images/trainers/expert03.jpg'

const Expertise = () => {
    return (
<div className='container mt-4 pb-3'>
<h1 className= 'text-center mt-5 pb-3 fw-bold'>SEE <span className='text-primary'>EXPERTS</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={trainer1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text" style={{color:'brown'}}>Fitness Trainer</p>
        <button className='details'>Contact Us</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={trainer2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Selina Stuart</h4>
        <p className="card-text" style={{color:'brown'}}>Fitness Trainer</p>
        <button className='details'>Contact Us</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={trainer3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Williamson</h5>
        <p className="card-text" style={{color:'brown'}}>Fitness Trainer</p>
        <button className='details'>Contact Us</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Expertise;