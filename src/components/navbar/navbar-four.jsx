import { useEffect, useState } from 'react'
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { Link } from 'react-router-dom'
import NavMenu from './nav-menu'
import add from '../../assets//img/thumb/add.png'

export default function NavbarFour() {
    const [toggle , setToggle] = useState(false)
    const [current , setCurrent] = useState('')
    const [scroll,setScroll] = useState(false)
    
        useEffect(()=>{
            window.scrollTo(0,0)
            setCurrent(window.location.pathname)
    
            const handlerScroll=()=>{
                if(window.scrollY > 50){
                    setScroll(true)
                }else{setScroll(false)}
            }
    
            window.addEventListener('scroll',handlerScroll)
    
            return () => {
                window.removeEventListener('scroll',handlerScroll)
              };
        },[])

  return (
    <div className={`header-area header-v3-area header-v4 absolute z-50 left-0 right-0 top-[10px] sm:top-5 lg:top-7 ${scroll ? 'sticky-header bg-white' : 'lg:bg-transparent'}`}>
        <div className="container">
            <div className="header-v4-wrapper relative flex items-center justify-between gap-5 bg-white lg:bg-opacity-80 rounded-[10px] dark:bg-title lg:dark:bg-opacity-80 px-5 py-3 md:py-5 lg:py-0">
                <Link  to="/" aria-label="Furnixar">
                    <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                    <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/> 
                </Link>
                <div className="flex items-center gap-12 2xl:gap-24">
                    <div className={`main-menu absolute z-50 w-full lg:w-auto top-full left-0 lg:static bg-white dark:bg-title lg:bg-transparent lg:dark:bg-transparent px-5 sm:px-[30px] py-[10px] sm:py-5 lg:px-0 lg:py-0 ${toggle ? 'active' : ''}`}>
                        <ul className="text-lg leading-none text-title dark:text-white lg:flex lg:gap-[30px]">
                            <li className={`relative ${['/','/index-v2','/index-v3','/index-v4','/index-v5','/index-v6'].includes(current) ? 'active' : ''}`}>
                                <Link to="#">Home<span></span></Link>
                                <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                    <li className={`${current === '/' ? 'active' : ''}`}><Link to="/" className="menu-item">Home Minimal</Link></li>
                                    <li className={`${current === '/index-v2' ? 'active' : ''}`}><Link to="/index-v2" className="menu-item">Home Stylish</Link></li>
                                    <li className={`${current === '/index-v3' ? 'active' : ''}`}><Link to="/index-v3" className="menu-item">Home Accessories</Link></li>
                                    <li className={`${current === '/index-v4' ? 'active' : ''}`}><Link to="/index-v4" className="menu-item">Home Collection</Link></li>
                                    <li className={`${current === '/index-v5' ? 'active' : ''}`}><Link to="/index-v5" className="menu-item">Home Luxury</Link></li>
                                    <li className={`${current === '/index-v6' ? 'active' : ''}`}><Link to="/index-v6" className="menu-item">Home Retro</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="">Pages<span></span></Link>
                                <div className="mega-menu lg:absolute z-50 lg:top-full lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-[1100px] lg:w-full lg:bg-white lg:dark:bg-title lg:px-[30px] lg:py-[15px] lg:flex lg:items-start lg:justify-between gap-[30px] lg:invisible lg:transition-all lg:duration-300">
                                    <div className="lg:grid lg:grid-cols-4 lg:items-start gap-x-5 2xl:gap-x-[25px] lg:flex-1">
                                        <div className="megamenu-item">
                                            <ul>
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/pricing">Price Plan</Link></li>
                                                <li><Link to="/team">Team Member</Link></li>
                                                <li><Link to="/our-clients">Clients</Link></li>
                                                <li><Link to="/faq">FAQs</Link></li>
                                                <li><Link to="/terms-and-conditions">Terms & conditions</Link></li>
                                            </ul>
                                        </div>
                                        <div className="megamenu-item">
                                            <ul>
                                                <li><Link to="/portfolio-v1">Portolfio 1</Link></li>
                                                <li><Link to="/portfolio-v2">Portolfio 2</Link></li>
                                                <li><Link to="/portfolio-v3">Portolfio 3</Link></li>
                                                <li><Link to="/portfolio-details-v1">Portolfio details 1</Link></li>
                                                <li><Link to="/portfolio-details-v2">Portolfio details 2</Link></li>
                                                <li><Link to="/error">404 Error</Link></li>
                                            </ul>
                                        </div>
                                        <div className="megamenu-item">
                                            <ul>
                                                <li><Link to="/my-profile">My Profile</Link></li>
                                                <li><Link to="/login">Login</Link></li>
                                                <li><Link to="/register">Register</Link></li>
                                                <li><Link to="/forger-password">Forget Password</Link></li>
                                                <li><Link to="coming-soon">Coming Soon</Link></li>
                                                <li><Link to="/thank-you">Thank you</Link></li>
                                            </ul>
                                        </div>
                                        <div className="megamenu-item">
                                            <ul>
                                                <li><Link to="/shipping-method">Shipping Method</Link></li>
                                                <li><Link to="payment-method">Payment Method</Link></li>
                                                <li><Link to="/invoice">Invoice</Link></li>
                                                <li><Link to="/payment-confirmation">Payment Confirmation</Link></li>
                                                <li><Link to="/payment-success">Payment Completed</Link></li>
                                                <li><Link to="/payment-failure">Payment Failure</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:py-[15px] lg:max-w-[280px] w-full hidden lg:block">
                                        <Link to="/shop-v1">
                                            <img src={add} alt="mega-menu-add"/>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li className="relative">
                                <Link to="#">Shop<span></span></Link>
                                <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                    <li><Link to="/shop-v1">Shop Layout 01</Link></li>
                                    <li><Link to="/shop-v2">Shop Layout 02</Link></li>
                                    <li><Link to="/shop-v3">Shop Layout 03</Link></li>
                                    <li><Link to="/shop-v4">Shop Layout 04</Link></li>
                                    <li><Link to="/product-details">Product Details</Link></li>
                                    <li><Link to="/cart">My Cart</Link></li>
                                    <li><Link to="/checkout">Checkout</Link></li>
                                </ul>
                            </li>
                            <li className="relative">
                                <Link to="#">Blog<span></span></Link>
                                <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                    <li><Link to="/blog-v1">Blog Layout 1</Link></li>
                                    <li><Link to="/blog-v2">Blog Layout 2</Link></li>
                                    <li><Link to="/blog-details-v1">Blog Details 1</Link></li>
                                    <li><Link to="/blog-details-v2">Blog Details 2</Link></li>
                                    <li><Link to="/blog-details-v3">Blog Details 3</Link></li>
                                    <li><Link to="/blog-tag">Blog Tag</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li className="lg:hidden"><Link to="/login">Login</Link></li>
                        </ul>
                    </div>

                    <NavMenu toggle={toggle} setToggle={setToggle}/>
                </div>
            </div>
        </div>
    </div>  
  )
}
