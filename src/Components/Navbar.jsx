import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/calendly-logo1.png'
import { FaAngleDown } from "react-icons/fa6";
import NavigationBtn from './NavigationBtn';
function Navbar() {
    return (
        <>
        <nav>
            <div className="navbar">
                <div className="navbar-left">
                <Link to='/'><img className='logo' src={logo} alt="Logo" /></Link>
                </div>
                <div className="navbar-mid">
                <Link to='/individuals'>Individuals</Link>
                <Link to='/team'>Teams</Link>
                <Link to='/enterprise'>Enterprise</Link>
                <div className="dropdown">
                    <button className="dropbtn">Product <FaAngleDown className='relative bottom-[2px]'/></button>
                    <div className="dropdown-content">
                        <Link to='/product1'>Product 1</Link>
                        <Link to='/product2'>Product 2</Link>
                        <Link to='/product3'>Product 3</Link>
                    </div>
                </div>
                <Link to='/pricing'>Pricing</Link>
                <div className="dropdown">
                    <button className="dropbtn">Resources <FaAngleDown className='relative bottom-[2px]'/></button>
                    <div className="dropdown-content">
                        <Link to='/resource1'>Resource 1</Link>
                        <Link to='/resource2'>Resource 2</Link>
                        <Link to='/resource3'>Resource 3</Link>
                    </div>
                </div>
                </div>
                <div className="navbar-right">
                    <Link className='logiin-btn' to='/login'>Login</Link>
                    <Link className='getStart-btn' to='/getstarted'>Get Started</Link>
                </div>
                <NavigationBtn />
            </div>
            </nav>
        </>
    )
}

export default Navbar