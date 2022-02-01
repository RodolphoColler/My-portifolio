import { For } from 'solid-js';
import data from '../data';

function Projects() {
  return (
    <For each={ data }>{( { title } ) => 
      <h1>{title}</h1>
    }</For>
  )
}

export default Projects;