import { CCarousel } from '@coreui/react';
import Hero1 from './components/Hero/Hero1';
const UserHome = () => {
  return (
    <div className=" relative">
      {/* <Hero1></Hero1> */}
      <CCarousel controls transition="crossfade">
        <Hero1></Hero1>
        {/* <CCarouselItem>
          <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
        </CCarouselItem> */}
      </CCarousel>
    </div>
  );
};
export default UserHome;
