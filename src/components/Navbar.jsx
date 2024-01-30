const Navbar = () => {
  return (
    <>
      <div className="bg-slate-500 h-16 mt-6 mr-16 ml-16 flex items-center justify-between ">
        <div
          className="
        bg-slate-800 w-[55%] h-full   
        flex items-center
        justify-around
        "
        >
          {/* Logo */}
          <div className="bg-white rounded-full h-[50px] w-[50px]"></div>
          <div className="bg-slate-300 h-[45px] w-[70%]"></div>
        </div>
        <div className="bg-slate-800 w-[200px] h-full"></div>
      </div>
      <div className="bg-slate-950 w-full h-[1px]"></div>
    </>
  );
};
export default Navbar;
