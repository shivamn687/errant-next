import Header from "../components/Header"
import Notification from "../components/notifications"

export default function MyProfile() {
  return (
    <>
    <Header />
    <div className="bg-[#F8FCFB] h-screen">
      <div className="max-w-[544px] flex flex-wrap items-center justify-between mx-auto pt-16 bg-[#F8FCFB]">
        <h2 className="text-[#1C3D38] text-[40px] tracking-[2px] leading-[48px] font-bold">My Profile</h2>
        <Notification />
      </div>
    </div>
  </>
  )
}
