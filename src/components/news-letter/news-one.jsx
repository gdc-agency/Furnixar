import letter from '../../assets/img/svg/letter.svg'

export default function NewsOne() {
  return (
    <div className="container">
        <div className="max-w-xl mx-auto text-center">
            <div className="flex items-center justify-center">
                <img src={letter} alt="" />                    
            </div>
            <h2 className="font-bold leading-none mt-4 dark:text-white">Newsletter</h2>
            <p className="mt-4 dark:text-white-light">Stay in the loop with exclusive offers and updates. Subscribe to our newsletter for the latest trends and promotions delivered straight to your inbox. </p>
            <div className="mt-6 lg:mt-12 sm:flex">
                <input className="w-full h-12 md:h-14 bg-snow border dark:bg-snow dark:bg-opacity-5 border-title focus:border-primary border-opacity-10 p-4 outline-none dark:text-white sm:flex-1 sm:border-r-0" type="text" placeholder="Enter your email address"/>
                <button className="w-full h-12 bg-title text-white flex items-center justify-center text-base md:text-lg font-medium p-3 mt-3 sm:mt-0 sm:w-32 sm:h-auto sm:flex-none dark:bg-primary">Subscribe</button>
            </div>
        </div>
    </div>
  )
}
