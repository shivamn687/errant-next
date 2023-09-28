import Image from 'next/image';
import NotificationIcon from '../../../public/assets/images/notification-icon.svg';
import Link from 'next/link';

export default function Notification() {
    return (
        <div>
            <ul className="text-[16] text-[#707070] " aria-labelledby="dropdownLargeButton">
                <Link href="" className="group">
                    <li className="p-4 border-b-[1px]">
                        <div className="flex flex-wrap items-center justify-between mx-auto text-xs">
                            <div className="flex font-[#707070]"><Image className="mr-1" alt="location" src={NotificationIcon} height={12} width={12} />  Lower Manhattan</div>
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
                            <div className="flex font-[#707070]"><Image className="mr-1" alt="location" src={NotificationIcon} height={12} width={12} /> Lower Manhattan</div>
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
    )
}


