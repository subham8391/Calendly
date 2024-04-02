import React from 'react'
import TopAria from './Components/TopAria'
import CardsAria from './Components/CardsAria'
function WebTemplate() {
  return (
    <>
     <section className="container">
        <div className="content-aria">
            <TopAria />
            <CardsAria />
        </div>
     </section>
    </>
  )
}

export default WebTemplate