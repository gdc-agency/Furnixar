import { useEffect, useState } from 'react'
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'
import { Link } from 'react-router-dom'
import NavMenu from './nav-menu'
import add from '../../assets//img/thumb/add.png'

export default function NavbarOne() {
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
    <div className={`header-area default-header relative z-50 bg-white dark:bg-title ${scroll ? 'sticky-header' : ''}`}>
        <div className="container-fluid">
            <div className="flex items-center justify-between gap-x-6 max-w-[1720px] mx-auto relative py-[10px] sm:py-4 lg:py-0">
                <Link className="cursor-pointer block" to="/" aria-label="Furnixar">
                    <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                    <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/> 
                </Link>

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
                        <li className={` ${['/about','/pricing','/team','/our-clients','/faq','/terms-and-conditions','/portfolio-v1','/portfolio-v2','/portfolio-v3','/portfolio-details-v1','/portfolio-details-v2','/error','/my-profile','/login','/register','/forger-password','/coming-soon','/thank-you','/shipping-method','/payment-method','/invoice','/payment-confirmation','/payment-success','/payment-failure'].includes(current) ? 'active' : ''}`}>
                            <Link to="">Pages<span></span></Link>
                            <div className="mega-menu lg:absolute z-50 lg:top-full lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-[1100px] lg:w-full lg:bg-white lg:dark:bg-title lg:px-[30px] lg:py-[15px] lg:flex lg:items-start lg:justify-between gap-[30px] lg:invisible lg:transition-all lg:duration-300">
                                <div className="lg:grid lg:grid-cols-4 lg:items-start gap-x-5 2xl:gap-x-[25px] lg:flex-1">
                                    <div className="megamenu-item">
                                        <ul>
                                            <li className={`${current === '/about' ? 'active' : ''}`}><Link to="/about">About Us</Link></li>
                                            <li className={`${current === '/pricing' ? 'active' : ''}`}><Link to="/pricing">Price Plan</Link></li>
                                            <li className={`${current === '/team' ? 'active' : ''}`}><Link to="/team">Team Member</Link></li>
                                            <li className={`${current === '/our-clients' ? 'active' : ''}`}><Link to="/our-clients">Clients</Link></li>
                                            <li className={`${current === '/faq' ? 'active' : ''}`}><Link to="/faq">FAQs</Link></li>
                                            <li className={`${current === '/terms-and-conditions' ? 'active' : ''}`}><Link to="/terms-and-conditions">Terms & conditions</Link></li>
                                        </ul>
                                    </div>
                                    <div className="megamenu-item">
                                        <ul>
                                            <li className={`${current === '/portfolio-v1' ? 'active' : ''}`}><Link to="/portfolio-v1">Portolfio 1</Link></li>
                                            <li className={`${current === '/portfolio-v2' ? 'active' : ''}`}><Link to="/portfolio-v2">Portolfio 2</Link></li>
                                            <li className={`${current === '/portfolio-v3' ? 'active' : ''}`}><Link to="/portfolio-v3">Portolfio 3</Link></li>
                                            <li className={`${current === '/portfolio-details-v1' ? 'active' : ''}`}><Link to="/portfolio-details-v1">Portolfio details 1</Link></li>
                                            <li className={`${current === '/portfolio-details-v2' ? 'active' : ''}`}><Link to="/portfolio-details-v2">Portolfio details 2</Link></li>
                                            <li className={`${current === '/error' ? 'active' : ''}`}><Link to="/error">404 Error</Link></li>
                                        </ul>
                                    </div>
                                    <div className="megamenu-item">
                                        <ul>
                                            <li className={`${current === '/my-profile' ? 'active' : ''}`}><Link to="/my-profile">My Profile</Link></li>
                                            <li className={`${current === '/login' ? 'active' : ''}`}><Link to="/login">Login</Link></li>
                                            <li className={`${current === '/register' ? 'active' : ''}`}><Link to="/register">Register</Link></li>
                                            <li className={`${current === '/forger-password' ? 'active' : ''}`}><Link to="/forger-password">Forget Password</Link></li>
                                            <li className={`${current === '/coming-soon' ? 'active' : ''}`}><Link to="/coming-soon">Coming Soon</Link></li>
                                            <li className={`${current === '/thank-you' ? 'active' : ''}`}><Link to="/thank-you">Thank you</Link></li>
                                        </ul>
                                    </div>
                                    <div className="megamenu-item">
                                        <ul>
                                            <li className={`${current === '/shipping-method' ? 'active' : ''}`}><Link to="/shipping-method">Shipping Method</Link></li>
                                            <li className={`${current === '/payment-method' ? 'active' : ''}`}><Link to="/payment-method">Payment Method</Link></li>
                                            <li className={`${current === '/invoice' ? 'active' : ''}`}><Link to="/invoice">Invoice</Link></li>
                                            <li className={`${current === '/payment-confirmation' ? 'active' : ''}`}><Link to="/payment-confirmation">Payment Confirmation</Link></li>
                                            <li className={`${current === '/payment-success' ? 'active' : ''}`}><Link to="/payment-success">Payment Completed</Link></li>
                                            <li className={`${current === '/payment-failure' ? 'active' : ''}`}><Link to="/payment-failure">Payment Failure</Link></li>
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
                        <li className={`relative ${['/shop-v1','/shop-v2','/shop-v3','/shop-v4','/product-details','/cart','/checkout'].includes(current) ? 'active' : ''}`}>
                            <Link to="#">Shop<span></span></Link>
                            <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                <li className={`${current === '/shop-v1' ? 'active' : ''}`}><Link to="/shop-v1">Shop Layout 01</Link></li>
                                <li className={`${current === '/shop-v2' ? 'active' : ''}`}><Link to="/shop-v2">Shop Layout 02</Link></li>
                                <li className={`${current === '/shop-v3' ? 'active' : ''}`}><Link to="/shop-v3">Shop Layout 03</Link></li>
                                <li className={`${current === '/shop-v4' ? 'active' : ''}`}><Link to="/shop-v4">Shop Layout 04</Link></li>
                                <li className={`${current === '/product-details' ? 'active' : ''}`}><Link to="/product-details">Product Details</Link></li>
                                <li className={`${current === '/cart' ? 'active' : ''}`}><Link to="/cart">My Cart</Link></li>
                                <li className={`${current === '/checkout' ? 'active' : ''}`}><Link to="/checkout">Checkout</Link></li>
                            </ul>
                        </li>
                        <li className={`relative ${['/blog-v1','/blog-v2','/blog-details-v1','/blog-details-v2','/blog-details-v3','/blog-tag'].includes(current) ? 'active' : ''}`}>
                            <Link to="#">Blog<span></span></Link>
                            <ul className="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]">
                                <li className={`${current === '/blog-v1' ? 'active' : ''}`}><Link to="/blog-v1">Blog Layout 1</Link></li>
                                <li className={`${current === '/blog-v2' ? 'active' : ''}`}><Link to="/blog-v2">Blog Layout 2</Link></li>
                                <li className={`${current === '/blog-details-v1' ? 'active' : ''}`}><Link to="/blog-details-v1">Blog Details 1</Link></li>
                                <li className={`${current === '/blog-details-v2' ? 'active' : ''}`}><Link to="/blog-details-v2">Blog Details 2</Link></li>
                                <li className={`${current === '/blog-details-v3' ? 'active' : ''}`}><Link to="/blog-details-v3">Blog Details 3</Link></li>
                                <li className={`${current === '/blog-tag' ? 'active' : ''}`}><Link to="/blog-tag">Blog Tag</Link></li>
                            </ul>
                        </li>
                        <li className={`${current === '/contact' ? 'active' : ''}`}><Link to="/contact">Contact</Link></li>
                        <li className="lg:hidden"><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                <NavMenu toggle={toggle} setToggle={setToggle}/>
            </div>
        </div>
    </div>
  )
}
