import logo from '../assets/bmw.svg';

const Navbar = () => {
  return (
    <>
      <div className="h-16 mt-[-30px] mr-16 ml-16  flex items-center justify-between  ">
        <div
          className="
      w-[55%] h-full   
        flex items-center
        
        "
        >
          {' '}
          {/* Logo */}
          <img
            src={logo}
            className=" ml-4 mr-8  rounded-full h-[50px] w-[50px]"
          ></img>
          {/* Navlink Container */}
          <div className="300 h-full w-[70%] flex items-center ">
            <h2 className="text-3xl"> ADMIN PANEL</h2>
          </div>
        </div>
        <div className="bg-slate-200 w-[200px] h-full"></div>
      </div>
      <div className="bg-slate-950 mr-16 ml-16  h-[1px]"></div>
    </>
  );
};
export default Navbar;
