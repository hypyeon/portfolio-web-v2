export default function ProfilePage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-row justify-center items-center px-20 gap-20 lg:gap-12 z-1 text-left snap-start"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div 
        className="bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center h-[52vh] w-[40vh] relative hover:duration-[350ms] delay-100 transition shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1" 
      />
      <div className="lg:w-[32vw] xl:w-[30vw] relative">
        <div className="text-left xl:mb-6 lg:mb-4 animate-[bounce_1s_1.5]">
          <h2 className="font-diaBold xl:text-[3rem] lg:text-[2.5rem] pl-[4px] text-neutral-700 font-bold">H<span className="text-[#DC9CDF]">a</span>ye<span className="text-[#B1DAB4]">o</span>ng <span className="text-[#A6B5EB]">P</span>ye<span className="text-[#B1DAB4]">o</span>n</h2>
        </div>
        <div className="font-llay tracking-wide xl:text-[1.25rem] lg:text-md flex flex-col lg:gap-3 animate-in fade-in text-stone-500 ">
          <p>
            A self-taught coder transitioned into freelance web dev and design, and a recent full-stack grad of Epicodus in Portland, OR.
          </p>
          <p>
            My passion lies in creating sleek, user-friendly, responsive websites and applications.
          </p>
          <p>
            Currently interning as a Software Engineer at a tech startup and continuing with freelance work on building websites for small businesses.
          </p>
        </div>
      </div>
    </div>
  )
}
