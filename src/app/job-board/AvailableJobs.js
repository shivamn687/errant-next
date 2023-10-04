"use client";
import { useState, useEffect } from "react";
import Map from "../components/Map";
import Image from "next/image";
import Success from "../../../public/assets/images/success.svg";

export default function AvailableJobs() {
    const [showModal, setShowModal] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const center = {
        lat: -3.745,
        lng: -38.523,
    };
    return (
        <>
        {/* <LeadConfirmation /> */}
            <ul className="job-items overflow-y-auto scrollbar max-h-[635px] space-y-1 mt-4">
                <li className="dashboard-box p-4 space-y-[10px] text-[#1C3D38] border border-[#cccccc] bg-white rounded hover:border-[#000] transition">
                    <h3 className="text-2xl font-black">John Doe</h3>
                    <p className="text-lg">
                        <span className="font-black">Job Details: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="text-lg">ZIP Code: 00501</p>
                    <p className="text-[#489D90] text-lg">Posted: <span className="text-[#707070]">May 12, 2022</span></p>
                    <button onClick={() => { setShowModal(!showModal) }} type="button" className="font-black text-xl text-white bg-[#489D90] border border-[#489D90] rounded w-full p-[9px] hover:bg-white hover:text-[#489D90] transition">Accept</button>
                </li>
                <li className="dashboard-box p-4 space-y-[10px] text-[#1C3D38] border border-[#cccccc] bg-white rounded hover:border-[#000] transition  ">
                    <h3 className="text-2xl font-black">John Doe</h3>
                    <p className="text-lg">
                        <span className="font-black">Job Details: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="text-lg">ZIP Code: 00501</p>
                    <p className="text-[#489D90] text-lg">Job Posted: <span className="text-[#707070]">May 12, 2022</span></p>
                    <button type="button" className="font-black text-xl text-white bg-[#489D90] border border-[#489D90] rounded w-full p-[9px] hover:bg-white hover:text-[#489D90] transition">Accept</button>
                </li>
                <li className="dashboard-box p-4 space-y-[10px] text-[#1C3D38] border border-[#cccccc] bg-white rounded hover:border-[#000] transition  ">
                    <h3 className="text-2xl font-black">John Doe</h3>
                    <p className="text-lg">
                        <span className="font-black">Job Details: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="text-lg">ZIP Code: 00501</p>
                    <p className="text-[#489D90] text-lg">Job Posted: <span className="text-[#707070]">May 12, 2022</span></p>
                    <button type="button" className="font-black text-xl text-white bg-[#489D90] border border-[#489D90] rounded w-full p-[9px] hover:bg-white hover:text-[#489D90] transition">Accept</button>
                </li>
                <li className="dashboard-box p-4 space-y-[10px] text-[#1C3D38] border border-[#cccccc] bg-white rounded hover:border-[#000] transition  ">
                    <h3 className="text-2xl font-black">John Doe</h3>
                    <p className="text-lg">
                        <span className="font-black">Job Details: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="text-lg">ZIP Code: 00501</p>
                    <p className="text-[#489D90] text-lg">Job Posted: <span className="text-[#707070]">May 12, 2022</span></p>
                    <button type="button" className="font-black text-xl text-white bg-[#489D90] border border-[#489D90] rounded w-full p-[9px] hover:bg-white hover:text-[#489D90] transition">Accept</button>
                </li>
            </ul>


            {/* Modal Popup */}
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`bg-[#1c3d38cc] fixed justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden md:inset-0 h-full max-h-full && ${showModal ? "flex" : "hidden"}`}>
                <div className="relative w-[544px] max-w-[544px] max-h-full overflow-y-auto scrollbar">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <p onClick={() => { setShowModal(false) }} className="absolute right-4 top-2 cursor-pointer text-xl">X</p>
                        <div className="p-4 text-[#1C3D38]">
                            <div className={`detailed-info space-y-[10px] pt-2 ${showConfirmation ? "hidden" : "block"}` } >
                                <Map className="rounded" center={center} />
                                <h3 className="text-2xl font-black">John Doe</h3>
                                <p className="text-lg">
                                    <span className="font-black">Job Details: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p className="text-lg">ZIP Code: 00501</p>
                                <p className="text-[#489D90] text-lg">Job Posted: <span className="text-[#707070]">May 12, 2022</span></p>
                                <hr className="border-[#CCCCCC] pb-[14px]" />
                                <button type="button" onClick={()=>{setShowConfirmation(true)}} className="font-black text-xl text-white bg-[#489D90] border border-[#489D90] rounded w-full p-[9px] hover:bg-white hover:text-[#489D90] transition"
                                 id="deleteButton" data-modal-toggle="deleteModal">Accept Job</button>
                                <p className="text-sm text-center pb-3 text-[#707070]">Full details will be revealed after claiming 1 token per lead</p>
                            </div>

                            <div className={`confirmation text-center p-10 ${showConfirmation ? "block" : "hidden"} ${showSuccess ? "hidden" : "block"}`} >
                                <p className="text-2xl font-black">Please confirm to accept this job.</p>
                                <div className="flex space-x-5 mt-5">
                                    <button onClick={()=>{setShowSuccess(true)}} type="button" className="font-bold text-xl text-white bg-[#489D90] border border-[#489D90] rounded w-full p-[9px] hover:bg-white hover:text-[#489D90] transition">Confirm</button>
                                    <button onClick={() => { setShowModal(false) }} type="button" className="font-bold text-xl text-white bg-[#489D90] border border-[#489D90] rounded w-full p-[9px] hover:bg-white hover:text-[#489D90] transition">Cancel</button>
                                </div>
                            </div>

                            <div className={`success text-center py-10 ${showSuccess ? "block" : "hidden"}`}>
                                <Image src={Success} width="96" height="96" alt="success" className="m-auto" />
                                <p className="text-2xl font-black mt-6">Success! Job Claimed!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
