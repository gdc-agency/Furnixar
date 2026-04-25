
import { teamData } from '../../data/data';

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientOne() {

     let settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        items:1
    }
   
  return (
        <div className="relative lg:px-14 max-w-[1024px] mx-auto">
            <div className="max-w-3xl client-slider mx-auto carousel-slider-two">
                <TinySlider settings={settings}> 
                    {teamData.map((item,index)=>{
                        return(
                            <div className="text-center" key={index}>
                                <h6 className="dark:text-white italic font-normal">{item.desc}</h6>
                                <div className="flex items-center justify-center gap-3 my-6 author">
                                    <div className="w-11 h-11 rounded-full overflow-hidden p-1 bg-primary">
                                        <img className="rounded-full" src={item.image} alt="testimonial"/>
                                    </div>
                                    <div className="text-left">
                                        <h5 className="dark:text-white font-medium leading-none">{item.name}</h5>
                                        <span className="block text-[14px] leading-none text-primary mt-[5px]">{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TinySlider>
            </div>
            <div className=" lg:absolute lg:top-2/4 lg:left-0 transform lg:-translate-y-2/4 mt-6 xl:mt-0 w-full">
                <div className="flex gap-2 md:gap-4 justify-center lg:justify-between">
                    <button className="crslSlider02_prev w-9 md:w-11 h-9 md:h-11 border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-title dark:hover:text-white hover:border-transparent transition-all duration-300">
                        <span className="lnr lnr-arrow-left"></span>
                    </button>
                    <button className="crslSlider02_next w-9 md:w-11 h-9 md:h-11 border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-title dark:hover:text-white hover:border-transparent transition-all duration-300">
                        <span className="lnr lnr-arrow-right"></span>
                    </button>
                </div>
            </div>
        </div>
  )
}
