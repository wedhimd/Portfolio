import React from 'react'
import Navbar from './Navbar'
import "../sass/global.scss"

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                {children}
                <footer>
                    <p>Copyright &copy; 2021 wed himd</p>
                </footer>
            </div>
        </div>
    )
}
