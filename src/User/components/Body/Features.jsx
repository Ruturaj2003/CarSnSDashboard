const Features = () => {
  return (
    <div className="w-full flex flex-col  py-10 px-5 ">
      {/* Card 1 */}
      <div className="flex w-full mb-10">
        <div className="w-[55%]  h-[500px] flex pr-16 flex-col items-end justify-center  ">
          <h1 className="font-slogan text-4xl mb-3 text-ter-blue">
            Exclusive, Top-Quality <br /> Vehicles
          </h1>
          <p className="w-[400px] mr-[85px] text-3xl  text-ter-blue font-semibold">
            Discover a curated collection of high-performance cars tuned to
            perfection. From classic muscle cars to sleek aerodynamic racers,
            our inventory will set the pavement ablaze.
          </p>
        </div>

        <img
          className=" w-[45%] h-[500px] rounded-2xl shadow-lg object-cover"
          src="https://imgs.search.brave.com/beqid39Nadc2l0UAYOWt19GHvI9LSeaacHoXc1XnUyA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEzL2Nl/Lzk4LzEzY2U5ODNm/MWEyMGM5NzgyMGFh/NDg2ODhkMzdmNzQ1/LS1jYXItd2FsbHBh/cGVycy1oZC13YWxs/cGFwZXIuanBn"
          alt=""
        />
      </div>
      {/* Card 2 */}
      <div className="flex w-full mb-10">
        <img
          className=" w-[45%] h-[500px] rounded-2xl shadow-lg object-cover"
          src="https://wallpapercave.com/wp/wp7374501.png"
          alt=""
        />
        <div className="w-[55%]  h-[500px] flex pl-16 flex-col items-start justify-center  ">
          <h1 className="font-slogan text-4xl mb-3 text-ter-blue ">
            Unprecedented <br /> Automotive Service
          </h1>
          <p className="w-[400px] text-3xl font-semibold text-ter-blue">
            Our expert mechanics are veterans of the track, lending their
            extensive knowledge and experience to provide top-tier maintenance,
            enhancements, and repairs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
