const Team = () => {
  return (
    <div className=" h-[600px] flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="font-slogan text-4xl mb-8 text-sec-blue">Expert Team</h1>
      {/* Para */}
      <p className="text-center text-2xl mb-5 font-normal text-pri-blue">
        Meet the pit crew who’ll make your car hum like never before.
      </p>
      {/* Cards Container */}
      <div className="flex items-center justify-around w-full">
        {/* Card 1 */}
        <div
          className="h-[300px] w-[350px]  flex bg-slate-100
        flex-col justify-evenly items-center   rounded-lg"
        >
          <div className="rounded-full h-[140px] w-[140px] bg-black"></div>
          <h2 className="text-3xl font-normal text-sec-blue font-bold">
            Ray Kun
          </h2>
          <h3 className="text-xl font-normal text-pri-blue">Lead Mechanic</h3>
        </div>

        {/* Card 2 */}
        <div
          className="h-[300px] w-[350px]   flex bg-slate-100
        flex-col justify-evenly items-center   rounded-lg"
        >
          <div className="rounded-full h-[140px] w-[140px] bg-black"></div>
          <h2 className="text-3xl font-normal font-bold text-sec-blue">
            Naruto U
          </h2>
          <h3 className="text-xl font-normal text-pri-blue">
            Sales Representative
          </h3>
        </div>
        {/* Card 3 */}
        <div
          className="h-[300px] w-[350px]   flex bg-slate-100
        flex-col justify-evenly items-center   rounded-lg"
        >
          <div className="rounded-full h-[140px] w-[140px] bg-black"></div>
          <h2 className="text-3xl font-normal  text-pri-blue font-bold">
            Sasuke
          </h2>
          <h3 className="text-xl font-normal">Technician</h3>
        </div>
      </div>
    </div>
  );
};
export default Team;
