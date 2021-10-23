import React from 'react';
import blog1 from '../../images/blog/blog01.jpg';
import blog2 from '../../images/blog/blog02.jpg';
import blog3 from '../../images/blog/blog03.jpg';

const Blog = () => {
    return (
<div className='container'>
<h1 className= 'text-center mt-5 pb-3 fw-bold '>SEE <span className ='text-primary'>BLOG</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
  <div className="col">
    <div className="card h-100">
      <img src={blog1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>BEST GYM IN PATNA</h5>
        <p className="card-text text-start">Looking to lose that extra belly fat? Or are you looking to build your dream physique or maybe you are just looking for the best gym in Patna? Well, if your answer to any of the above question is affirmative, you are in the right place. The gym is a good place to work out your body to keep a healthy lifestyle. It is one of the best ways to exercise effectively. </p>
        <button className='details'>More..</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={blog2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>BEST GYM IN KANKARBAGH PATNA</h5>
        <p className="card-text text-start">Research suggests that the secret to good health is physical exercise and activity, leading to fitness which is likely to reduce health risks to a great extent. A lot of diseases are known to develop because of the lack of some kind of physical fitness related activity in the daily routine.</p>
        <button className='details'>More..</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img src={blog3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'brown'}}>BEST STRENGTH TRAINING GYM IN PATNA</h5>
        <p className="card-text text-start ">Still staring yourself in front of a mirror and wondering could I look much more attractive? Days, weeks, months and years are passing by and you are still making weight losing New Year resolutions. Looking for the best strength training gym in Patna and still coming up short?</p>
        <button className='details'>More..</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Blog;