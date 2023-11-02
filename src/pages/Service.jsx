import Circle from "../Components/Circle";
import ImgCover from "../Components/ImgCover"
import Stat from "../Components/Stat";
import Text from "../Components/Text"
import { about } from "../Const";
import cover from '../assets/sec/services-header.jpg'


function Service() {
  return (
    <div>
        <ImgCover cover={cover}/>
        <Text title={about.service.title} description={about.service.description} />
        <div className="  max-w-4xl mx-auto text-center my-5 font-medium">
        <p>Residential work is at the heart of our interior design practice. Our work speaks for itself in the pages of our site. Our single family residence experience ranges from 3,500 to over 17,000 square feet.</p>
        </div>


        <div className="py-8">
        <Text title={about.service1.title}    />
        
        <Circle/>
        </div>
        <div>
        <Text title={about.service2.title} description={about.service2.description} />

        <Stat/>
        </div>
    </div>
  )
}

export default Service