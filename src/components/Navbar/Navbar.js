import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
   const{user, logOut} = useAuth();
   console.log(user);
    return (
        <div>
            <nav className="navbar  sticky-top navbar-expand-lg navbar-black bg-black  " >
             <div className="container-fluid">
                 <img className='logo-img' src={logo} alt="" />
                 <br />
                 <p className='text-head'>HEALTH-CARE</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle  navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarText">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                    <Link to='/home'>HOME</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/about'>ABOUT</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/gallery'>GALLERY</Link>
                 </li>
                 <li className="nav-item">
                    <Link to ='/services'>SERVICES</Link>
                 </li>
                 <li className="nav-item">
                    <Link to='/trainers'>EXPARTS</Link>
                 </li>
                 <li className="nav-item">
                    <Link to='/blog'>BLOG</Link>
                 </li>
               </ul>
               <div className='row w-25 mx-auto'>
                  <div className ='col'>
                  <span className='text-white pe-2'>Login As: {user?.displayName}</span>          
                  </div>
                  <div className ='col'>
                  {
                  user?.email?
                  <button onClick = {logOut} className='btn btn-danger'>Log Out</button>:
                  <Link to='/login'><button className='btn btn-danger'>Login</button></Link>
                   }
                  </div>
               </div>
            </div>
          </div>
         </nav>
        </div>
    );
};

export default Navbar;