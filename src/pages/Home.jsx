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
        <div className="w-full h-[270px]  bg-slate-300 p-5 flex items-center justify-evenly ">
          {/* Card 1  */}
          <div className="flex flex-col w-[300px] h-[200px] bg-green-100  p-6 items-center justify-center">
            <div className="h-[60%] w-full bg-slate-400">43</div>
            <div className="h-[30%] text-4xl text-center bg-slate-200 w-full">
              asd
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col w-[300px] h-[200px] bg-green-100  p-6 items-center justify-center">
            <div className="h-[60%] w-full bg-slate-400">43</div>
            <div className="h-[30%] text-4xl text-center bg-slate-200 w-full">
              asd
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
