import { For } from 'solid-js';
import data from '../data';
import { AiFillGithub } from 'solid-icons/ai';
import { CgWebsite } from 'solid-icons/cg';
import '../css/trybewarts.scss';
import '../css/fifteen-puzzle.scss';

function Projects() {
  return (
    <For each={ data }>{( { index, project, path, description, languages, website, github } ) =>
      <section class={ project }>
        <img src={ path } width='500px' data-aos="fade-right" data-aos-delay="600" />
        <aside>
          <div class="animation-container">
            <h1 class={ `${project}-title` } data-aos="new-animation">{index}<br />{project}</h1>
          </div>
          <p class={ `${project}-description`} data-aos="fade-up" >{ description }</p>
          <div class="animation-container">
            <h2 data-aos="new-animation" data-aos-duration="900" data-aos-easing="ease-in-out" >LANGUAGES:</h2>
          </div>
          <div class="languages-container animation-container">
            {languages.map(e => <p data-aos="fade-up" >{e}</p>)}
          </div>
          <div class="animation-container">
            <div class='buttons-container' data-aos="new-animation" >
              <a href={ website } target='_blank'>
              <CgWebsite size={30}/>
                WEBSITE
              </a>
              <a href={ github } target='_blank'>
                <AiFillGithub size={32}/>
                SEE IN GITHUB
              </a>
            </div>
          </div>
        </aside>
      </section>
    }</For>
  )
}

export default Projects;
