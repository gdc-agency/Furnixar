import { Link } from "react-router-dom";
import bg1 from '../../assets/img/shortcode/carousel/carousel-04.jpg';
import bg2 from '../../assets/img/shortcode/carousel/carousel-05.jpg';
import bg3 from '../../assets/img/shortcode/carousel/carousel-06.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function SliderTwo() {
  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false,}} speed={3000} loop  className="home-v3-banner-slider owl-carousel pb-12 lg:pb-0" >
        <SwiperSlide className="lg:!flex items-center gap-8 xl:gap-16 2xl:gap-24">
            <div className="lg:!w-[55%] relative before:absolute before:w-1/2 before:h-full before:top-0 before:right-0 slider-gradient-overlay crsl-slider-thumb h-auto before:hidden lg:before:block">
                <img className="w-full" src={bg1} alt="banner-slider"/>
            </div>
            <div className="lg:w-[45%] lg:pr-5">
                <div className="lg:max-w-[617px] w-full mt-8 xl:mt-0 crsl-slider-content px-5 lg:px-0">
                    <h4 className="leading-none font-medium dark:text-white">Discover Comfort and Style for Every Room</h4>
                    <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">25%</span> Off</h2>
                    <p className="mt-4 md:mt-5 dark:text-white-light">Create a home that reflects your unique style with our premium furniture collection. Each piece is thoughtfully designed for elegance, functionality, and lasting comfort, making your space truly unforgettable.</p>
                    <div className="button">
                        <Link className="btn btn-outline mt-4 md:mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="lg:!flex items-center gap-8 xl:gap-16 2xl:gap-24">
            <div className="lg:w-[55%] relative before:absolute before:w-1/2 before:h-full before:top-0 before:right-0 slider-gradient-overlay crsl-slider-thumb h-auto before:hidden lg:before:block">
                <img className="w-full" src={bg2} alt="banner-slider"/>
            </div>
            <div className="lg:w-[45%] lg:pr-5">
                <div className="lg:max-w-[617px] w-full mt-8 xl:mt-0 crsl-slider-content px-5 lg:px-0">
                    <h4 className="leading-none font-medium dark:text-white">Elegant Furniture for Modern Living</h4>
                    <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">35%</span> Off</h2>
                    <p className="mt-4 md:mt-5 dark:text-white-light">Discover sleek and modern designs that redefine sophistication and functionality. From minimalist styles to bold statement pieces, our collection is crafted to elevate your living space effortlessly.</p>
                    <div className="button">
                        <Link className="btn btn-outline mt-4 md:mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="lg:!flex items-center gap-8 xl:gap-16 2xl:gap-24">
            <div className="lg:w-[55%] relative before:absolute before:w-1/2 before:h-full before:top-0 before:right-0 slider-gradient-overlay crsl-slider-thumb h-auto before:hidden lg:before:block">
                <img className="w-full" src={bg3} alt="banner-slider"/>
            </div>
            <div className="lg:w-[45%] lg:pr-5">
                <div className="lg:max-w-[617px] w-full mt-8 xl:mt-0 crsl-slider-content px-5 lg:px-0">
                    <h4 className="leading-none font-medium dark:text-white">Discover Comfort and Style for Every Room</h4>
                    <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">55%</span> Off</h2>
                    <p className="mt-4 md:mt-5 dark:text-white-light">  From cozy sofas and luxurious beds to chic dining sets, our furniture blends unmatched comfort with sophisticated design. Transform every corner of your home into a haven of style and relaxation.</p>
                    <div className="button">
                        <Link className="btn btn-outline mt-4 md:mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
