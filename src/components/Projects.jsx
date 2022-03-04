import { For } from 'solid-js';
import data from '../data';
import '../css/trybewarts.css'
import '../css/fifteen-puzzle.css'
import { AiFillGithub } from 'solid-icons/ai'

function Projects() {
  return (
    <For each={ data }>{( { index, title, path, description, languages, website, github } ) =>
      <section class={ title }>
        <img src={ path } width='500px'/>
        <aside>
          <h1 class={ `${title}-title` }>{index}<br />{title}</h1>
          <p class={ `${title}-description` }>{ description }</p>
          <h2>LANGUAGES:</h2>
          <div className={`${title}-languages`}>{languages.map(e => <p>{e}</p>)}</div>
          <div class='buttons-container'>
            <a href={ website } target='_blank'>SEE MORE</a>
            <a href={ github } target='_blank'>
              <AiFillGithub size={30} class='git-icon'/>
              <p>SEE IN GITHUB</p>
            </a>
          </div>
        </aside>
      </section>
    }</For>
  )
}

export default Projects;
