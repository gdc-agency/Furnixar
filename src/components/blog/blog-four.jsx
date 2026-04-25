import { Link } from "react-router-dom";
import { blogData } from "../../data/data";

export default function BlogFour() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-[30px]">
        {blogData.slice(0,4).map((item,index)=>{
            return(
                <div className="group" key={index}>
                    <Link to="/blog-details-v1" className="overflow-hidden block">
                        <img className="duration-300 transform scale-100 group-hover:scale-110 w-full" src={item.image} alt="blog-card"/>
                    </Link>
                    <div className="p-5 relative z-10 before:absolute before:-z-10 before:top-0 before:left-0 before:w-full before:h-full before:bg-primary dark:before:bg-dark-secondary before:bg-opacity-10 before:transition-all before:duration-300 overflow-hidden before:opacity-0 group-hover:before:opacity-100">
                        <ul className="flex items-center gap-[10px] flex-wrap">
                            <li className="text-[15px] leading-none dark:text-white">{item.date}</li>
                            <li><Link to="/blog-tag" className="inline-block text-title font-medium text-[15px] leading-none py-[10px] px-5 rounded-md bg-primary-midum">{item.tag}</Link></li>
                        </ul>
                        <h5 className="mt-3 font-medium text-xl dark:text-white leading-[1.5]"><Link to="/blog-details-v1" className="text-underline">{item.title}</Link></h5>
                        <p className="text-base md:text-lg mt-3 dark:text-white-light">{item.desc} </p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
