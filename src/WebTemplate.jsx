import React from 'react'
import TopAria from './Components/TopAria'
import CardsAria from './Components/CardsAria'
import ActionAria from './Components/ActionAria'
function WebTemplate() {
  return (
    <>
     <section className="container">
        <div className="content-aria">
            <TopAria />
            <CardsAria />
            <ActionAria />
        </div>
     </section>
    </>
  )
}

export default WebTemplate