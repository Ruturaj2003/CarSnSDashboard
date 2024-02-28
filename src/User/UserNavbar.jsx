import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const UserNavbar = () => {
  const navLinks = ['Browse Cars', 'Book Service', 'About', 'Contact', 'Help']; // Manually specified array
  let odta;

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
            {navLinks.map((link, index) => {
              const path = link.replace(/\s/g, '').toLowerCase();
              return (
                <Link
                  to={'/user/' + path}
                  key={index}
                  className={`h-full ${
                    index === 2 ? '2 ' : ''
                  }border-b-[0px]  text-white    cursor-pointer   hover:border-blue-600 hover:border-b-[2.5px]  flex justify-center items-center`}
                >
                  <div key={index}>
                    <h1>{link}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" w-[200px] h-full flex">
          <div
            className=" text-2xl text-white font-tableH my-auto   
          cursor-pointer
          mx-auto"
          >
            Log Out
          </div>
        </div>
      </div>
      <div className="bg-white mr-16 ml-16 h-[1px]"></div>
    </>
  );
};
export default UserNavbar;
