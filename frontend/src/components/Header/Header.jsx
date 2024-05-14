import React from 'react'
import { Container, Row, Button} from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './header.class';

const nav_Links=[
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {
  return (
    <header className="hearder">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center 
          justify-content-between">

            {/* Logo */}
            <div className='Logo'>
              <img src={logo} alt="" />
            </div>
            {/* Logo ends */}
            {/* Menu */}
            <div className="navigation">
              <ul className="menu d-flex align-itmes-center gap-5">
                {
                  nav_Links.map((item, index)=>(
                    <li className="nav__item" key={index}>
                      <NavLink 
                      to ={item.path} 
                      className={navClass=> 
                        navClass.isActive ? 'active__link':''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* Menu ends */}
            
            <div className="nav__right d-flex ailign-items-center gap-4 ">
              <div className="nav__btns d-flex align-items-center gap-4 ">
                    <Button className="btn secondary__btn"><Link to='
                    /login'>Login</Link></Button>
                    <Button className="btn primary__btn"><Link to='
                    /register'>Register</Link></Button>
              </div>

              <span className="mobile__menu">
              <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header