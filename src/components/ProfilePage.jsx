export default function ProfilePage() {
  return (
    <div 
      className="h-[100vh] w-screen flex flex-row justify-center items-center px-20 gap-20 bg-gradient-to-b from-transparent to-neutral-50 relative z-1 text-left snap-center"
    >
      <div 
        className="bg-[url('./assets/profile-pic.png')] bg-cover bg-center h-[50vh] w-[40vh]"
      />
      <div className="w-[42vw] text-stone-600">
        <h2 className="font-myn text-[3.25rem] mb-2 bg-gradient-to-r from-cyan-600 to-teal-600 inline-block text-transparent bg-clip-text">Hayeong Pyeon</h2>
        <p className="mb-8 text-teal-600 tracking-wider font-space">[ha-young]</p>
        <div className="font-space text-xl flex flex-col gap-4 tracking-tight">
          <p>
            A self-taught coder transitioned into freelance web dev and design, and a recent full-stack grad at Epicodus in Portland, OR.
          </p>
          <p>
            My passion lies in creating sleek, user-friendly, responsive websites and applications.
          </p>
          <p>
            Currently interning at a tech startup and continuing with freelance work on building websites for small businesses.
          </p>
          <p>
            Looking for a full-time position - please reach out via <a href="mailto:hayeong.pyeon@gmail.com" className="text-cyan-600">email</a> if you have any opportunities. 
          </p>
        </div>
      </div>
    </div>
  )
}
