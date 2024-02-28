const BCCard = () => {
  return (
    <div
      onClick={() => console.log('Dota')}
      className="h-[300px] w-[400px] bg-slate-300  bg-opacity-25 rounded-lg flex flex-col p-2 cursor-pointer  "
    >
      {/* Image COntainer */}
      <div className="h-[80%] w-full bg-blue-500 rounded-md mb-3">
        <img
          src="https://imgs.search.brave.com/xUUC0xEbQYZ2b_PJFHW8KmqRIoPAFJvwKCbOBLRJjCY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYm13LWQ5NDJh/M3p4ZDhpM3VxYzgu/anBn"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* Name of Image */}
      <div className="h-[10%]">
        <h3 className="text-3xl font-tableD text-center">BMW X7</h3>
      </div>
    </div>
  );
};
export default BCCard;
