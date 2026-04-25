import { Link } from "react-router-dom";
import NavbarOne from "../../components/navbar/navbar-one";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

export default function PaymentConfirmation() {
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Payment Confirmation</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Payment</li>
                </ul>
            </div>
        </div>

        <div className="s-py-100">
            <div className="container">
                <div className="max-w-[800px] mx-auto">
                    <h3 className="font-semibold leading-none text-2xl md:text-3xl mb-[30px]">
                        Confirm Your Payment
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border-t border-t-dashed border-t-title pt-[30px] pb-[30px] aos-init aos-animate payment-confirmation-meta-table block border-b border-dashed border-title aos-init aos-animate">
                            <tbody className="w-full">
                                <tr className="first-th-item pb-4 text-base sm:text-lg text-paragraph dark:text-white">
                                    <th className="text-base sm:text-lg font-normal">Date</th>
                                    <th className='text-base sm:text-lg font-normal'>Card Holder</th>
                                    <th className='text-base sm:text-lg font-normal'>Card Type</th>
                                </tr>
                                <tr className="first-td-item pb-12 text-lg sm:text-xl text-title dark:text-white font-medium">
                                    <td>12/31/2025</td>
                                    <td>John Smith Doe</td>
                                    <td>Visa</td>
                                </tr>
                                <tr className="two-th-item pb-4 text-base sm:text-lg font-normal text-paragraph dark:text-white">
                                    <th className="text-base sm:text-lg font-normal">Card Number</th>
                                    <td className="text-base sm:text-lg font-normal">eMail</td>
                                    <td className="text-base sm:text-lg font-normal">Phone</td>
                                </tr>
                                <tr className="two-td-item text-lg sm:text-xl text-title dark:text-white font-medium">
                                    <th className='font-medium'>**** **** **** 1234</th>
                                    <td className='font-medium'>demomail@gmail.com</td>
                                    <td className='font-medium'>(+11) 01234 56789</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center flex-wrap gap-4 mt-[30px]">
                        <h4 className="text-xl font-medium leading-none mb-0">
                            Subtotal : $850
                        </h4>
                        <div className="flex gap-3">
                            <Link to="#" className="btn btn-secondory-solid" data-text="Cancel Payment">
                                <span>Cancel Payment</span>
                            </Link>
                            <button className="btn btn-solid" data-text="Confirm Payment">
                                <span>Confirm Payment</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
