import logo from './assets/logo.png';

const UserNavbar = () => {
  const navLinks = ['Losadae', 'Losadae', 'Losadae', 'Losadae', 'Losadae']; // Manually specified array

  return (
    <>
      <div className="h-16 mt-6 mr-16 ml-16 flex items-center justify-between">
        <div className="w-[55%] h-full flex items-center">
          {/* Logo */}
          <img
            src={logo}
            className="ml-4 mr-8 rounded-full h-[50px] w-[50px]"
            alt="Logo"
          />

          {/* Navlink Container */}
          <div className="300 h-full w-[70%] flex items-center justify-evenly">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className={`h-full ${
                  index === 2 ? '2 ' : ''
                }border-b-[2px] transition-all text-white duration-500    cursor-pointer  hover:border-blue-600 flex justify-center items-center`}
              >
                <h1>{link}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-slate-200 w-[200px] h-full"></div>
      </div>
      <div className="bg-white mr-16 ml-16 h-[1px]"></div>
    </>
  );
};
export default UserNavbar;