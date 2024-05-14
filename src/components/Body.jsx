import LandingPage from "./LandingPage"
import ProfilePage from "./ProfilePage"
import PortfolioPage from "./PortfolioPage"

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
    </div>
  )
}