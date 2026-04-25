import { useState } from "react"

export default function FaqTwo() {
    const [activeTab, setActiveTab] = useState(0)
    
    const onTabClick = (index) =>{
        if(index === activeTab){
            setActiveTab(0)
        }else{
            setActiveTab(index)
        }
    }
  return (
    <>
        <div className={`single-faq mb-4 ${activeTab === 1 ? 'active' : ''}`}>
            <div className="faq-head p-3 sm:p-5 bg-[#F3F4F5] dark:bg-dark-secondary duration-300 flex items-center justify-between gap-5" onClick={()=>onTabClick(1)}>
                <button className="font-medium text-base sm:text-xl text-left text-title dark:text-white">How long does it take for home delivery?</button>
                <div className="plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`faq-body p-4 pb-0 max-w-[733px] ${activeTab === 1 ? '' : 'hidden'}`}>
                <p className="text-base sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing loborti nam pulvinar elementum.Tellus vulputate habitasse ut diam. Auctor sit lorem ipsum dolor sit amet elementum.</p>
                <p className="mt-2 text-base sm:text-lg">Lorem ipsum dolor. possimus optio atque nemo magni, illo ratione nobis sed. Modi quasi fuga alias voluptatum sed veniam atque qui.</p>
            </div>
        </div>
        <div className={`single-faq mb-4 ${activeTab === 2 ? 'active' : ''}`}>
            <div className="faq-head p-3 sm:p-5 bg-[#F3F4F5] dark:bg-dark-secondary duration-300 flex items-center justify-between gap-5" onClick={()=>onTabClick(2)}>
                <button className="font-medium text-base sm:text-xl text-left text-title dark:text-white">Do you deliver on Weekend?</button>
                <div className="plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`faq-body p-4 pb-0 max-w-[733px] ${activeTab === 2 ? '' : 'hidden'}`}>
                <p className="text-base sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam .</p>
                <ul className="mt-4 flex flex-col gap-[10px] text-base sm:text-lg list-[lower-roman] pl-5">
                    <li>Nibh purus integer elementum in tellus vulputate habitasse</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                    <li>Generators on the Internet tend to repeat predefined good quality furniture.</li>
                </ul>
            </div>
        </div>
        <div className={`single-faq ${activeTab === 3 ? 'active' : ''}`}>
            <div className="faq-head p-3 sm:p-5 bg-[#F3F4F5] dark:bg-dark-secondary duration-300 flex items-center justify-between gap-5" onClick={()=>onTabClick(3)}>
                <button className="font-medium text-base sm:text-xl text-left text-title dark:text-white">I paid £5.95 for delivery, why did I not get it next day?</button>
                <div className="plus">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`faq-body p-4 pb-0 max-w-[733px] ${activeTab === 3 ? '' : 'hidden'}`}>
                <p className="text-base sm:text-lg">Nihil quia ab aliquam facere sit officiis est sint magnam nobis eum rem animi mollitia aut repellat consequuntur minima illo consectetur, cumque, quam ut nostrum. Nobis commodi eum quidem repudiandae placeat eos voluptates harum cupiditate, sapiente nisi aliquam, quia quos, exercitationem ipsam illum! Maxime, labore. Eveniet distinctio iusto placeat facere tempore ipsum, rem deserunt quas sint delectus in minus soluta id repudiandae reiciendis exercitationem reprehenderit.</p>
            </div>
        </div>
    </>
  )
}
