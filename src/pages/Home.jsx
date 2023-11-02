import Cover from "../Components/Cover"
import Hero from "../Components/Hero"
import Project from "../Components/Project"
import ReadyTo from "../Components/ReadyTo"
import Text from "../Components/Text"
import { about } from "../Const";


function Home() {
  return (
    <div>
        <Hero/>
        <Cover/>
        <ReadyTo/>
        <Text title={about.Home.title} type={'home'}  />
        <Project/>
    </div>
  )
}

export default Home