import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AccountTab() {
    const [current , setCurrent] = useState('')

    useEffect(()=>{
        setCurrent(window.location.pathname)
    },[])


  return (
    <ul className="divide-y dark:divide-paragraph text-title dark:text-white text-base sm:text-lg lg:text-xl flex flex-col justify-center leading-none">
        <li className={` py-3 lg:py-6 pl-6 lg:pl-12 ${current === '/my-profile' ? 'active text-primary' :''}`}>
            <Link className="duration-300 hover:text-primary" to="/my-profile">My Profile</Link>
        </li>
        <li className={`py-3 lg:py-6 pl-6 lg:pl-12 ${current === '/my-account' ? 'active text-primary' :''}`}>
            <Link className="duration-300 hover:text-primary" to="/my-account">My Account</Link>
        </li>
        <li className={`py-3 lg:py-6 pl-6 lg:pl-12 ${current === '/edit-account' ? 'active text-primary' :''}`}>
            <Link className="duration-300 hover:text-primary" to="/edit-account">Edit Account</Link>
        </li>
        <li className={`py-3 lg:py-6 pl-6 lg:pl-12 ${current === '/order-history' ? 'active text-primary' :''}`}>
            <Link className="duration-300 hover:text-primary" to="/order-history">Order History</Link>
        </li>
        <li className={`py-3 lg:py-6 pl-6 lg:pl-12 ${current === '/wishlist' ? 'active text-primary' :''}`}>
            <Link className="duration-300 hover:text-primary" to="/wishlist">Wishlist</Link>
        </li>
        <li className={`py-3 lg:py-6 pl-6 lg:pl-12 ${current === '/login' ? 'active text-primary' :''}`}>
            <Link className="duration-300 hover:text-primary" to="/login">Logout</Link>
        </li>
    </ul>
  )
}
