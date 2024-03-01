import Footer from '../../components/Footer';
import BlackNavBar from '../BlackNavBar';

import abtPic from '../assets/abtpic.jpg';

const AboutUs = () => {
  return (
    <>
      <BlackNavBar></BlackNavBar>
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold">About Us</h1>
          <h4 className="text-xl text-gray-600">
            Dedicated to Motoring Experiences Since 1928
          </h4>
        </div>
        <section className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 px-4">
            <div className="about-image mb-8">
              <img
                src={abtPic}
                alt="BMW Image"
                className="w-full hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="about-content">
              <p className="text-2xl leading-relaxed font-tableD">
                Bayerische Motoren Werke AG (Bavarian Motor Works in English),
                is a German multinational company that produces luxury vehicles
                and motorcycles. It was founded in 1916 and is headquartered in
                Munich, Bavaria, Germany. BMW is known for its high-performance
                and luxury cars, as well as its motorcycles and engines.
                <br />
                <br />
                Our team of enthusiasts and experts share a deep appreciation
                for BMW's heritage of innovation and craftsmanship. Whether
                you're a long-time BMW owner, a prospective buyer, or simply an
                admirer of fine automobiles, you'll find a wealth of information
                and resources here to enhance your BMW journey.
                <br />
                <br /> From classic models to the latest releases, we cover the
                entire BMW lineup, highlighting performance, design, technology,
                and everything in between. Join us as we explore the past,
                present, and future of BMW, celebrating the driving pleasure
                that defines the ultimate driving machine.
                <br />
                <br /> Thank you for visiting. We invite you to explore, engage,
                and experience the thrill of BMW with us.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};
export default AboutUs;
