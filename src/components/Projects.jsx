import { For } from 'solid-js';
import data from '../data';
import '../css/trybewarts.css'

function Projects() {
  return (
    <For each={ data }>{( { index, title, path, description, languages } ) =>
      <section class={ title }>
        <img src={ path } width='500px'/>
        <aside>
          <h1 class={ `${title}-title` }>{index}<br />{title}</h1>
          <p class={ `${title}-description` }>{ description }</p>
          <h2>LANGUAGES:</h2>
          <div className="container-languages">{languages.map(e => <p>{e}</p>)}</div>
          <button>SEE MORE</button>
        </aside>
      </section>
    }</For>
  )
}

export default Projects;
