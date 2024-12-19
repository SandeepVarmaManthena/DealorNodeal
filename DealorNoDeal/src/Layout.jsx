import React from 'react'
import './assets/css/Layout.css'
import Boxes from './components/Boxes'

const Layout = () => {
  return (
    <>
        <div className="total_wrapper">
            <div className="top_div">
                <h2>Deal or NoDeal</h2>
                <p>Select One Case..</p>
            </div>
            <div className="bottom_div">
                <div className="amount_1_div">

                </div>
                <div className="boxes_div">
                    <Boxes />
                </div>
                <div className="amount_2_div">
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout
