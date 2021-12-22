import React from 'react' 
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/images/logo.jpeg'

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/Product"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]

export default function NavBar() {
    const {pathName} = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathName)
    const navRef = React.useRef(null)

    React.useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop >80){
                navRef.current.classList.add("shrink")
            } else{
                navRef.current.classList.remove("shrink")
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    const menuLeft = React.useRef(null);
    const menuToggle = () => menuLeft.current.classList.toggle('active')
    
    return (
        <div className='navBar' ref={navRef}>
            <div className="container">
                <div className='navBar__logo'>
                    <Link to="/">
                        <img src={logo} alt=''/>
                    </Link>
                </div>
                <div className='navBar__menu'>
                    <div className='navBar__menu__mobile-toggle' onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="navBar__menu__left" ref={menuLeft}>
                        <div className='navBar__menu__left__close' onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className={`navBar__menu__item navBar__menu__left__item ${index === activeNav ? 'active' : ''}`} onClick={menuToggle}>
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="navBar__menu__right">
                        <div className='navBar__menu__item navBar__menu__right-item'>
                            <i className='bx bx-search'></i>
                        </div>
                        <div className='navBar__menu__item navBar__menu__right-item'>
                            <Link to="/cart">
                                <i className='bx bx-shopping-bag'></i>
                            </Link>
                        </div>
                        <div className='navBar__menu__item navBar__menu__right-item'>
                            <i className='bx bx-user'></i>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
