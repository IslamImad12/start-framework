import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../style.module.css'
export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-sm navbar-dark  fixed-top" style={{'backgroundColor':'#2c3e50'}}>
        <div className="container">
            <Link className="navbar-brand" to='home'>START FRAMEWORK</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="home" aria-current="page">Home
                            <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="about">ABOUT</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="portfolio">PORTFOLIO</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="contact">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </>
}
