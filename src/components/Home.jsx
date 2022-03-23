import '../css/home.scss'
import { RiSystemArrowDownSLine } from 'solid-icons/ri'

function Presentation() {
  return (
    <section id="home">
      <h1>Hi, Im Rodolpho</h1>
      <h2>Front-end developer <br /> trying look outside the box</h2>
      <h3>see my projects</h3>
      <a href="#trybewarts" target="_self" >
        <RiSystemArrowDownSLine size={70}/>
      </a>
    </section>
  );
}

export default Presentation;
