import React from 'react';
import './Notfound.css';
import notFound from '../../images/Notfound/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='notfound-img' src={notFound} alt="" />
            <h2 className ='text-primary mt-2'>Your Page is Not Founded</h2>
        </div>
    );
};

export default NotFound;