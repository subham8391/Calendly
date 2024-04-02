import React from 'react'
import { Link } from 'react-router-dom'
function TopAria() {
  return (
    <section className='top-container'>
      <p>SOLUTION</p>
      <div className="tc-aria">
        <div className="half-circle"></div>
        <div className="hc-content">
          <h1 className='tc-heading'><span>Calendly</span> for the work you do</h1>
          <div className='tc-description'>
            <p>Across a range of uses, Calendly helps people and teams build</p>
            <p>efficiency, professionalism, and results into the work they do.</p>
          </div>
          <Link className='contact-sales-btn' to='/contactSales'>Contact Sales</Link>
        </div>
      </div>
    </section>
  )
}

export default TopAria