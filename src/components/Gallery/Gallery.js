import React from 'react';
import img1 from '../../images/gallery/gallery01.jpg';
import img2 from '../../images/gallery/gallery02.jpg';
import img3 from '../../images/gallery/gallery03.jpg';
import img4 from '../../images/gallery/gallery04.jpg';
import img5 from '../../images/gallery/gallery05.jpg';
import img6 from '../../images/gallery/gallery06.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <div className ='container'>
            <h1 className= 'text-center mt-5 fw-bold'><span className ='text-primary'>SEE </span> GALLAERY</h1>
                <div className="row">
                    <div className ='container row gallary-btn mt-4 '>
                    <div className="col-md-3 col-12 p-2 ps-1"><button>ALL</button></div>
                    <div className="col-md-2 col-12 p-2 ps-1"><button>GYM</button></div>
                    <div className="col-md-3 col-12 p-2 ps-1"><button>FITNESS</button></div>
                    <div className="col-md-2 col-12 p-2 ps-1"><button>YOGA</button></div>
                    <div className="col-md-2 col-12 p-2 ps-1"><button>RUNNING</button></div>
                </div>
                </div>

                {/* Gallary Photo Album*/}
                <div className= 'row mt-3 border border-2 rounded p-3 gallary'>
                    
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-primary rounded-top' src={img1} alt="" />
                    </div>
                    <div className  = 'col-md-4 pt-4'>
                        <img className ='w-75  border border-3 border-success rounded-top' src={img2} alt="" />
                    </div>
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-danger rounded-top' src={img3} alt="" />
                    </div>
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-warning rounded-top' src={img4} alt="" />
                    </div>
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-info rounded-top' src={img5} alt="" />
                    </div>
                    <div className  = 'col-md-4 pt-4'>
                        <img className ='w-75 border border-3 border-dark rounded-top' src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;