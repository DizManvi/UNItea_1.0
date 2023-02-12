import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">UNItea Chat</span>
            <div className="user">
                <img src="https://dizmanvi.github.io/Unitea1.0/assets/img/team/manvi.png" alt="" />
                <span>Manvi</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar
