import { useEffect, useState } from 'react'
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { Link } from 'react-router-dom'
import NavMenuTwo from './nav-manu-2'
import NavScroll from './nav-scroll'

export default function NavbarTwo() {
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
    <div className={`header-area header-v2 absolute top-0 left-0 right-0 z-10 w-full border-b-[3px] border-[#EEF1F3] dark:border-bdr-clr-drk bg-white bg-opacity-50 dark:bg-dark-secondary dark:bg-opacity-50 ${scroll ? 'sticky-header' : ''}`}>
        <NavScroll/>
        <div className="container">
            <div className="flex items-center justify-between gap-5 relative py-3 sm:py-5 max-w-1366 mx-auto header-wrapper">
                <div className="flex items-center gap-5 sm:gap-8 md:gap-12">
                    <Link className="cursor-pointer block" to="/" aria-label="Furnixar">
                        <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                        <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/> 
                    </Link>
                    <button className={`hamburger hamburger-v2 transform translate-y-1 sm:translate-y-[6px] ${toggle ? 'opened' : ''}`} onClick={()=>setToggle(!toggle)}>
                        <svg className="stroke-current text-title dark:text-white" width="40" viewBox="0 0 100 100">
                        <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>

                <NavMenuTwo/>
            </div>
        </div>
        <div className={`hdr-v2-menu absolute top-full left-0 w-64 sm:w-80 bg-[#f5f5f5] py-[15px] px-5 sm:px-[30px] transform translate-y-[3px] z-50 dark:bg-dark-secondary shadow-lg -translate-x-[256px] sm:-translate-x-[300px] opacity-0 invisible ${toggle ? 'active' : ''}`}>
            <ul>
                <li className={`relative ${['/','/index-v2','/index-v3','/index-v4','/index-v5','/index-v6'].includes(current) ? 'active' : ''}`}>
                    <Link to="#">Home<span></span></Link>
                    <ul className="sub-menu">
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
                    <div className="mega-menu">
                        <div className="">
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
                    </div>
                </li>
                <li className="relative">
                    <Link to="#">Shop<span></span></Link>
                    <ul className="sub-menu">
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
                    <ul className="sub-menu">
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
    </div>
  )
}
