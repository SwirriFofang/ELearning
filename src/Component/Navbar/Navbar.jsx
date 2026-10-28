import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { ChevronDown } from 'lucide-react'
import Login from '../Login/Login'


export default function Navbar () {

    const [menuOpen, setMenuOpen] = useState(false);

    const [mode, setMode] = useState(null)   // null (closed) | 'login' | 'signup'
    const [user, setUser] = useState(null)   // the logged-in person, if any

    const handleSuccess = (u) => {
        setUser(u)
        setMode(null)   // close the popup
    }



    return (
        <nav className='navbar'>

            <div className='logo'>

                <Link to="/" >
                    <img src={assets.bee} alt="" />
                </Link>
                <p>Edudu</p>

            </div>



            <ul className={menuOpen ? "navbar-menu open " : "navbar-menu"}>
                <li><NavLink to="/courses" onClick={() => setMenuOpen(false)} >Course <ChevronDown size={14} /></NavLink></li><hr />
                <li><NavLink to="/teachers" onClick={() => setMenuOpen(false)}>Teacher</NavLink></li><hr />
                <li><a href="#" onClick={() => setMenuOpen(false)} >How to use</a></li><hr />
                <li><a href="#" onClick={() => setMenuOpen(false)} >About Us</a></li><hr />
                <button className='mobile-signup' onClick={() => setMode('signup')} >Sign In</button>
            </ul>
            <div className="navbar-right">
                {user ? (
                    <>
                        <span className="nav-user">Hi, {user.name[0]}</span>
                        <button className="btn btn-dark" onClick={() => setUser(null)}>Log out</button>
                    </>
                ) : (
                    <>

                        <button className='sign-in-button' onClick={() => setMode('signup')} >Sign In</button>
                        <button className='log-in-button'onClick={() => setMode('login')} >Log In</button>
                    </>
                    )}
            </div>
            <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>

            {mode && (
        <Login
          mode={mode}
          setMode={setMode}
          onClose={() => setMode(null)}
          onSuccess={handleSuccess}
        />
      )}

        </nav>
    )
}



