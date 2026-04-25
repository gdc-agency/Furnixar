import image from '../../assets/img/shortcode/newsletter-2.png'

export default function NewsTwo() {
  return (
    <div className="container">
        <div className="bg-[#f5f5f5]  dark:bg-dark-secondary py-10 px-5 md:px-7 lg:px-12 xl:px-24 xl:pb-24 sm:pt-0 max-w-1366 mx-auto">
            <div className="max-w-[990px] flex justify-between items-end gap-7">
                <div className=" sm:max-w-md w-full xl:pt-20">
                    <h2 className="font-bold leading-none dark:text-white">Newsletter</h2>
                    <p className="mt-3 md:mt-5 dark:text-white-light">Stay in the loop with exclusive offers and updates. Subscribe to our newsletter for the latest trends and promotions. </p>
                    <div className="mt-4 lg:mt-6 sm:flex">
                        <input className="w-full h-12 md:h-14 bg-snow border dark:bg-snow dark:bg-opacity-5 border-title focus:border-title dark:focus:border-secondary border-opacity-10 p-4 outline-none dark:text-white sm:flex-1 sm:border-r-0 duration-300" type="text" placeholder="Enter your email address"/>
                        <button className="w-full h-12 bg-title text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary dark:text-white">Subscribe</button>
                    </div>
                </div>
                <div className="hidden sm:block" data-aos="fade-down">
                    <img src={image} alt="Newsletter"/>
                </div>
            </div>
        </div>
    </div>
  )
}
