import Card from '../components/Card';
import { MdOutlinePendingActions } from 'react-icons/md';
import { IoMdDoneAll } from 'react-icons/io';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
const Home = () => {
  return (
    <div className="w-full h-600px mt-5 flex flex-col mr-16">
      {/* Heading Container */}
      <div className="flex flex-col ">
        <h1 className=" text-center [word-spacing:25px] tracking-wider text-[#797979]  text-5xl font-homeT">
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
          <Card desc={'Serviced'} number={69}>
            <IoMdDoneAll className="text-8xl text-[#0066AD] mx-auto" />
          </Card>
        </div>

        {/* Card Col 2 */}
        <div className="w-full h-[270px]  bg-slate-50 p-5 flex items-center justify-evenly ">
          {/* Card 3  */}
          <Card desc={'Employees'} number={420}>
            <FaPeopleGroup className="text-8xl text-[#0066AD] mx-auto" />
          </Card>
          {/* Card 4 */}
          <Card desc={'Turn Over'} number={'12M'}>
            <FaMoneyBillTrendUp className="text-8xl text-[#0066AD] mx-auto" />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Home;
