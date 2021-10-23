import React from 'react';
import image1  from '../../images/center/center1.jpg';
import image2  from'../../images/center/center2.jpg';
import image3  from'../../images/center/center3.jpg';
import './FeetnessCenter.css'


const FeetnessCenter = () => {

    return (
        <div className='conatiner feetness-container text-white p-4'>
            <h1 className= 'text-center pt-3'>Health <span className ='text-primary'>Care</span> </h1>
              <div className="row pt-3">
               <div className='col-md-4 col-12'>
                   <img src={image1} alt="" />
                   <h4 className ='mt-3'>Fitness Center</h4>
               </div>
               <div className= 'col-md-4 col-12'>
                   <img src={image2} alt="" />
                   <h4 className ='mt-3'>Trainning Center</h4>
               </div>
               <div className ='col-md-4 col-12'>
                   <img src={image3} alt="" />
                   <h4 className ='mt-3'>Yoga Center</h4>
               </div>
                
             </div>
        </div>
    );
};

export default FeetnessCenter;