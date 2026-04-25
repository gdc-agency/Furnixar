import { useState } from "react"

export default function FaqThree() {
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
            <button className="font-medium text-base sm:text-xl text-left text-title dark:text-white">I paid £5.95 for delivery, why did I not get it next day?</button>
            <div className="plus">
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`faq-body p-4 pb-0 max-w-[733px] ${activeTab === 2 ? '' : 'hidden'}`}>
            <p className="text-base sm:text-lg">Nihil quia ab aliquam facere sit officiis est sint magnam nobis eum rem animi mollitia aut repellat consequuntur minima illo consectetur, cumque, quam ut nostrum. Nobis commodi eum quidem repudiandae placeat eos voluptates harum cupiditate, sapiente nisi aliquam, quia quos, exercitationem ipsam illum! Maxime, labore. Eveniet distinctio iusto placeat facere tempore ipsum, rem deserunt quas sint delectus in minus soluta id repudiandae reiciendis exercitationem reprehenderit.</p>
        </div>
    </div>
    <div className={`single-faq mb-4 ${activeTab === 3 ? 'active' : ''}`}>
        <div className="faq-head p-3 sm:p-5 bg-[#F3F4F5] dark:bg-dark-secondary duration-300 flex items-center justify-between gap-5" onClick={()=>onTabClick(3)}>
            <button className="font-medium text-base sm:text-xl text-left text-title dark:text-white">Do you deliver on Weekend?</button>
            <div className="plus">
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`faq-body p-4 pb-0 max-w-[733px] ${activeTab === 3 ? '' : 'hidden'}`}>
            <ul className="flex flex-col gap-[10px] text-base sm:text-lg">
                <li className="flex items-start gap-[10px]">
                    <svg className="mt-[5px] flex-none" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.21793 12.5366L4.07367 12.2908C2.99163 10.4473 0.11345 6.53115 0.0844199 6.4918L0 6.37707L1.08283 5.30739L4.18138 7.47103C6.1234 4.96121 7.93253 3.2339 9.11602 2.22162C10.4234 1.10327 11.2512 0.602847 11.2857 0.582088L11.3248 0.558594H13.2327L12.9096 0.846352C8.82955 4.48036 4.40317 12.2113 4.35892 12.289L4.21793 12.5366Z" fill="#BB976D"/>
                    </svg>
                    <span className="flex-1">All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet.</span>
                </li>
                <li className="flex items-start gap-[10px]">
                    <svg className="mt-[5px] flex-none" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.21793 12.5366L4.07367 12.2908C2.99163 10.4473 0.11345 6.53115 0.0844199 6.4918L0 6.37707L1.08283 5.30739L4.18138 7.47103C6.1234 4.96121 7.93253 3.2339 9.11602 2.22162C10.4234 1.10327 11.2512 0.602847 11.2857 0.582088L11.3248 0.558594H13.2327L12.9096 0.846352C8.82955 4.48036 4.40317 12.2113 4.35892 12.289L4.21793 12.5366Z" fill="#BB976D"/>
                    </svg>
                    <span className="flex-1">Nibh purus integer elementum in tellus vulputate habitasse</span>
                </li>
                <li className="flex items-start gap-[10px]">
                    <svg className="mt-[5px] flex-none" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.21793 12.5366L4.07367 12.2908C2.99163 10.4473 0.11345 6.53115 0.0844199 6.4918L0 6.37707L1.08283 5.30739L4.18138 7.47103C6.1234 4.96121 7.93253 3.2339 9.11602 2.22162C10.4234 1.10327 11.2512 0.602847 11.2857 0.582088L11.3248 0.558594H13.2327L12.9096 0.846352C8.82955 4.48036 4.40317 12.2113 4.35892 12.289L4.21793 12.5366Z" fill="#BB976D"/>
                    </svg>
                    <span className="flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                </li>
                <li className="flex items-start gap-[10px]">
                    <svg className="mt-[5px] flex-none" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.21793 12.5366L4.07367 12.2908C2.99163 10.4473 0.11345 6.53115 0.0844199 6.4918L0 6.37707L1.08283 5.30739L4.18138 7.47103C6.1234 4.96121 7.93253 3.2339 9.11602 2.22162C10.4234 1.10327 11.2512 0.602847 11.2857 0.582088L11.3248 0.558594H13.2327L12.9096 0.846352C8.82955 4.48036 4.40317 12.2113 4.35892 12.289L4.21793 12.5366Z" fill="#BB976D"/>
                    </svg>
                    <span className="flex-1">Generators on the Internet tend to repeat predefined good quality furniture.</span>
                </li>
            </ul>
        </div>
    </div>
    <div className={`single-faq ${activeTab === 4 ? 'active' : ''}`}>
        <div className="faq-head p-3 sm:p-5 bg-[#F3F4F5] dark:bg-dark-secondary duration-300 flex items-center justify-between gap-5" onClick={()=>onTabClick(4)}>
            <button className="font-medium text-base sm:text-xl text-left text-title dark:text-white">Can I collect from a local store?</button>
            <div className="plus">
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`faq-body p-4 pb-0 max-w-[733px] ${activeTab === 4 ? '' : 'hidden'}`}>
            <ul className="flex flex-col gap-[10px] text-base sm:text-lg list-disc pl-5">
                <li>Life time warrenty & 24 hour service.</li>
                <li>Good Product Quality & Leather from abroad. </li>
                <li>Generators on the Internet tend to repeat predefined.</li>
            </ul>
        </div>
    </div>   
    </>
  )
}
