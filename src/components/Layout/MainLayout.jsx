import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function MainLayout({children}) {
    return (
        <div>
            {/* <NavBar/>  */}
            <div className="container">
                {children}
                <div>cái này đâu</div>
            </div>
            <Footer/>
        </div>
    )
}

