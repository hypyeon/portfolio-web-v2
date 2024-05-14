export default function ProfilePage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-row justify-center items-center px-20 gap-12 z-1 text-left snap-start"
    >
      <div className="backdrop-blur-[3px] bg-white/30 h-screen w-screen absolute -z-2"></div>
      <div 
        className="bg-[url('./assets/img/profile-pic.png')] bg-cover bg-center h-[50vh] w-[40vh] relative grayscale hover:grayscale-0 hover:duration-250 ease-in-out delay-100 transition"
      />
      <div className="lg:w-[44vw] text-stone-700 relative">
        <div className="text-center">
          <h2 className="font-diaBold xl:text-[3rem] lg:text-[3.25rem] text-stone-500 font-bold animate-[bounce_3s_infinite]"><span className="text-[#DC9CDF]">H</span>aye<span className="text-[#B1DAB4]">o</span>ng <span className="text-[#A6B5EB]">P</span>ye<span className="text-[#B1DAB4]">o</span>n</h2>
          <p className="mb-8 text-stone-600 font-diaLight tracking-wider lg:text-sm">[ha-young]</p>
        </div>
        <div className="font-diaBold tracking-wide xl:text-lg lg:text-md flex flex-col gap-4">
          <p>
            A self-taught coder transitioned into freelance web dev and design, and a recent full-stack grad of Epicodus in Portland, OR.
          </p>
          <p>
            My passion lies in creating sleek, user-friendly, responsive websites and applications.
          </p>
          <p>
            Currently interning as a Software Engineer at a tech startup and continuing with freelance work on building websites for small businesses.
          </p>
          <p>
            Looking for a full-time position - please reach out via <span className="text-[#DC9CDF] hover:text-[#B74CBB] hover:duration-150"><a href="mailto:hayeong.pyeon@gmail.com">email</a></span> if you have any opportunities. 
          </p>
        </div>
      </div>
    </div>
  )
}
