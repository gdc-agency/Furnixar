/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link, useParams } from "react-router-dom";

import bg from '../../assets/img/shortcode/breadcumb.jpg'
import image1 from '../../assets/img/gallery/portfolio-03/portfolio-01.jpg'
import image2 from '../../assets/img/gallery/portfolio-03/portfolio-02.jpg'
import image3 from '../../assets/img/gallery/portfolio-03/portfolio-03.jpg'
import image4 from '../../assets/img/gallery/portfolio-03/portfolio-04.jpg'

import RelatedProject from "../../components/related-project";
import FooterOne from "../../components/footer/footer-one";
import ScrollToTop from "../../components/scroll-to-top";
import NavbarOne from "../../components/navbar/navbar-one";

import { portfolioOne } from "../../data/portfolio-data";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function PortfolioDetailsV1() {
    const params = useParams()
    const id = params.id

    const data = portfolioOne.find(item => item.id === parseInt(id))

  return (
    <>
        <NavbarOne/>

        <div className="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Portfolio</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li>Portfolio</li>
                    <li>/</li>
                    <li className="text-primary">{data?.name ? data?.name : 'Classic Interior Set'}</li>
                </ul>
            </div>
        </div>

        <div className="portfolio-single s-py-100">
            <div className="container-fluid">
                <div className="div flex flex-col-reverse md:flex-row gap-8 lg:gap-16 justify-between">
                    <div className="grid gap-y-7 w-full flex-1">
                        <div className="div">
                            <img className="w-full" src={data?.image ? data?.image : image1} alt="Portfolio"/>
                        </div>
                        <div className="div">
                            <img className="w-full" src={image2} alt="Portfolio"/>
                        </div>
                        <div className="div">
                            <img className="w-full" src={image3} alt="Portfolio"/>
                        </div>
                        <div className="div">
                            <img className="w-full" src={image4} alt="Portfolio"/>
                        </div>
                    </div>

                    <div className="xl:max-w-[560px] lg:max-w-[420px] md:max-w-[330px] max-w-[450px] w-full lg:h-full lg:sticky lg:top-7">
                        <div className="div">
                            <div>
                                <span className="inline-block text-title font-medium text-[15px] leading-none p-[10px] rounded-md bg-primary-midum">
                                {data?.tag ? data?.tag : 'Classic Interior'}
                                </span>
                                <h2 className="font-semibold leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                    {data?.name ? data?.name : 'Classic Interior Set'}
                                </h2>
                                <p className="mt-3 text-base sm:text-lg">
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined on the Internet. Lorem ipsum dolor sit amet, consectetur vulputate posuere habitant vel tempor varius.
                                </p>
                            </div>

                            <table className="meta-table mt-[30px] sm:mt-[50px] block bg-[#FAFAFA] dark:bg-dark-secondary p-[30px]">
                                <tbody className="w-full block">
                                    <tr className="border-b border-black/10 dark:border-bdr-clr-drk py-4">
                                        <th className="text-[18px] sm:text-[20px] font-medium">Client</th>
                                        <td className='text-base sm:text-lg'>Wordpress</td>
                                    </tr>
                                    <tr className="border-b border-black/10 dark:border-bdr-clr-drk py-4">
                                        <th>Designer</th>
                                        <td>John Smith Doe</td>
                                    </tr>
                                    <tr className="border-b border-black/10 dark:border-bdr-clr-drk py-4">
                                        <th>Material</th>
                                        <td>Wood, Steel, Paper, Fiber</td>
                                    </tr>
                                    <tr className="py-4">
                                        <th>Website</th>
                                        <td>demosite.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-5 sm:mt-7 lg:mt-10">
                            <div className="flex items-center justify-start gap-6">
                                <h6 className="font-normal">Share : </h6>
                                <div className="flex items-center gap-6">
                                    <Link to="#" className="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaFacebookF/>
                                    </Link>
                                    <Link to="#" className="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaTwitter/>
                                    </Link>
                                    <Link to="#" className="text-title duration-300 dark:text-white hover:text-primary dark:hover:text-primary">
                                        <FaInstagram/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="s-py-100 bg-primary-light dark:bg-dark-secondary">
            <RelatedProject/>
        </div>

        <FooterOne/>

        <ScrollToTop/>
    
    </>
  )
}
