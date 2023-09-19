import Header from "../components/header";
import Image from "next/image";
import Jobs from "../../../public/assets/images/jobs.svg";
import Filter from "../../../public/assets/images/filter.png";

export default function JobBoard() {
  return (
    <>
      <Header />
      <div className="bg-[#F8FCFB] h-screen px-5 py-16">
        <div className="max-w-[544px] mx-auto bg-[#F8FCFB]">
          <h2 className="text-[#1C3D38] text-[30px] tracking-[2px] leading-10 font-black mb-6 xl:text-[40px] xl:leading-[48px]">Available Jobs</h2>
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-xl text-[#707070]">Notify me of open jobs today</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-8 h-[15px] bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[-2px] after:left-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#489d9085] peer-checked:after:bg-[#489D90] peer-checked:after:border-[#489D90]"></div>
            </label>
          </div>

          <div className="p-4 mt-4 bg-white border border-[#ccc] rounded">
            <form>
              <div className="flex items-center">
                <div className="relative w-full">
                  <input type="search" id="search-dropdown" className="py-2.5 px-4 w-full z-20 text-xl text-[#707070] bg-[#F8FCFB] rounded border-[#CCC] border" placeholder="Search for job" required />
                  <button type="submit" className="absolute top-0 right-0 py-3 px-[14px] text-xl h-full text-white bg-blue-700 rounded-r border-[#CCC] border">
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

          <div className="dashboard-box py-12 px-4 mt-4 border border-[#cccccc] bg-white rounded">
            <Image src={Jobs} alt="Not accept any job" width="80" height="80" className="mx-auto" />
            <p className="text-center text-[#1C3D38] text-xl font-normal mt-2">Sorry, there aren’t any <br /> available jobs left for today.</p>
          </div>
        </div>
      </div>
    </>
  )
}
