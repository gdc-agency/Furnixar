import { Link } from 'react-router-dom'
import { partnerData } from '../data/data'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

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
        responsive: {
            1200: {
                items: 6
            },
    
            767: {
                items: 4
            },
    
            320: {
                items: 2
            },
        },
    }

export default function PartnerOne() {
  return (
    <>
    <div className='block dark:hidden'>
        <div className="max-w-[1720px] mx-auto home-v1-partner-slider partner">
            <TinySlider settings={settings}> 
                {partnerData.map((item,index)=>{
                    return(
                        <Link to="#" className="flex items-center justify-center w-full"  key={index}>
                            <img src={item.image} alt="" className='mx-auto'/>
                        </Link>
                    )
                })}
            </TinySlider>
        </div>
    </div>
    <div className='hidden dark:block'>
        <div className="max-w-[1720px] mx-auto home-v1-partner-slider partner">
            <TinySlider settings={settings}> 
                {partnerData.map((item,index)=>{
                    return(
                        <Link to="#" className="flex items-center justify-center w-full"  key={index}>
                            <img src={item.image2} alt="" className='mx-auto'/>
                        </Link>
                    )
                })}
            </TinySlider>
        </div>
    </div>
    </>
  )
}
