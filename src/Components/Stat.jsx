import { imgsec } from '../Const';

function Stat() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
      {imgsec.map((item) => (
        <div key={item.id} className="overflow-hidden  p-4">
          <div className="flex justify-center  mx-auto  shadow-md hover:shadow-lg transition-shadow items-center h-32 w-32 bg-white rounded-full text-[#303030]">
            {<item.src/>}
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-[#303030] font-medium text-lg">{item.text}</h3>
            <p className="text-[#818181] text-sm mt-1">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stat;
