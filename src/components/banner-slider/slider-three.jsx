import bg1 from '../../assets/img/shortcode/carousel/carousel-01.png'
import bg2 from '../../assets/img/shortcode/carousel/carousel-022.png'
import bg3 from '../../assets/img/shortcode/carousel/carousel-03.png'
import bg4 from '../../assets/img/shortcode/carousel/carousel-02.png'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function SliderThree() {
  return (
        <div className="max-w-[1720px] mx-auto">
            <div className="xl:max-w-[800px] 2xl:max-w-[1180px] ml-auto flex items-center justify-between gap-10 flex-col sm:flex-row">
                <div className="max-w-[285px] md:max-w-[364px] w-full sm:pb-12">
                    <Swiper modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false,}} speed={3000} loop className="carousel-slider-one home-v5-banner-slider owl-carousel sm:h-[500px] md:h-[600px] xl:h-[765px] pb-8 sm:pb-0">
                        <SwiperSlide className="w-[200px] md:w-[240px] mx-auto lg:w-[300px] flex-none crsl-slider-one-thumb">
                            <div className="relative h-[350px] md:h-[500px] xl:h-auto">
                                <img className="h-full xl:h-auto mx-auto" src={bg1} alt="carousel"/>
                                <div className="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-0 sm:right-[-10%] bottom-[17%]">
                                    <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                        <h4 className="font-normal leading-none text-title"><sup>$</sup>25</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6 md:mt-9 xl:mt-12 group">
                                <Link to="#" className="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-[240px] mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb pt-12 sm:pt-[100px]">
                            <div className="relative h-[350px] md:h-[500px] xl:h-auto">
                                <img className="h-full xl:h-auto mx-auto" src={bg2} alt="carousel"/>
                                <div className="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[30%] bottom-[30%]">
                                    <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                        <h4 className="font-normal leading-none text-title"><sup>$</sup>55</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6 md:mt-9 xl:mt-12 group">
                                <Link to="/shop-v1" className="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="w-[240px] mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb pt-12 sm:pt-[100px]">
                            <div className="relative h-[350px] md:h-[500px] xl:h-auto">
                                <img className="h-full xl:h-auto mx-auto" src={bg3} alt="carousel"/>
                                <div className="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[18%] bottom-[24%]">
                                    <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                        <h4 className="font-normal leading-none text-title"><sup>$</sup>120</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6 md:mt-9 xl:mt-12 group">
                                <Link to="/shop-v2" className="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="max-w-[735px] w-full relative pb-12 sm:pb-0">
                    <svg className="w-full fill-[#BB976D] absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2" viewBox="0 0 735 614" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M465.663 12.3984C608.469 51.1584 736.824 180.997 734.98 300.933C733.582 421.174 601.229 531.645 449.583 582.603C298.382 633.866 126.374 625.88 49.0544 532.389C-27.9532 438.459 -11.0285 259.156 76.9747 142.994C164.533 26.5264 322.546 -25.924 465.663 12.3984Z"/>
                    </svg>                            
                    <div className="text-center sm:text-left max-w-[438px] mx-auto">
                        <h4 className="leading-none font-medium dark:text-white">All products in store</h4>
                        <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">25%</span> Off</h2>
                        <p className="mt-4 dark:text-white-light">Unlock unbeatable savings on every purchase. Enjoy a generous 25% off on all in-store products today. </p>
                        <div className="button">
                            <Link className="btn btn-outline mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                        </div>
                    </div>
                </div>

                <div className="pt-0 pb-12 md:pb-[70px] lg:pb-8 2xl:pb-52 hidden">
                    <Swiper modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false,}} speed={3000} loop className="carousel-slider-one home-v5-banner-slider owl-carousel">
                        <SwiperSlide>
                            <div className="flex items-center xl:items-end gap-10 sm:gap-16 2xl:gap-20 justify-between flex-col sm:flex-row">
                                <div className="max-w-xs mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb">
                                    <div className="relative h-[300px] md:h-[400px] xl:h-auto">
                                        <img className="h-full xl:h-auto" src={bg1} alt="carousel"/>
                                        <div className="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-0 sm:right-[-10%] bottom-[17%]">
                                            <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                <h4 className="font-normal leading-none text-title"><sup>$</sup>25</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-6 md:mt-9 xl:mt-12 group">
                                        <Link to="/shop-v2" className="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</Link>
                                    </div>
                                </div>
                                <div className="xl:flex-1 max-w-[400px] sm:max-w-xl xl:pb-16 2xl:pb-24 crsl-slider-one-content text-center sm:text-left">
                                    <h4 className="leading-none font-medium dark:text-white">All products in store</h4>
                                    <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">25%</span> Off</h2>
                                    <p className="mt-4 md:mt-5 dark:text-white-light">Unlock unbeatable savings on every purchase. Enjoy a generous 25% off on all in-store products today. </p>
                                    <div className="button">
                                        <Link className="btn btn-outline mt-6" to="/shop-v1" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="pt-8">
                            <div className="flex items-center xl:items-end gap-10 sm:gap-16 2xl:gap-20 justify-between flex-col sm:flex-row">
                                <div className="max-w-xs mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb">
                                    <div className="relative h-[300px] md:h-[400px] xl:h-auto">
                                        <img className="h-full xl:h-auto" src={bg4} alt="carousel"/>
                                        <div className="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[30%] bottom-[30%]">
                                            <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                <h4 className="font-normal leading-none text-title"><sup>$</sup>55</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 md:mt-9 xl:mt-12 pl-14 group">
                                        <Link to="/shop-v1" className="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</Link>
                                    </div>
                                </div>
                                <div className="xl:flex-1 max-w-[400px] sm:max-w-xl xl:pb-16 2xl:pb-24 crsl-slider-one-content text-center sm:text-left">
                                    <h4 className="leading-none font-medium dark:text-white">All products in store</h4>
                                    <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">55%</span> Off</h2>
                                    <p className="mt-4 md:mt-5 dark:text-white-light">Unlock unbeatable savings on every purchase. Enjoy a generous 25% off on all in-store products today. </p>
                                    <div className="button">
                                        <Link className="btn btn-outline mt-6" to="/shop-v2" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="pt-8">
                            <div className="flex items-center xl:items-end gap-10 sm:gap-16 2xl:gap-20 justify-between flex-col sm:flex-row">
                                <div className="max-w-xs mx-auto lg:w-[326px] flex-none crsl-slider-one-thumb">
                                    <div className="relative h-[300px] md:h-[400px] xl:h-auto">
                                        <img className="h-full xl:h-auto" src={bg3} alt="carousel"/>
                                        <div className="absolute z-30 flex items-center justify-center bg-[#BB976D] bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-full p-3 right-[18%] bottom-[24%]">
                                            <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-full dark:bg-title flex items-center justify-center">
                                                <h4 className="font-normal leading-none text-title"><sup>$</sup>120</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pl-20 mt-6 md:mt-9 xl:mt-12 group">
                                        <Link to="/shop-v2" className="text-lg leading-tight text-underline text-title dark:text-white inline-block">Buy Now</Link>
                                    </div>
                                </div>
                                <div className="xl:flex-1 max-w-[400px] sm:max-w-xl xl:pb-16 2xl:pb-24 crsl-slider-one-content text-center sm:text-left">
                                    <h4 className="leading-none font-medium dark:text-white">All products in store</h4>
                                    <h2 className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white">Get <span className="text-primary">120%</span> Off</h2>
                                    <p className="mt-4 md:mt-5 dark:text-white-light">Furnixar is a modern furniture template for an eCommerce website designed to help you create an impressive online store for your furniture. </p>
                                    <div className="button">
                                        <Link className="btn btn-outline mt-6" to="/shop-v3" data-text="Let's Shop Now"><span>Let's Shop Now</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
  )
}
