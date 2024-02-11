import hero from '../../assets/hero2.jpg';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
const Hero2 = () => {
  return (
    <>
      <CCarouselItem>
        <CImage
          className="h-[600px] w-full relative -z-10 -top-[90px]"
          src={hero}
          alt="slide 2"
        />

        {/* <img
        className="h-[600px] w-full relative -z-10 -top-[90px] "
        src={hero}
        alt=""
      /> */}
        <div className=" right-6 bottom-[200px] text-white">
          <h1 className="text-8xl font-heroFont">
            Striving For
            <br></br>
            <span className="font-bold">Excellence </span>{' '}
          </h1>
        </div>
      </CCarouselItem>
    </>
  );
};
export default Hero2;
