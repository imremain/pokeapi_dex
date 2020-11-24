/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'

const Navbar = () => {
    return(
        <Fragment>            
            <header>
                <div className="header-area header-transparent">
                    <div className="main-header ">
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <Link to='/'><img src={Logo} alt="PokeapiDex Logo" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10">
                                        <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                            <div className="main-menu d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">                                                                                          
                                                        <li className="active" ><Link to='/'>Home</Link></li>
                                                        <li><a href="about.html">About</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Navbar;
