import hero from '../../assets/hero.jpg';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const Hero1 = () => {
  return (
    <>
      <CCarouselItem>
        <CImage
          className="h-[600px] w-full relative -z-10 -top-[90px]"
          src={hero}
          alt="slide 1"
        />

        {/* <img
        className="h-[600px] w-full relative -z-10 -top-[90px] "
        src={hero}
        alt=""
      /> */}
        <div className="absolute right-6 bottom-[200px] text-white">
          <h1 className="text-8xl font-heroFont">
            Sheer Driving
            <br></br>
            <span className="font-bold">Pleasure </span>{' '}
          </h1>
        </div>
      </CCarouselItem>
    </>
  );
};
export default Hero1;
