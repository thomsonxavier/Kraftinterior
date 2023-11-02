import { about } from "../Const";
import ImgCover from "../Components/ImgCover";
import Text from "../Components/Text";
import Stat from "../Components/Stat";
import cover from '../assets/sec/about.jpg'


function About() {
  return (
    <div className="  relative ">

      
     <ImgCover cover={cover} />
      <Text title={about.about1.title} description={about.about1.description}  />

      <Text title={about.about2.title} description={about.about2.description} />
      
      <Stat/>

      
      
    </div>
  );
}

export default About;



      
