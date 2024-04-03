import React from 'react'
import { Link } from 'react-router-dom'
function ActionAria() {
  return (
   <>
    <section className="action-container">
        <h1>Easy access for easy bookings</h1>
        <div className="ac-discription">
            <p>Share your Calendly link right from your brouser, so you can schedule meetings</p>
            <p>without the back-and-forth</p>
        </div>
        <div className="ac-buttons">
        <Link className='sff-btn' to='/contactSales'>Start for free</Link>
        <Link className='tws-btn' to='/contactSales'>Talk with ssles</Link>
        </div>
    </section>
   </>
  )
}

export default ActionAria