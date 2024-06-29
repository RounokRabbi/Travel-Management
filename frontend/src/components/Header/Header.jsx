import React from 'react';
import { container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'
import './header.css'
const nav_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '#',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },

]

const Header = () => {
    return <header className="header">
        <container>
            <Row>
                <div className="nav_wrappwe d-flex align-items-center justify-content-between">
                    {/* ==========  logo  ========== */}
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    {/* ==========  logo end ========== */}

                    {/* ==========  menu start  ========== */}
                    <div className='Navigation'>
                        <ul className='menu d-flex align-items-center gap-5'>
                            {nav_links.map((item, index) => (
                                <li className='nav_item' key={index}>
                                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active_link" : ""
                                    }
                                    >
                                        {item.display}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* ==========  menu end  ========== */}
                    <div className='nav_right d-flex align-items-center gap-4'>
                        <div className='nav_btns dlex align-items center gap-4'>
                            <Button className="btn_secondary_btn"><Link to='/ register'>Register</Link></Button>
                        </div>

                        <span className="mobile_menu"></span>
                        <i class="ri-menu-line" ></i>
                      
                    </div>

                </div>
            </Row>
        </container>



    </header>
};

export default Header;