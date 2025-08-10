import '../css/hero.scss'
import { RiSystemArrowDownSLine } from 'solid-icons/ri'

function Hero() {
  return (
    <section id="hero">
      <h1>Ola, sou Rodolpho</h1>
      <h2>Desenvolvedor Full-stack <br/> procurando o diferente</h2>
      <div id='see-projects' >
        <h3>veja meus projetos</h3>
        <a href="#trybewarts">
          <RiSystemArrowDownSLine size={70}/>
        </a>
      </div>
    </section>
  );
}

export default Hero;
