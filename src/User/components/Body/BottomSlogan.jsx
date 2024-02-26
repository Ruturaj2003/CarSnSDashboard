const BottomSlogan = () => {
  return (
    <div className=" w-full h-[550px] flex p-10">
      <div className="w-full h-[400px] flex flex-col  my-auto p-4 ">
        <h1 className="text-6xl font-slogan h-full block text-pri-blue ">
          Ready to make some <br /> sparks fly? Buckle up and <br />
          join our car-loving <br />
          community!
        </h1>
        s
        <div className="flex justify-around items-center w-[30%] mb-10">
          <button
            type="button"
            class="text-white bg-pri-blue hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Browse Cars
          </button>
          <button
            type="button"
            class="text-white bg-pri-blue hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Book Service
          </button>
        </div>
      </div>
    </div>
  );
};
export default BottomSlogan;
