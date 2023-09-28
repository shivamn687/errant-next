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
import NotificationPage from './Notifications'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname();
    
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [mobileNotificationOpen, setMobileNotificationOpen] = useState(false);
    return (
        <nav className="bg-white px-5 py-[10px]">
            <div className="max-w-[1670px] flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="md:w-1/4 sm:w-2/3">
                    <Image src={Logo} alt="logo" width="auto" height="auto" priority className="sm:w-48"/>
                </a>

                <button onClick={() => setMobileNotificationOpen(!mobileNotificationOpen)} data-collapse-toggle="navbar-dropdown" type="button" className="sm:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Image src={Notification} alt="notification" height="auto" width="auto" />
                </button>
                <div id="dropdownNotification" className={`z-10 font-normal bg-white divide-y divide-gray-100 shadow w-64 top-16   absolute && ${mobileNotificationOpen ? 'block' : 'hidden'} sm:right-0 sm:mr-[10px]`} >
                                <NotificationPage />
                            </div>

                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-collapse-toggle="navbar-dropdown" type="button" className="sm:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className={`sm:w-full block w-auto && ${mobileMenuOpen ? 'sm:block' : 'sm:hidden'}`} id="navbar-dropdown">
                    <ul className="flex sm:flex-col items-center text-lg font-normal sm:p-4 p-0 sm:mt-4 sm:border border-gray-100 rounded-lg sm:bg-gray-50 flex-row space-x-8 mt-0 border-0 bg-white md:text-base md:space-x-5 sm:space-x-0">
                        <li>
                            <Link href="/" className={`${pathname == '/' ? 'text-[#489D90] font-bold sm:bg-[#489D90] sm:text-white sm:hover:text-white' : 'text-[#707070] sm:hover:bg-gray-100 sm:hover:text-[#489D90]'} block sm:py-2 sm:pl-3 sm:pr-4 rounded bg-transparent p-0 hover:text-[#489D90]`}>Job Board</Link>
                        </li>
                        <li>
                            <Link href="/my-jobs" className={`${pathname == '/my-jobs' ? 'text-[#489D90] font-bold sm:bg-[#489D90] sm:text-white sm:hover:text-white' : 'text-[#707070] sm:hover:bg-gray-100 sm:hover:text-[#489D90]'} block sm:py-2 sm:pl-3 sm:pr-4 rounded bg-transparent p-0 hover:text-[#489D90]`}>My Jobs</Link>
                        </li>
                        <li>
                            <Link href="/my-wallet"className={`${pathname == '/my-wallet' ? 'text-[#489D90] font-bold sm:bg-[#489D90] sm:text-white sm:hover:text-white' : 'text-[#707070] sm:hover:bg-gray-100 sm:hover:text-[#489D90]'} block sm:py-2 sm:pl-3 sm:pr-4 rounded bg-transparent p-0 hover:text-[#489D90]`}>My Wallet</Link>
                        </li>
                        <li className="sm:hidden">
                            <button onClick={() => setNotificationOpen(!notificationOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between sm:w-full sm:py-2 sm:pl-3 sm:pr-4 p-0 w-auto">
                                <Image src={Notification} alt="notification" height="auto" width="auto" />
                            </button>

                            <div id="dropdownNotification" className={`z-10 font-normal bg-white divide-y divide-gray-100 shadow w-64 top-16   absolute && ${notificationOpen ? 'block' : 'hidden'} xl:right-0 lg:right-0 md:right-0 xl:mr-[10px] lg:mr-[10px] md:mr-[10px]`} >
                                <NotificationPage />
                            </div>
                        </li>
                        <li>
                            <button onClick={() => setSubMenuOpen(!subMenuOpen)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between sm:w-full sm:py-2 sm:pl-3 ml-7 sm:pr-4 text-[#707070] rounded hover:bg-gray-100 hover:bg-transparent sm:hover:bg-gray-100 border-0 hover:text-[#489D90]  p-0 sm:ml-0 w-auto md:ml-3">
                                <Image src={User} alt="author-img" width="auto" height="auto" className='mr-2' />John Smith <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                            </button>

                            <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-40 absolute ml-7 && ${subMenuOpen ? 'block' : 'hidden'} sm:ml-2 md:ml-0`} >
                                <ul className="text-[16] text-[#707070]" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link href="/my-profile" className={`${pathname == '/my-profile' ? 'text-[#489D90] font-bold' : 'text-[#707070] sm:hover:bg-gray-100 sm:hover:text-[#489D90]'} flex px-4 py-2 sm:py-2 sm:pl-3 sm:pr-4 rounded bg-transparent p-0 hover:text-[#489D90]`}><Image className='mr-2' src={UserIcon} alt="notification" height="auto" width="auto" />Profile</Link>
                                    </li>
                                    <li>
                                        <Link href="/settings" className={`${pathname == '/settings' ? 'text-[#489D90] font-bold' : 'text-[#707070] sm:hover:bg-gray-100 sm:hover:text-[#489D90]'} flex px-4 py-2 sm:py-2 sm:pl-3 sm:pr-4 rounded bg-transparent p-0 hover:text-[#489D90]`}><Image className='mr-2' src={Settings} alt="notification" height="auto" width="auto" />Settings</Link>
                                    </li>
                                </ul>
                                <div className="" >
                                    <a href="#" className="flex px-4 py-2 text-[#707070] hover:bg-gray-100"><Image className='mr-2' src={Logout} alt="notification" height="auto" width="auto" />Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
