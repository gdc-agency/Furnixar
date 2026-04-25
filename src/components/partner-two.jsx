import { Link } from "react-router-dom";
import { partnerData } from "../data/data";

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
                items: 5
            },
    
            767: {
                items: 4
            },
    
            320: {
                items: 2
            },
        },
    }

export default function PartnerTwo() {
  return (
    <div className="max-w-[1720px] mx-auto home-v1-partner-slider partner">
      <TinySlider settings={settings}> 
          {partnerData.map((item,index)=>{
              return(
                  <Link to="#" className="flex items-center justify-center w-full" aria-label="partner logo" key={index}>
                      <img src={item.image2} alt="" />
                  </Link>
              )
          })}
        </TinySlider>
    </div>
  )
}
