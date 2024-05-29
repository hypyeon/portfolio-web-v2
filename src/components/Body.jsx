import LandingPage from "./LandingPage"
import ProfilePage from "./ProfilePage"
import PortfolioPage from "./DetailsPage"

export default function Body() {
  return (
    <div 
      className="h-fit w-screen"
    >
      <div
        className="bg-cover bg-center bg-fixed h-screen w-screen inset-0 fixed bg-[url('./assets/img/bg-m.png')] -z-1 
        desktop:bg-[url('./assets/img/bg.png')]"
      />
      <LandingPage />
      <ProfilePage />
      <PortfolioPage />
      <div 
        className="fixed z-2 top-[0.75rem] left-[1.75rem]
        desktop:top-[1rem] desktop:left-[2.5rem] 
        3xl:left-[5rem] 3xl:top-[2rem]"
      >
        <p 
          className="text-gray-900 font-CSBold text-[2.25rem] z-12 
          desktop:text-[3rem] 
          3xl:text-[4.5rem]"
        >
          HP<span className="font-space font-black text-[#B1DAB4] -ml-1">.</span>
        </p>
      </div>
    </div>
  )
}