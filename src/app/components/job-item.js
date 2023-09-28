"use client";
import { useState, useEffect } from "react";
import Map from "./Map";

export default function JobItem() {
    const [showModal, setShowModal] = useState(false);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            setJobs(data.products)
        } fetchData();
    }, [])

    const center = {
        lat: -3.745,
        lng: -38.523,
    };
    return (
        <>
            <ul className="job-items overflow-y-auto scrollbar max-h-[680px] space-y-1">
                {
                    jobs.map((item) => (
                        <li onClick={() => { setShowModal(!showModal) }} className="dashboard-box p-4 border border-[#cccccc] bg-white rounded hover:border-[#000] hover:cursor-pointer">
                            <h3 className="text-[#1C3D38] text-2xl font-black">{item.title}</h3>
                            <p className="text-[#1C3D38] text-xl my-1">Lower Manhattan</p>
                            <p className="text-[#1C3D38] text-xl font-bold">Wed, 21 June . <span className="text-[#707070] font-normal">8:30 am ‒ 11:30 am</span></p>
                            <p className="text-[#489D90] text-lg mt-1">Every 4 weeks</p>
                            <p className="text-[#489D90] text-lg">Job Accepted: <span className="text-[#707070]">May 12, 2022</span></p>
                        </li>
                    ))
                }

                {/* <li onClick={() => { setShowModal(!showModal) }} className="dashboard-box p-4 border border-[#cccccc] bg-white rounded hover:border-[#000] hover:cursor-pointer">
                    <h3 className="text-[#1C3D38] text-2xl font-black">Short Job Title Lorem Ipsum Set Dolor Amet Contectur</h3>
                    <p className="text-[#1C3D38] text-xl my-1">Lower Manhattan</p>
                    <p className="text-[#1C3D38] text-xl font-bold">Wed, 21 June . <span className="text-[#707070] font-normal">8:30 am ‒ 11:30 am</span></p>
                    <p className="text-[#489D90] text-lg mt-1">Every 4 weeks</p>
                    <p className="text-[#489D90] text-lg">Job Accepted: <span className="text-[#707070]">May 12, 2022</span></p>
                </li>
                <li onClick={() => { setShowModal(!showModal) }} className="dashboard-box p-4 border border-[#cccccc] bg-white rounded hover:border-[#000] hover:cursor-pointer">
                    <h3 className="text-[#1C3D38] text-2xl font-black">Short Job Title Lorem Ipsum Set Dolor Amet Contectur</h3>
                    <p className="text-[#1C3D38] text-xl my-1">Lower Manhattan</p>
                    <p className="text-[#1C3D38] text-xl font-bold">Wed, 21 June . <span className="text-[#707070] font-normal">8:30 am ‒ 11:30 am</span></p>
                    <p className="text-[#489D90] text-lg mt-1">Every 4 weeks</p>
                    <p className="text-[#489D90] text-lg">Job Accepted: <span className="text-[#707070]">May 12, 2022</span></p>
                </li>
                <li onClick={() => { setShowModal(!showModal) }} className="dashboard-box p-4 border border-[#cccccc] bg-white rounded hover:border-[#000] hover:cursor-pointer">
                    <h3 className="text-[#1C3D38] text-2xl font-black">Short Job Title Lorem Ipsum Set Dolor Amet Contectur</h3>
                    <p className="text-[#1C3D38] text-xl my-1">Lower Manhattan</p>
                    <p className="text-[#1C3D38] text-xl font-bold">Wed, 21 June . <span className="text-[#707070] font-normal">8:30 am ‒ 11:30 am</span></p>
                    <p className="text-[#489D90] text-lg mt-1">Every 4 weeks</p>
                    <p className="text-[#489D90] text-lg">Job Accepted: <span className="text-[#707070]">May 12, 2022</span></p>
                </li>
                <li onClick={() => { setShowModal(!showModal) }} className="dashboard-box p-4 border border-[#cccccc] bg-white rounded hover:border-[#000] hover:cursor-pointer">
                    <h3 className="text-[#1C3D38] text-2xl font-black">Short Job Title Lorem Ipsum Set Dolor Amet Contectur</h3>
                    <p className="text-[#1C3D38] text-xl my-1">Lower Manhattan</p>
                    <p className="text-[#1C3D38] text-xl font-bold">Wed, 21 June . <span className="text-[#707070] font-normal">8:30 am ‒ 11:30 am</span></p>
                    <p className="text-[#489D90] text-lg mt-1">Every 4 weeks</p>
                    <p className="text-[#489D90] text-lg">Job Accepted: <span className="text-[#707070]">May 12, 2022</span></p>
                </li> */}
            </ul >

            {/* <!-- Modal toggle --> */}
            {
                jobs.map((item) => (
                    <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`bg-[#1c3d38cc] fixed justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden md:inset-0 h-full max-h-full && ${showModal ? "flex" : "hidden"}  `}>
                        <div className="relative w-[544px] max-w-[544px] max-h-full overflow-y-auto scrollbar">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <p onClick={() => { setShowModal(false) }} className="absolute right-2 top-2 cursor-pointer text-xl">X</p>
                                <div className="p-4 space-y-[10px] text-[#1C3D38]">
                                    <h3 className="text-2xl font-black">John Doe</h3>
                                    <p className="text-lg">
                                        <span className="font-black">Job Details: </span>
                                        {item.description}
                                    </p>
                                    <p className="text-lg">ZIP Code: 00501</p>
                                    <p className="text-lg font-light text-[#489D90]">Posted 08/20/2023</p>
                                    <hr className="border-[#CCCCCC]" />
                                    <h4 className="text-lg font-black text-[#081110]">Contact Details</h4>
                                    <p className="text-lg">Adam Doe <br /> sample@leademail.com <br /> +1-234-567-888</p>
                                    <hr className="border-[#CCCCCC]" />
                                    <h4 className="text-lg font-black text-[#081110]">Service Category</h4>
                                    <ul className="list-disc pl-4 text-[#081110]">
                                        <li>Specific Service</li>
                                        <li>Specific Service 2</li>
                                    </ul>
                                    <hr className="border-[#CCCCCC]" />
                                    <h4 className="text-lg font-black text-[#081110]">Job Information</h4>
                                    <p className="text-lg text-[#081110]">Lorem ipsum dolor sit amet consectetur. Arcu at quis ullamcorper at ultrices arcu velit ultricies elementum. Phasellus vel nunc egestas varius vulputate gravida massa venenatis. Sed imperdiet ante augue malesuada.</p>
                                    <hr className="border-[#CCCCCC]" />
                                    <h4 className="text-lg font-black text-[#081110]">Location</h4>
                                    <div className="flex flex-wrap justify-between">
                                        <p className="text-lg text-[#081110]">891 Cummunipaw Ave, Jersey City, NJ 07304 <span className="block text-[#707070]">20 miles away</span></p>
                                        <a href="" className="text-lg text-[#2F80ED] underline">Get Direction</a>
                                    </div>
                                    <Map className="rounded" center={center} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
