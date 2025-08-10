import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';
import './css/app.css';
import { onMount } from 'solid-js';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMount(() => {
  AOS.init({ duration: 1000, easing: 'ease-out' });
})

function App() {
  return (
    <>
      <div class='wrapper'>
        <Hero />
        <Projects />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
