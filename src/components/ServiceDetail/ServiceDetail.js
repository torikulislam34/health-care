import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const [services, setServices] = useState()

    const{id} = useParams();
    
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])

    // console.log(services);
    const matchService = services?.find(service =>service?.id == id);
    // const{title,img,name,time,price,dis}  = matchService;

    return (
        <div>
            <div className="card m-3 w-75 mx-auto bg-dark text-white">
             <img src={matchService?.img} className="card-img-top"  alt="..."/>
            <div className="card-body">
               <h5 className="card-title text-warning">{matchService?.title}</h5>
               
               <h4>Price: <span style={{color:'tomato'}}>${matchService?.price}</span>/Month</h4>
               <p className="card-text">Instructor : <small className="text-muted">{matchService?.name}</small> | Time: <small> {matchService?.time}</small></p>
               <p className="card-text"> <span className ='fw-bold text-warning'>Discription: </span>{matchService?.dis}</p>
              
             </div>
          </div>
        </div>
    ); 
};

export default ServiceDetail;