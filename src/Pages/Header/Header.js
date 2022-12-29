import React, { useContext, useEffect } from 'react';
import { FaFacebookMessenger, FaHome, IconName } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
      logOut()
        .then(() => {
  
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        <li><Link to ="/" >Home</Link></li>
                        <li><Link to ="/media">Media</Link></li>
                        <li><Link to ="/about">About</Link></li>
                        {user?.uid ?
        <>
          {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
         {/* // <li><Link to={`/showDetails/${mongoUser._id}`}>WishList</Link></li> */}
          
         
          {/* <li><Link to="/profile"> Profile</Link></li> */}
          <li><button onClick={handleLogOut}>Sign out</button></li>
        </>
        : 
        <>
         <li><Link to="/login">Login</Link></li>
        <li><Link to="/signUp">Register</Link></li>
        </>
       
        }
                            <FaFacebookMessenger></FaFacebookMessenger>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex text-cyan-700 text-xl ">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to ="/" >Home</Link></li>
                        <li><Link to ="/media">Media</Link></li>
                        <li><Link to ="/about">About</Link></li>
                        {user?.uid ?
        <>
          {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
         {/* // <li><Link to={`/showDetails/${mongoUser._id}`}>WishList</Link></li> */}
          
         
          {/* <li><Link to="/profile"> Profile</Link></li> */}
          <li><button onClick={handleLogOut}>Sign out</button></li>
        </>
        : 
        <>
         <li><Link to="/login">Login</Link></li>
        <li><Link to="/signUp">Register</Link></li>
        </>
       
        }
                    </ul>
                </div>
                <div className="navbar-end">
                   
                   <FaFacebookMessenger className='mt-2 ' color='#4267B2' ></FaFacebookMessenger> 
                   
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;