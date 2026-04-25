import { GoStarFill } from 'react-icons/go'
import { LuEye, LuHeart } from 'react-icons/lu'
import { RiShoppingBag2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'


export default function LayoutOne({ item }) {
  return (
        <div className="group">
            <div className="relative overflow-hidden">
                <Link to={`/product-details/${item.id}`}>
                    <img className="w-full transform group-hover:scale-110 duration-300" src={item.image} alt="shop"/>
                </Link>
                {item.tag === 'Hot Sale' &&
                    <div className="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#1CB28E] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                        Hot Sale
                    </div>
                }
                {item.tag === 'NEW' &&
                    <div className="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#9739E1] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                        NEW
                    </div>
                }
                {item.tag === '10% OFF' &&
                    <div className="absolute z-10 top-7 left-7 pt-[10px] pb-2 px-3 bg-[#E13939] rounded-[30px] font-primary text-[14px] text-white font-semibold leading-none">
                        10% OFF
                    </div>
                }
                <div className="absolute z-10 top-[25%] right-3  opacity-0 duration-300 transition-all group-hover:opacity-100 flex flex-col items-end gap-3">
                    <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                        <LuHeart className="dark:text-white h-[22px] w-[20px]"/>                                                                      
                        <span className="mt-1">Add to wishlist</span>
                    </Link>
                    <Link to="#" className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon">
                        <RiShoppingBag2Line className="dark:text-white h-[22px] w-[20px]"/>  
                        <span className="mt-1">Add to Cart</span>
                    </Link>
                    <button className="bg-white dark:bg-title dark:text-white bg-opacity-80 flex items-center justify-center gap-2 px-4 py-[10px] text-base leading-none text-title rounded-[40px] h-14 overflow-hidden new-product-icon quick-view">
                        <LuEye className="dark:text-white h-[22px] w-[20px]"/>                                      
                        <span className="mt-1">Quick View</span>
                    </button>
                </div>
            </div>
            <div className="md:px-2 lg:px-4 xl:px-6 lg:pt-6 pt-5 flex gap-4 md:gap-5 flex-col">
                <h4 className="font-medium leading-none dark:text-white text-lg">{item.price}</h4>
                <div>
                    <h5 className="font-normal dark:text-white text-xl leading-[1.5]">
                        <Link to={`/product-details/${item.id}`} className="text-underline">{item.name}</Link>
                    </h5>
                    <ul className="flex items-center gap-2 mt-1">
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-yellow-500 size-4'/></li>
                        <li><GoStarFill className='text-slate-300 size-4'/></li>
                        <li className="dark:text-gray-100">( 1,230 )</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}
