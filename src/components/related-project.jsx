import { Link } from 'react-router-dom'
import chair from '../assets/img/svg/chair.svg'
import { portfolioTwo } from '../data/portfolio-data'
import { LuExpand } from 'react-icons/lu'

export default function RelatedProject() {
  return (
        <div className="container-fluid">
            <div className="max-w-[1720px] mx-auto">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center">
                    <div>
                        <img src={chair} className='mx-auto w-14 sm:w-24'  alt="" />
                    </div>
                    <h3 className="leading-none mt-4 md:mt-6 text-2xl md:text-3xl text-title dark:text-white">
                        Related Projects
                    </h3>
                    <p className="mt-3 text-base sm:text-lg text-paragraph dark:text-white">
                        Explore similar projects crafted with precision and creativity. Discover how we bring unique ideas to life!
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-[30px]">
                    {portfolioTwo.slice(0,3).map((item,index)=>{
                        return(
                            <Link to="/portfolio-details-v1" className="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-100 before:duration-300 group overflow-hidden block" key={index}>
                                <img className="w-full object-cover" src={item.image} alt="Portfolio"/>
                                <div className="absolute left-7 bottom-7 z-10 duration-300">
                                    <span className="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md">{item.tag}</span>
                                    <span className="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4">
                                        {item.name}
                                    </span>
                                </div>
                                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block">
                                    <LuExpand className='size-10 text-white'/>
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
  )
}
