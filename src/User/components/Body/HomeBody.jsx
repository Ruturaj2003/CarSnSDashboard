import Features from './Features';
import Slogan from './Slogan';
import Team from './Team';

export const HomeBody = () => {
  return (
    <div className="w-full -mt-10 bg-slate-300  ">
      {/* Slogan */}
      <Slogan></Slogan>
      {/* Dont know what to name this */}
      <Features></Features>
      <Team></Team>
    </div>
  );
};
