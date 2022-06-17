import '../css/about.scss'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'solid-icons/ai';

function About() {
  return (
    <>
      <section class="about">
        <aside>
          <h1 data-aos="fade-in">me. <br /> what about me</h1>
          <p class='my-description' data-aos="custom-fade-up">
            As you know my name is Rodolpho, i live in state of 
            São Paulo, Brazil. Right now i'm adding back-end to my
            list of tools, so in some time i gonna be a full-stack
            developer.
            I'm curious programmer, like to improve my abilities,
            refactor code, and see problems from another approach.
            Starting from that i'm searching for a job that i can 
            contribute and be open to learn good programming.
          </p>
          <div data-aos="fade-in">
            <a href="https://github.com/RodolphoColler" target="_blank"><AiFillGithub size={30} color="#fffff"/>GITHUB</a>
            <a href="https://www.linkedin.com/in/rodolpho-coller/" target="_blank"><AiFillLinkedin size={30} color="#fffff"/>LINKEDIN</a>
            <a href="https://www.instagram.com/sweetie_da_isa/" target="_blank"><AiOutlineInstagram size={30} color="#fffff"/>INSTAGRAM</a>
          </div>
        </aside>
        <img src="https://i.imgur.com/v0r6bpJ.jpg" alt="" width="400px"/>
      </section>
    </>
  );
}

export default About;
