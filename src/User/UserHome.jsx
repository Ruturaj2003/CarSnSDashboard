import { useEffect, useState } from 'react';
import Hero1 from './components/Hero/Hero1';
import Hero2 from './components/Hero/Hero2';
import Hero3 from './components/Hero/Hero3';
import { Hero4 } from './components/Hero/Hero4';
import Hero5 from './components/Hero/Hero5';

import { HomeBody } from './components/Body/HomeBody';
import Footer from '../components/Footer';
import './userH.css';
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
      <div className="main_description">
        <h2>Welcome to BMW: The Ultimate Driving Experience</h2>
        <p>
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
      <div className="block">
        <h1>
          PERFORMANCE THAT <br />
          THRILLS
        </h1>
      </div>
      <div className="m-sport">
        <p>
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
        <img src={bmwm} alt="m-sport" />
      </div>
      <div className="grid">
        <div className="grid-item">
          <img src={vc} alt="Image 1" />
          <h3>Vehicle Services</h3>
          <p>
            With BMW Service Inclusive, you can enjoy driving pleasure to the
            full extent. Now and for a period of your choice, you don't have to
            waste a moment thinking about the cost of maintenance, inspection or
            wear & tear.
          </p>
          <br />
          {/* Redirect to the browse service page */}
          <button className="button">Book Services</button>
        </div>
        <div className="grid-item">
          <img src={exc} alt="Image 2" />
          <h3>BMW Excellence Club</h3>
          <br />
          <p>
            The BMW Excellence Club marks a new era of luxury. A members-only
            platform that curates tailored experiences from the world of luxury,
            travel, lifestyle, and sports. Every experience is hand-picked to
            celebrate the pioneers of our culture and fulfill a desire for the
            extraordinary
          </p>
          {/* DUMMY */}
          <button className="button">Join club</button>
        </div>
        <div className="grid-item">
          <img src={uc} alt="Image 3" />
          <h3>Exclusive BMW Accessories</h3>
          <p>
            Enhance your BMW driving experience with a range of premium
            accessories designed to complement your lifestyle and personalize
            your vehicle. From stylish exterior enhancements to innovative
            technology upgrades, BMW accessories are crafted with the same
            attention to detail and precision engineering that defines every BMW
            vehicle.
          </p>
          <br />
          {/* Dummy */}
          <button className="button">Browse more</button>
        </div>
      </div>
      <div className="bottom">
        <h2>Join The BMW Community</h2>
        <p>
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
