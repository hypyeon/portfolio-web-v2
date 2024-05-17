export default function ProfilePage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-row justify-center items-center px-20 lg:gap-12 xl:gap-20 z-1 text-left snap-start"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div 
        className="bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center h-[52vh] w-[40vh] relative hover:duration-[350ms] delay-100 transition shadow-[inset_0_12px_18px_-2px_rgba(0,0,0,0.3)] z-1" 
      />
      <div className="lg:w-[32vw] xl:w-[32vw] relative">
        <div className="text-left xl:mb-10 lg:mb-4 animate-[bounce_1s_1.5]">
          <h2 className="font-CSBold xl:text-[3rem] lg:text-[2.5rem] pl-[4px] text-zinc-600">H<span className="text-[#DC9CDF]">a</span>ye<span className="text-[#B1DAB4]">o</span>ng <span className="text-[#A6B5EB]">P</span>ye<span className="text-[#B1DAB4]">o</span>n</h2>
        </div>
        <div className="font-CSSB tracking-[1px] xl:text-[1.25rem] lg:text-lg flex flex-col lg:gap-3 animate-in fade-in text-zinc-600">
          <p>
            A self-taught coder transitioned into freelance <span className="font-CSBold text-[#DC9CDF] bg-zinc-700">web dev and design</span>, and a recent full-stack grad of Epicodus in <span className="font-CSBold text-[#A6B5EB] bg-zinc-700">Portland, OR</span>.
          </p>
          <p>
            My passion lies in creating sleek, user-friendly, responsive websites and applications.
          </p>
          <p>
            Currently interning as a <span className="font-CSBold text-[#B1DAB4] bg-zinc-700">Software Engineer</span> at a tech startup and continuing with freelance work on building websites for small businesses.
          </p>
        </div>
      </div>
    </div>
  )
}
