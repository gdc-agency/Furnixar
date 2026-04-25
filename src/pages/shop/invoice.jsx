import { Link } from "react-router-dom";

import Switcher from "../../components/switcher";

import p1 from '../../assets/img/blog-details/post-01.jpg'
import p2 from '../../assets/img/blog-details/post-02.jpg'
import logo from '../../assets/img/svg/logo.svg'
import logoLight from '../../assets/img/svg/logo-light.svg'

export default function Invoice() {
  return (
    <>
        <div className="switcher z-20 w-12 sm:w-[60px] h-12 sm:h-[60px] fixed bottom-[10px] md:bottom-5 left-[10px] md:left-5 rounded-xl flex items-center justify-center cursor-pointer">
            <Switcher/>
        </div>   

        <div className="s-py-100 min-h-screen">
            <div className="container">
                <div className="max-w-[800px] mx-auto">
                    <div className="div">
                        <div className="flex justify-between items-center flex-wrap mb-8 gap-2">
                            <h1 className="font-medium leading-none text-2xl md:text-3xl text-title dark:text-white">Invoice : #038 - 456980</h1>
                            <button className="btn btn-solid rounded-full" data-text="Print Invoice">
                                <span>Print Invoice</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-w-[800px] mx-auto">
                    <div className="rounded-t-[30px] w-full bg-invoice dark:bg-dark-secondary pt-[30px] md:pt-[40px] px-[30px] md:px-[40px] border border-[#17243026] dark:border-bdr-clr-drk border-opacity-15">
                        <Link className="cursor-pointer block mb-[50px]" to="/">
                            <img src={logo} alt="" className='dark:hidden w-[120px] sm:w-[200px]'/> 
                            <img src={logoLight} alt="" className='dark:block hidden w-[120px] sm:w-[200px]'/>   
                        </Link>
                        <div className="grid md:grid-cols-2 gap-5 md:gap-[30px] mb-[50px]">
                            <div className="p-4 md:p-[30px] border border-dashed border-title dark:border-bdr-clr-drk rounded-lg md:rounded-[16px] bg-white dark:bg-title">
                                <p className="text-base text-paragraph dark:text-white font-normal">Date: 13th Sept 2025</p>
                                <h3 className="font-medium leading-none mt-4 text-lg">Invoice # 0412-12345</h3>
                                <h2 className="pl-2.5 font-semibold leading-none mt-4 md:mt-10 text-[20px] relative before:absolute before:top-[-2px] before:left-0 before:w-[4px] before:h-[100%] before:bg-primary">Shop Information</h2>
                                <p className="font-medium leading-none mt-4 md:mt-5 text-lg">Jack Wood Farm</p>
                                <p className="text-base text-paragraph dark:text-white font-normal mt-4">23/A South Park, Lake Road</p>
                                <p className="text-base text-paragraph dark:text-white font-normal">Milan, Italy</p>
                            </div>
                            <div className="p-4 md:p-[30px] border border-dashed border-title dark:border-bdr-clr-drk rounded-lg md:rounded-[16px] bg-white dark:bg-title">
                                <p className="text-base text-paragraph dark:text-white font-normal">Date: 29 Nov 2025</p>
                                <h3 className="font-medium leading-none mt-4 md:mt-5 text-2xl">Cash On Delivery</h3>
                                <h2 className="pl-2.5 font-semibold leading-none mt-4 md:mt-10 text-[20px] relative before:absolute before:top-[-2px] before:left-0 before:w-[4px] before:h-[100%] before:bg-primary">Customer Information</h2>
                                <p className="font-medium leading-none mt-4 md:mt-5 text-lg">Jack Wood Farm</p>
                                <p className="text-base text-paragraph dark:text-white font-normal mt-4">23/A South Park, Lake Road</p>
                                <p className="text-base text-paragraph dark:text-white font-normal">Milan, Italy</p>
                            </div>
                        </div>
                    </div>   
                </div>

                <div className="max-w-[800px] mx-auto">
                    <div className="div bg-primary-midum px-[30px] md:px-[40px] py-[25px]">
                        <h2 className="leading-none text-2xl font-semibold text-title dark:text-white">
                            Order Information
                        </h2>
                    </div>
                </div>    
                <div className="max-w-[800px] mx-auto rounded-b-[30px] w-full bg-invoice dark:bg-dark-secondary pt-[30px] px-[30px] md:px-[40px] pb-[30px] md:pb-[40px] border border-[#17243026] dark:border-bdr-clr-drk border-opacity-15">
                    <div className="overflow-x-auto border-t-dashed block border-dashed border-title pb-[30px] aos-init aos-animate">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="py-3 text-left font-semibold leading-none text-2xl text-title dark:text-white whitespace-nowrap">Product Info</th>
                                    <th className="py-3 px-4 text-center font-semibold leading-none text-2xl text-title dark:text-white whitespace-nowrap">Quantity</th>
                                    <th className="py-3 px-4 text-center font-semibold leading-none text-2xl text-title dark:text-white whitespace-nowrap">Price</th>
                                    <th className="py-3 text-right font-semibold leading-none text-2xl text-title dark:text-white whitespace-nowrap">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b border-solid border-title dark:border-bdr-clr-drk border-opacity-10'>
                                    <td className="py-4 flex items-center whitespace-nowrap">
                                        <div className="min-w-[100px] max-w-[110px] max-h-[80px] mr-4">
                                            <img className="w-full h-full max-w-[100px] max-h-[80px]" src={p1} alt="shape"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-paragraph dark:text-white font-medium">Chair</p>
                                            <p className="text-base sm:text-lg text-title dark:text-white font-semibold pt-3 whitespace-nowrap">Modern Sofa Set</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center text-base text-paragraph dark:text-white font-semibold">3</td>
                                    <td className="py-4 px-4 text-center text-base text-paragraph dark:text-white font-semibold">$74</td>
                                    <td className="py-4 text-right text-base text-paragraph dark:text-white font-semibold">$210</td>
                                </tr>
                                <tr className='border-b border-solid border-title dark:border-bdr-clr-drk border-opacity-10'>
                                    <td className="py-4 flex items-center whitespace-nowrap">
                                        <div className="min-w-[100px] max-w-[110px] max-h-[80px] mr-4">
                                            <img className="w-full h-full max-w-[100px] max-h-[80px]" src={p2} alt="shape"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-paragraph dark:text-white font-medium">Interior</p>
                                            <p className="text-base sm:text-lg text-title dark:text-white font-semibold pt-3 whitespace-nowrap">Classic Chair with Vase</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center text-base text-paragraph dark:text-white font-semibold">2</td>
                                    <td className="py-4 px-4 text-center text-base text-paragraph dark:text-white font-semibold">$120</td>
                                    <td className="py-4 text-right text-base text-paragraph dark:text-white font-semibold">$780</td>
                                </tr>
                                <tr>
                                    <td className="pt-4 flex items-center whitespace-nowrap">
                                        <div className="min-w-[100px] max-w-[110px] max-h-[80px] mr-4">
                                            <img className="w-full h-full max-w-[100px] max-h-[80px]" src={p1} alt="shape"/>
                                        </div>
                                        <div>
                                            <p className="text-sm text-paragraph dark:text-white font-medium">Light/Lamp</p>
                                            <p className="text-base sm:text-lg text-title dark:text-white font-semibold pt-3 whitespace-nowrap">Luxury Hanging Lamp</p>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-center text-base text-paragraph dark:text-white font-semibold">3</td>
                                    <td className="py-4 px-4 text-center text-base text-paragraph dark:text-white font-semibold">$74</td>
                                    <td className="py-4 text-right text-base text-paragraph dark:text-white font-semibold">$210</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t border-t-dashed border-t-title dark:border-bdr-clr-drk pt-7 block border-b border-dashed border-title pb-7 aos-init aos-animate">
                        <div>
                            <div className="max-w-[325px] flex justify-end flex-col w-full ml-auto mr-0">
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium">
                                    <span>Sub Total:</span>
                                    <span>$870</span>
                                </div>
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <span>Coupon Discount:</span>
                                    <span>-$20</span>
                                </div>
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <span>Delivery Fee:</span>
                                    <span>$5</span>
                                </div>
                                <div className="flex justify-between flex-wrap text-base sm:text-lg text-title dark:text-white font-medium mt-3">
                                    <span>VAT:</span>
                                    <span> $5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[325px] flex justify-end flex-col w-full ml-auto mr-0">
                        <div className="flex justify-between flex-wrap font-bold leading-none mt-[30px] text-lg">
                            <span>Total:</span>
                            <span>&nbsp;$850</span>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    </>
  )
}
