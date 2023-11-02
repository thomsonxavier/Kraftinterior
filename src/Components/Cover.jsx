import ImageGall from "./ImageGall";


function Cover() {
  return (
    <div className="w-full h-full py-10 bg-gray-200">
      <div className="text-black font-semibold text-center text-2xl leading-8">
        INDIA’S MOST EXPERIENCED,
        <br />
        PROFESSIONAL INTERIOR DESIGNERS
      </div>
      <div className="w-full mx-auto mt-5 h-1 border-black w-20" style={{ borderBottomWidth: 2 }}></div>
      <ImageGall/>

      <div className="text-black font-thin max-w-4xl mx-auto mt-4  text-center text-xl leading-8">
      Kraft interior is a National Award-Winning firm of Las Vegas interior designers,
helping clients realize their dreams for over 35 years
      </div>

    </div>
  );
}

export default Cover;
