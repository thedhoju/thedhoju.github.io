import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <header>
                <h1>PRASHANT DHOJU</h1>
                <nav>
                    <ul>
                        <Link to="/">ANIMATION</Link>
                        <Link to="/illustrations">ILLUSTRATIONS</Link>
                        <Link to="/games">GAMES</Link>
                    </ul>
                </nav>
            </header>
        </div >
    )
}

export default Navbar;