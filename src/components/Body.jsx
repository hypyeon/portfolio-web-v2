import LandingPage from "./LandingPage"
import ProfilePage from "./ProfilePage"
import PortfolioPage from "./DetailsPage"

export default function Body() {
  return (
    <div 
      className="relative z-0 h-[300vh]"
    >
      <div
        className="bg-[url('./assets/img/bg-v2.png')] bg-cover bg-center bg-fixed h-screen w-screen -z-5 inset-0 fixed"
      />
      <LandingPage />
      <ProfilePage />
      <PortfolioPage />
      <div className="fixed z-2 top-[1rem] left-[2.5rem]">
        <p className="text-[3rem] text-gray-900 font-CSBold">HP<span className="font-space font-black text-[#B1DAB4] -ml-1">.</span></p>
      </div>
    </div>
  )
}