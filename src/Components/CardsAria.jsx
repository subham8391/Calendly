import React from 'react'
import { cardData } from '../Data'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
function CardsAria() {
    return (
        <>
            <section className="card-container">
                <div className="cc-header">
                    <p>SOLUTION</p>
                    <h2>Calendly can solve your specefic pain points</h2>
                </div>
                <div className="cc-aria">
                    {cardData.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="card-containt">
                                <img className='c-icon' src={item.icon} alt="" />
                                <h2>{item.title}</h2>
                                <p>{item.describe}</p>
                            </div>
                            <Link>Learn More <FaAngleRight className='relative bottom-[2px]'/></Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CardsAria