import { useEffect, useState } from 'react';
import Hero1 from './components/Hero/Hero1';
import Hero2 from './components/Hero/Hero2';
import Hero3 from './components/Hero/Hero3';
import { Hero4 } from './components/Hero/Hero4';
import Hero5 from './components/Hero/Hero5';

import { HomeBody } from './components/Body/HomeBody';
import Footer from '../components/Footer';

// Images

import bmwm from './assets/mpi/bmwm.jpg';
import exc from './assets/mpi/exc.png';
import uc from './assets/mpi/uc.png';
import vc from './assets/mpi/vc.png';

const UserHome = () => {
  const numOfHero = 5;
  const [activeHero, setActiveHero] = useState(1);

  const nextHero = () => {
    setActiveHero((prevHero) => (prevHero % numOfHero) + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(nextHero, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className=" relative">
        {/* DYNAMIC  HERO */}
        {activeHero === 1 && <Hero1 />}
        {activeHero === 2 && <Hero2 />}
        {activeHero === 3 && <Hero3 />}
        {activeHero === 4 && <Hero4 />}
        {activeHero === 5 && <Hero5 />}
      </div>
      <div
        className="main_description text-center"
        style={{
          textAlign: 'center',
        }}
      >
        <h2
          className="font-bold text-4xl mb-10"
          style={{
            fontSize: '28px',
            marginBottom: '10px',
          }}
        >
          Welcome to BMW: The Ultimate Driving Experience
        </h2>
        <p
          className="font-semibold text-xl"
          style={{
            fontSize: '18px',
          }}
        >
          At BMW, we don't just build cars; we create the ultimate driving
          experience. For over a century, BMW has been synonymous with luxury,
          performance, and innovation, setting the standard for excellence in
          the automotive industry. Our vehicles are crafted with the finest
          materials and meticulous attention to detail, creating an ambiance of
          luxury and sophistication. From the plush leather seats to the elegant
          interior accents, every aspect of a BMW is designed to elevate your
          driving experience.
        </p>
      </div>
      <div
        className="block bg-blue-700 text-white text-center py-2"
        style={{
          width: '100%',
          backgroundColor: '#0077b6',
          color: 'white',
          padding: '10px',
          fontSize: '24px',
        }}
      >
        <h1
          className="text-xl md:text-3xl"
          style={{
            fontSize: '1.5rem',
          }}
        >
          PERFORMANCE THAT <br />
          THRILLS
        </h1>
      </div>
      <div
        className="m-sport flex items-center justify-between p-4 md:p-20 bg-gray-200 font-sans"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <p
          className="flex-1 p-0 md:p-4 max-w-2xl text-base md:text-lg"
          style={{
            flex: '1',
            padding: '0 20px',
            maxWidth: '50%',
            fontSize: '20px',
            letterSpacing: '1px',
          }}
        >
          The BMW M Sport line embodies the spirit of BMW's high-performance M
          division, offering a blend of sporty design elements and enhanced
          driving dynamics. Experience the thrill of driving with the BMW M
          Sport line, where performance meets style. Designed to embody the
          spirit of BMW's high-performance M division, M Sport models offer a
          dynamic driving experience combined with a sporty and sophisticated
          design. The BMW M Sport models feature a distinctive and aerodynamic
          exterior design that sets them apart on the road. From the M Sport
          front bumper to the M-specific side skirts and rear diffuser, every
          detail is designed to enhance both performance and aesthetics.
        </p>
        <img
          src={bmwm}
          alt="m-sport"
          className="max-w-2xl w-1/2"
          style={{
            maxWidth: '50%',
          }}
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 p-4 md:p-20"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          padding: '20px',
        }}
      >
        <div
          className="grid-item bg-gray-100 p-4 md:p-20 rounded"
          style={{
            position: 'relative',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={vc}
            alt="Image 1"
            className="max-w-full h-auto mx-auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <h3
            className="text-lg md:text-xl mt-4"
            style={{
              fontSize: '20px',
              marginBottom: '10px',
            }}
          >
            Vehicle Services
          </h3>
          <p
            className="text-base leading-6 mt-2"
            style={{
              fontSize: '16px',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            With BMW Service Inclusive, you can enjoy driving pleasure to the
            full extent. Now and for a period of your choice, you don't have to
            waste a moment thinking about the cost of maintenance, inspection,
            or wear & tear.
          </p>
          <button
            className="button mt-auto"
            style={{
              width: '100%',
              padding: '10px 20px',
              backgroundColor: '#48cae4',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Book Services
          </button>
        </div>
        <div
          className="grid-item bg-gray-100 p-4 md:p-20 rounded"
          style={{
            position: 'relative',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={exc}
            alt="Image 2"
            className="max-w-full h-auto mx-auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <h3
            className="text-lg md:text-xl mt-4"
            style={{
              fontSize: '20px',
              marginBottom: '10px',
            }}
          >
            BMW Excellence Club
          </h3>
          <p
            className="text-base leading-6 mt-2"
            style={{
              fontSize: '16px',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            The BMW Excellence Club marks a new era of luxury. A members-only
            platform that curates tailored experiences from the world of luxury,
            travel, lifestyle, and sports. Every experience is hand-picked to
            celebrate the pioneers of our culture and fulfill a desire for the
            extraordinary.
          </p>
          <button
            className="button mt-auto"
            style={{
              width: '100%',
              padding: '10px 20px',
              backgroundColor: '#48cae4',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Join club
          </button>
        </div>
        <div
          className="grid-item bg-gray-100 p-4 md:p-20 rounded"
          style={{
            position: 'relative',
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <img
            src={uc}
            alt="Image 3"
            className="max-w-full h-auto mx-auto"
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <h3
            className="text-lg md:text-xl mt-4"
            style={{
              fontSize: '20px',
              marginBottom: '10px',
            }}
          >
            Exclusive BMW Accessories
          </h3>
          <p
            className="text-base leading-6 mt-2"
            style={{
              fontSize: '16px',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            Enhance your BMW driving experience with a range of premium
            accessories designed to complement your lifestyle and personalize
            your vehicle. From stylish exterior enhancements to innovative
            technology upgrades, BMW accessories are crafted with the same
            attention to detail and precision engineering that defines every BMW
            vehicle.
          </p>
          <button
            className="button mt-auto"
            style={{
              width: '100%',
              padding: '10px 20px',
              backgroundColor: '#48cae4',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Browse more
          </button>
        </div>
      </div>
      <div
        className="bottom bg-blue-700 text-white text-center py-5"
        style={{
          backgroundColor: '#0077b6',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h2
          className="text-3xl"
          style={{
            fontSize: '24px',
          }}
        >
          Join The BMW Community
        </h2>
        <p
          className="text-base mt-2"
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          Join the community and connect with fellow enthusiasts. Share your BMW
          experience, participating in events <br />
          Thank you for choosing BMW. We look forward to welcoming you to the
          BMW family
        </p>
      </div>
      {/* <HomeBody></HomeBody> */}
      <Footer></Footer>
    </>
  );
};
export default UserHome;
