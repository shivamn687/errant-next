"use client"
import AvailableJobs from './AvailableJobs';
import SearchComp from "../components/SearchComp";
import Jobs from "../../../public/assets/images/jobs.svg";

export default function JobBoard() {
  return (
    <>
      <div className="bg-[#F8FCFB] h-screen px-5 pt-[60px] pb-5">
        <div className="max-w-[544px] mx-auto bg-[#F8FCFB]">
          <h2 className="text-[#1C3D38] text-[40px] tracking-[2px] leading-[48px] font-black mb-6">Available Jobs</h2>

          {/* Notification Checkbox */}
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-xl text-[#707070]">Notify me of open jobs today</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-8 h-[15px] bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[-2px] after:left-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#489d9085] peer-checked:after:bg-[#489D90] peer-checked:after:border-[#489D90]"></div>
            </label>
          </div>

          {/* Search Bar */}
          <SearchComp />

          {/* Jobs Not Available */}
          {/* <div className="dashboard-box py-12 px-4 mt-4 border border-[#cccccc] bg-white rounded">
            <Image src={Jobs} alt="Not accept any job" width="80" height="80" className="mx-auto" />
            <p className="text-center text-[#1C3D38] text-xl font-normal mt-2">Sorry, there aren’t any <br /> available jobs left for today.</p>
          </div> */}

          {/* Jobs are Available */}
          <AvailableJobs />
        </div>
      </div>
    </>
  )
}
