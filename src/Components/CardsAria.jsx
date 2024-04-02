import React from 'react'
import { cardData } from '../Data'
function CardsAria() {
    return (
        <>
            <section className="card-container">
                <div className="cc-header">
                    <p>SOLUTION</p>
                    <h2>Calendly can solve your specefic pain points</h2>
                </div>
                <div className="cc-aria">
                  {cardData.map((item,index)=>(
                    <div className="card" key={index}>
                        <img className='c-icon' src={item.icon} alt="" />
                        <h2>{item.title}</h2>
                        <p>{item.describe}</p>
                    </div>
                  ))}
                </div>
            </section>
        </>
    )
}

export default CardsAria