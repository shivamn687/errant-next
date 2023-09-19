"use client"
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/images/logo.png';
import User from '../../../public/assets/images/user-avator.png';
import Notification from '../../../public/assets/images/notification-icon.svg';
import UserIcon from '../../../public/assets/images/user-icon.svg';
import Settings from '../../../public/assets/images/setting-icon.svg';
import Logout from '../../../public/assets/images/logout-icon.svg';
import Link from 'next/link';


export default function header() {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  
    const [notificationOpen, setNotificationOpen] = useState(false);  
    const [mobileNotificationOpen, setMobileNotificationOpen] = useState(false);    
    return (
        <nav className="bg-white px-5 py-[10px]">
            <div className="max-w-[1670px] flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <Image src={Logo} alt="logo" width="auto" height="auto" priority  />
                </a>

                <button onClick={()=>setMobileNotificationOpen(!mobileNotificationOpen)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Image src={Notification} alt="notification" height="auto" width="auto" />
                </button>

                <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                
                <div className={`w-full md:block md:w-auto && ${mobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
                    <ul className="flex flex-col items-center text-lg font-normal p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/job-board" className="block py-2 pl-3 pr-4 text-white bg-[#489D90] rounded md:bg-transparent md:text-[#489D90] md:p-0 md:dark:text-[#489D90] dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Job Board</Link>
                        </li>
                        <li>
                            <Link href="/my-jobs" className="block py-2 pl-3 pr-4 text-[#707070] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#489D90] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Jobs</Link>
                        </li>
                        <li>
                            <Link href="/my-wallet" className="block py-2 pl-3 pr-4 text-[#707070] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#489D90] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Wallet</Link>
                        </li>
                        <li>
                            <button onClick={()=>setNotificationOpen(!notificationOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-[#707070] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#489D90] md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <Image src={Notification} alt="notification" height="auto" width="auto" />
                            </button>

                            <div id="dropdownNotification" className={`z-10 font-normal bg-white divide-y divide-gray-100 shadow w-64 top-16 dark:bg-gray-700 dark:divide-gray-600 absolute && ${notificationOpen ? 'block' : 'hidden'}`} >
                                <ul className="text-[16] text-[#707070] dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <Link href="" className="group">
                                        <li className="p-4 border-b-[1px]">
                                        <div className="flex flex-wrap items-center justify-between mx-auto text-xs">
                                            <div className="flex font-[#707070]"><Image className="mr-1" alt="location" src={Notification} height={12} width={12} /> Lower Manhattan</div>
                                            <div>27 Jun</div>
                                        </div>
                                        <h3 className="text-lg text-[#1C3D38] my-1 group-hover:text-[#489D90]">Short Job Title Lorem Ipsum Set Dolor Amet Contectur</h3>
                                        <div className="flex flex-wrap items-center justify-between mx-auto text-xs text-[#081110]">
                                            <button className="px-2 py-1 border">Specific Services</button>
                                            <div>$70</div>
                                        </div>
                                        </li>
                                    </Link>
                                    <Link href="" className="group">
                                        <li className="p-4 border-b-[1px]">
                                        <div className="flex flex-wrap items-center justify-between mx-auto text-xs">
                                            <div className="flex font-[#707070]"><Image className="mr-1" alt="location" src={Notification} height={12} width={12} /> Lower Manhattan</div>
                                            <div>27 Jun</div>
                                        </div>
                                        <h3 className="text-lg text-[#1C3D38] my-1 group-hover:text-[#489D90]">Short Job Title Lorem Ipsum Set Dolor Amet Contectur</h3>
                                        <div className="flex flex-wrap items-center justify-between mx-auto text-xs text-[#081110]">
                                            <button className="px-2 py-1 border">Specific Services</button>
                                            <div>$70</div>
                                        </div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </li>
                        
                        <li>
                            <button onClick={()=>setSubMenuOpen(!subMenuOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 md:ml-7 pr-4 text-[#707070] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#489D90] md:p-0 sm:ml-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <Image src={User} alt="author-img" width="auto" height="auto" className='mr-2' />John Smith <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                            </button>

                            <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg pt-1 shadow w-40 dark:bg-gray-700 dark:divide-gray-600 absolute md:ml-7 && ${subMenuOpen ? 'block' : 'hidden'}`} >
                                <ul className="text-[16] text-[#707070] dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link href="/my-profile" className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><Image className='mr-2' src={UserIcon} alt="notification" height="auto" width="auto" />Profile</Link>
                                    </li>
                                    <li>
                                        <Link href="/settings" className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><Image className='mr-2' src={Settings} alt="notification" height="auto" width="auto" />Settings</Link>
                                    </li>
                                </ul>
                                <div className="" >
                                    <a href="#" className="flex text-[16] px-4 py-2 text-[#707070] hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"><Image className='mr-2' src={Logout} alt="notification" height="auto" width="auto" />Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
