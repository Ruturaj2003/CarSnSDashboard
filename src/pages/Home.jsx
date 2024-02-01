import Card from '../components/Card';
import { MdOutlinePendingActions } from 'react-icons/md';
const Home = () => {
  return (
    <div className="w-full h-600px mt-5 flex flex-col mr-16">
      {/* Heading Container */}
      <div className="flex flex-col ">
        <h1 className=" text-center [word-spacing:25px] tracking-wider  text-5xl font-homeT">
          Business Operations Analytics{' '}
        </h1>
        <div className="border-b-2 border-b-slate-200"></div>
      </div>
      {/* Cards Container */}
      <div className="flex flex-col h-[540px] w-full mr-16 bg-red-50 ">
        {/* Card Col 1 */}
        <div className="w-full h-[270px]  bg-slate-50 p-5 flex items-center justify-evenly ">
          {/* Card 1  */}
          <Card desc={'Pending'} number={7}>
            <MdOutlinePendingActions className="text-8xl text-[#0066AD] mx-auto" />
          </Card>
          {/* Card 2 */}
          <Card></Card>
        </div>

        {/* Card Col 2 */}
        <div className="w-full h-[270px]  bg-slate-50 p-5 flex items-center justify-evenly ">
          {/* Card 3  */}
          <Card></Card>
          {/* Card 4 */}
          <Card></Card>
        </div>
      </div>
    </div>
  );
};
export default Home;
