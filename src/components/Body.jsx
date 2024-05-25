import LandingPage from "./LandingPage"
import ProfilePage from "./ProfilePage"
import PortfolioPage from "./DetailsPage"

export default function Body() {
  return (
    <div 
      className="relative z-0 h-[280vh] overflow-x-hidden snap-y snap-mandatory
      desktop:h-[300vh]"
    >
      <div
        className="bg-cover bg-center bg-fixed h-screen w-screen -z-5 inset-0 fixed bg-neutral-50
        desktop:bg-[url('./assets/img/bg.png')] 
        bg-[url('./assets/img/bg-m.png')]"
      />
      <LandingPage />
      <ProfilePage />
      <PortfolioPage />
      <div className="fixed z-2 desktop:top-[1rem] desktop:left-[2.5rem] top-[0.75rem] left-[1.75rem]">
        <p className="desktop:text-[3rem] text-gray-900 font-CSBold text-[2.25rem]">HP<span className="font-space font-black text-[#B1DAB4] -ml-1">.</span></p>
      </div>
    </div>
  )
}