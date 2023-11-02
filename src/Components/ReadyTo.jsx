import iphone from "../assets/iphone.png";

function ReadyTo() {
  return (
    <div className="flex flex-col md:flex-row py-5 my-5 max-w-5xl mx-auto">
      <div className="w-full md:w-2/5 text-center md:text-left">
        <div className="mx-auto md:ml-0 mb-4">
          <img src={iphone} alt="" className="h-auto mx-auto  w-auto" />
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold">READY TO START A PROJECT?</h1>
          <div
            className="w-full mx-auto md:mx-0  mb-4 mt-3 h-1 border-black w-10"
            style={{ borderBottomWidth: 2 }}
          ></div>

          <p className="mb-5 text-[#818181]">
            Grant Design Group, a Las Vegas-based interior design firm, provides
            personal attention to its client’s needs and preferences throughout
            the entire design process. For us, design is the means, all the
            while providing interior design solutions commensurate with
            established budgets.
          </p>
          <h3 className="mb-5 font-semibold">
            FOR US, CLIENTS COME FIRST IN EVERYTHING WE DO.
          </h3>
          <button className="bg-white hover:bg-black text-gray-800 hover:text-white font-medium py-2 px-4 border border-gray-400 rounded shadow">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadyTo;
