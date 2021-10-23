import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {title,img,name,time,price,dis,id} = props.service; 
    return (
        <div>
            
            <div className="col">
              <div className="card h-100">
               <img src={img} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title fw-bold" style={{color:'brown'}}>{title}</h5>
               <p>Instructor: {name} | <span>Start:  {time} am</span></p>
               <h4>Price: <span style={{color:'brown'}}>${price}</span>/Month</h4>
               <p className='text-center'><span className='fw-bold '>Discription: </span> {dis.slice(0,90)}.</p>
               
               <Link to={`/service/${id}`}>
                  <button className = 'details'>Details</button> 
               </Link>
                    
               </div>
             </div>
            </div>
        </div>
    );
};

export default Service;