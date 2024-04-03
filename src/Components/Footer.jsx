import React from 'react'
import app from '../assets/app-store-logo.jpg';
import play from '../assets/play-store-logo-png.png';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FooterData } from '../Data';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="footer-aria">
          <div className="social-site">
            <div className="f-heading">
              <h1>Easy</h1>
              <h2>ahead</h2>
              <p>We take the work out of connecting with others so you can accomplish more.</p>
            </div>

            <select name="" id="" className='select-lan'>
              <option value="english">English</option>
              <option value="francais">Francais</option>
              <option value="espanol">Espanol</option>
              <option value="deutsch">Deutsch</option>
              <option value="portugues">Portugues</option>
            </select>
            <div className="app-download">
              <img src={app} alt="" />
              <img src={play} alt="" />
            </div>
            <div className="social-links">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FiYoutube />
            </div>
          </div>
          <div className="more-options">
            <div className="foot-con">
              {FooterData.map((data, index) => (
                <div className="f-content" key={index}>
                  <h3>{data.title}</h3>
                  {data.items.map((dcon, index) => (
                    <Link key={index} to={`/men/${dcon.subCategory}`}>{dcon.heading}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="copright">
          <p>Copyright Calendly 2022</p>
          <p>Privacy / Terms and Conditions</p>
        </div>
      </section>
    </>
  )
}

export default Footer