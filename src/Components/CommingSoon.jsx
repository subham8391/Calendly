import React from 'react'
import underProgress from '../assets/comming-soon.jpg'
function CommingSoon() {
  return (
    <>
      <section className="commingsoon-section">
          <div className="commingsoon-container">
            <img src={underProgress} alt="under progress" />
            <h2>Hi, hope you are doing well.</h2>
              <h1>This feature is coming soon, stay tuned!</h1>
          </div>
        </section>
    </>
  )
}

export default CommingSoon