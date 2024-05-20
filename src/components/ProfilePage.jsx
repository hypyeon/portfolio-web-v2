export default function ProfilePage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-row justify-center items-center px-20 lg:gap-12 xl:gap-20 z-1 text-left snap-start"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div 
        className="bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center h-[39vh] w-[30vh] relative shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1" 
      />
      <div className="lg:w-[38vw] xl:w-[30vw] relative">
        <div className="text-left xl:mb-6 lg:mb-4 animate-[bounce_2s_infinite]">
          <h2 className="font-CSBold xl:text-[3rem] lg:text-[2.5rem] pl-[4px] text-zinc-600">H<span className="text-[#DC9CDF]">a</span>ye<span className="text-[#B1DAB4]">o</span>ng <span className="text-[#A6B5EB]">P</span>ye<span className="text-[#B1DAB4]">o</span>n</h2>
        </div>
        <div className="font-CSSB tracking-[1px]  flex flex-col lg:gap-3 animate-in fade-in text-zinc-600 xl:text-[1.25rem] lg:text-md">
          <p className="leading-[2rem]">
            A self-taught coder transitioned into freelance <span className="font-CSBold text-highlight-purple">web dev and design</span>, and a recent full-stack grad of Epicodus in <span className="font-CSBold text-highlight-green">Portland, OR</span>.
          </p>
          <p className="leading-[2rem]">
            My passion lies in creating sleek, user-friendly, responsive websites and applications.
          </p>
          <p className="leading-[2rem]">
            Currently interning as a <span className="font-CSBold text-highlight-blue">Software Engineer</span> at a tech startup and continuing with freelance work on building websites for small businesses.
          </p>
        </div>
      </div>
    </div>
  )
}
