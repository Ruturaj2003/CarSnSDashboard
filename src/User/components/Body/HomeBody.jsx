import Features from './Features';
import Slogan from './Slogan';

export const HomeBody = () => {
  return (
    <div className="w-full -mt-10 bg-slate-300 h-[1000px] ">
      {/* Slogan */}
      <Slogan></Slogan>
      {/* Dont know what to name this */}
      <Features></Features>
    </div>
  );
};
