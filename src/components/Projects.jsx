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
        <img src={ path } width='500px'/>
        <aside>
          <div class="animation-container">
            <h1 class={ `${project}-title` } data-aos="new-animation">{index}<br />{project}</h1>
          </div>
          <p class={ `${project}-description`}>{ description }</p>
          <h2>LANGUAGES:</h2>
          <div class="languages-container">{languages.map(e => <p>{e}</p>)}</div>
          <div class='buttons-container'>
            <a href={ website } target='_blank'>
            <CgWebsite size={30}/>
              WEBSITE
            </a>
            <a href={ github } target='_blank'>
              <AiFillGithub size={32}/>
              SEE IN GITHUB
            </a>
          </div>
        </aside>
      </section>
    }</For>
  )
}

export default Projects;
