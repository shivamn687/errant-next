import Image from "next/image";
import Filter from "../../../public/assets/images/filter.png";

export default function SearchComp({ items, onSearch }) {
    return (
        <>
            <div className="p-4 mt-4 bg-white border border-[#ccc] rounded">
                <form>
                    <div className="flex items-center">
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="py-2.5 px-4 w-full z-20 text-xl text-[#707070] bg-[#F8FCFB] rounded border-[#CCC] border" placeholder="Search for job" required />
                            <button type="submit" className="absolute top-0 right-0 py-3 px-[14px] text-xl h-full text-white bg-[#1C3D38] rounded-r border-[#CCC] border">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                        <div className="ml-6">
                            <Image src={Filter} width="auto" height="auto" alt="filter" className="cursor-pointer" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
