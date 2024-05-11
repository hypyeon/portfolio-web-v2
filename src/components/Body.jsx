export default function Body() {
  return (
    <div>
      <div 
        className="h-screen w-screen flex flex-col justify-center items-start z-1 relative px-20 gap-8 bg-gradient-to-b from-white to-transparent"
      >
      <p
        className="text-6xl text-left font-silk"
      >
        <span className="font-space">Frontend Dev.</span><span className="font-myn"> UI Engineer.</span>
      </p>
      <p
        className="text-3xl text-left font-ubuntu"
      >
        Building bridges between users and technology 
        <br /> through captivating design.
      </p>
    </div>
    <div 
      className="h-screen w-screen flex flex-col justify-center items-start z-1 relative px-20 gap-8 bg-gradient-to-b from-transparent to-white"
    >
      <div>
        <img 
          className="h-200 w-full bg-cover"
          src="./assets/profile-pic.png"
          alt="Profile Picture"
        />
      </div>
    </div>

    </div>
  )
}