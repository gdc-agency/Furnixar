import { blogData } from '../../data/data'
import { Link } from 'react-router-dom'

export default function BlogOne() {
  return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-[30px]">
            {blogData.slice(0,5).map((item,index)=>{
                return(
                    <div className="group" key={index}>
                        <Link to="/blog-details-v1" className="overflow-hidden block">
                            <img className="duration-300 transform scale-100 group-hover:scale-110 w-full" src={item.image} alt="blog"/>
                        </Link>
                        <div className="text-center mt-4 px-3">
                            <ul className="flex items-center justify-center gap-[10px] flex-wrap">
                                <li className="text-[15px] leading-none dark:text-white">{item.date}</li>
                                <li><Link to="/blog-tag" className="inline-block text-title dark:text-white font-medium text-[15px] leading-none py-2 px-[10px] rounded-md bg-primary-midum dark:bg-primary">{item.tag}</Link></li>
                            </ul>
                            <h5 className="text-xl mt-3 font-medium dark:text-white leading-[1.5]"><Link to="/blog-details-v1" className="text-underline">{item.title}</Link></h5>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
