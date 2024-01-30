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
          {/* Navlink Container */}
          <div className="bg-slate-300 h-full w-[70%] flex items-center justify-evenly">
            <div className="h-full bg-slate-200 border-b-2   transition-all duration-500 hover:border-blue-600 flex justify-center items-center ">
              <h1>Losadae</h1>
            </div>
            <div className="h-full bg-slate-200 border-b-2   transition-all duration-500 hover:border-blue-600 flex justify-center items-center ">
              <h1>Losadae</h1>
            </div>
            <div className="h-full bg-slate-200 border-b-2   transition-all duration-500 hover:border-blue-600 flex justify-center items-center ">
              <h1>Losadae</h1>
            </div>
            <div className="h-full bg-slate-200 border-b-2   transition-all duration-500 hover:border-blue-600 flex justify-center items-center ">
              <h1>Losadae</h1>
            </div>
            <div className="h-full bg-slate-200 border-b-2   transition-all duration-500 hover:border-blue-600 flex justify-center items-center ">
              <h1>Losadae</h1>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 w-[200px] h-full"></div>
      </div>
      <div className="bg-slate-950 w-full h-[1px]"></div>
    </>
  );
};
export default Navbar;
