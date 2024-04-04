import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import logo from '../assets/calendly-logo1.png'
function NavigationBtn() {
    const [showModal, setShowModal] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const toggleProduct = () => {
        setShowProduct(!showProduct);
    }
    const toggleResources = () => {
        setShowResources(!showResources);
    }
    const handleLinkClick = () => {
        handleCloseModal();
    };
    return (
        <>
            <button className='sight-nav' onClick={handleOpenModal}><VscThreeBars /></button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="sn-head">
                            <Link to='/' onClick={handleLinkClick}><img className='logo' src={logo} alt="Logo" /></Link>
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                        </div>
                        <div className="sn-body">
                            <Link to='/individuals' onClick={handleLinkClick}>Individuals</Link>
                            <Link to='/team' onClick={handleLinkClick}>Teams</Link>
                            <Link to='/enterprise' onClick={handleLinkClick}>Enterprise</Link>
                            <div className="sn-dropdown" onClick={toggleProduct}>Product <FaAngleDown className='relative bottom-[2px]' /></div>
                            {showProduct && (
                                <div className="options">
                                    <Link to='/product1' onClick={handleLinkClick}>Product 1</Link>
                                    <Link to='/product2' onClick={handleLinkClick}>Product 2</Link>
                                    <Link to='/product3' onClick={handleLinkClick}>Product 3</Link>
                                </div>
                            )}
                            <Link to='/pricing' onClick={handleLinkClick}>Pricing</Link>
                            <div className="sn-dropdown" onClick={toggleResources}>Resources <FaAngleDown className='relative bottom-[2px]' /></div>
                            {showResources && (
                                <div className="options">
                                    <Link to='/resource1' onClick={handleLinkClick}>Resource 1</Link>
                                    <Link to='/resource2' onClick={handleLinkClick}>Resource 2</Link>
                                    <Link to='/resource3' onClick={handleLinkClick}>Resource 3</Link>
                                </div>
                            )}
                            <div className="buttons">
                                <Link className='logiin-btn' to='/login' onClick={handleLinkClick}>Login</Link>
                                <Link className='getStart-btn' to='/getstarted' onClick={handleLinkClick}>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavigationBtn