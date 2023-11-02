import { about } from '../Const';

function Text({title,description}) {
  return (
    <div className='mx-auto max-w-3xl text-center py-5'>
      <h1 className="text-xl font-semibold">{title}</h1>
      <div
        className=" textclass mx-auto lg:w-10 xl:w-10 mb-4 mt-3 h-1 border-black w-10"
        style={{ borderBottomWidth: 2 ,width:10 }}
        id='textclass'
      ></div>
      <p>{description}</p>
    </div>
  );
}

export default Text;
