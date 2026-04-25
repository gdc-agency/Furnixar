import { Link } from "react-router-dom";
import NavbarOne from "../../components/navbar/navbar-one";
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";

export default function PaymentFailure() {
  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Payment Failure</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Payment</li>
                </ul>
            </div>
        </div>

        <div className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-[710px] mx-auto text-center bg-secondary-light dark:bg-dark-secondary p-7 sm:p-10 lg:p-12">
                    <div className="mx-auto flex items-center justify-center">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.0508 47.6248L35.7257 6.52482C35.1668 5.54249 34.3576 4.72571 33.3806 4.15753C32.4036 3.58935 31.2935 3.29004 30.1632 3.29004C29.033 3.29004 27.9229 3.58935 26.9459 4.15753C25.9689 4.72571 25.1597 5.54249 24.6007 6.52482L1.25074 47.6248C0.700045 48.5988 0.414308 49.7001 0.422027 50.819C0.429747 51.9378 0.730654 53.0351 1.29474 54.0014C1.85883 54.9677 2.66638 55.7692 3.63687 56.326C4.60736 56.8828 5.70686 57.1755 6.82575 57.1748H53.4757C54.5946 57.1755 55.6941 56.8828 56.6646 56.326C57.6351 55.7692 58.4427 54.9677 59.0068 54.0014C59.5708 53.0351 59.8717 51.9378 59.8795 50.819C59.8872 49.7001 59.6014 48.5988 59.0508 47.6248Z" fill="#CF1F25"/>
                            <path d="M33.0507 47.9004C32.3689 48.5241 31.4747 48.8639 30.5507 48.8504C29.6318 48.861 28.7414 48.5315 28.0507 47.9254C27.6845 47.5965 27.3959 47.1904 27.2056 46.7365C27.0154 46.2826 26.9283 45.792 26.9507 45.3004C26.9473 44.8311 27.0377 44.3659 27.2165 43.932C27.3952 43.4982 27.6588 43.1044 27.9918 42.7737C28.3248 42.4431 28.7204 42.1822 29.1556 42.0065C29.5907 41.8308 30.0565 41.7437 30.5257 41.7504C30.9893 41.7484 31.4488 41.8379 31.8778 42.0138C32.3068 42.1897 32.6969 42.4485 33.0257 42.7754C33.3629 43.0977 33.6301 43.4861 33.8107 43.9162C33.9913 44.3462 34.0815 44.8089 34.0757 45.2754C34.1058 45.7611 34.0297 46.2475 33.8526 46.7009C33.6756 47.1542 33.402 47.5635 33.0507 47.9004Z" fill="white"/>
                            <path d="M33.9993 24.1005L33.0743 34.5755C33.058 35.5769 32.8633 36.5674 32.4993 37.5005C32.3305 37.8718 32.0548 38.1843 31.7075 38.3981C31.3601 38.6118 30.9569 38.7171 30.5493 38.7005C30.1475 38.721 29.7488 38.6198 29.4054 38.4102C29.062 38.2005 28.7898 37.8922 28.6243 37.5255C28.2384 36.5425 28.0106 35.5047 27.9493 34.4505L27.2743 24.2505C27.1493 22.2255 27.0743 20.8255 27.0743 19.9505C27.0163 18.8557 27.3835 17.7808 28.0993 16.9505C28.4459 16.5864 28.8657 16.3001 29.3312 16.1105C29.7966 15.9209 30.2971 15.8322 30.7993 15.8505C31.3633 15.8211 31.9229 15.963 32.4048 16.2575C32.8866 16.552 33.2682 16.9852 33.4993 17.5005C33.9934 18.7037 34.2154 20.0014 34.1493 21.3005C34.1457 22.2357 34.0956 23.1702 33.9993 24.1005Z" fill="white"/>
                        </svg>
                    </div>
                    <h3 className="leading-[1.2] mt-4 text-2xl md:text-[32px] font-bold text-title dark:text-white">
                        Payment Failure
                    </h3>
                    <p className="mt-3 text-base sm:text-lg text-paragraph dark:text-white">
                    Hey there. We tried to charge your card but, something went wrong. Please update your payment method below to continue
                    </p>
                    <Link to="/payment-method">
                        <button className="btn btn-solid mt-4 md:mt-6" data-text="Update Payment Method">
                            <span>Update Payment Method</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    </>
  )
}
