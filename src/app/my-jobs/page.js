import Header from "../components/header";
import Image from "next/image";
import Jobs from "../../../public/assets/images/jobs.svg";
import JobItem from "../components/job-item";

export default function MyJobs() {
  return (
    <>
      <Header />
      <div className="bg-[#F8FCFB] h-screen px-5 py-16">
        <div className="max-w-[544px] mx-auto bg-[#F8FCFB]">
          <h2 className="text-[#1C3D38] text-[30px] tracking-[2px] leading-10 font-black mb-6 xl:text-[40px] xl:leading-[48px]">My Jobs</h2>

          {/* <div className="dashboard-box py-12 px-4 border border-[#cccccc] bg-white rounded">
          <Image src={Jobs} alt="Not accept any job" width="80" height="80" className="mx-auto" />
          <p className="text-center text-[#1C3D38] text-xl font-normal mt-2">You have not accepted any<br /> jobs for this day.</p>
        </div> */}

          <JobItem id={1} />

        </div>
      </div>
    </>
  )
}
