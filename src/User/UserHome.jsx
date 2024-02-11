import hero from './assets/hero.jpg';
const UserHome = () => {
  return (
    <div className=" relative">
      <img
        className="h-[600px] w-full relative -z-10 -top-[90px] "
        src={hero}
        alt=""
      />
      <div className="absolute right-6 bottom-[200px] text-white">
        <h1 className="text-8xl font-tableH">
          Sheer Driving <span className="font-bold"> Pleasure </span>{' '}
        </h1>
      </div>
    </div>
  );
};
export default UserHome;
