import Header from '../components/Header';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="Projects">
      <Header index={1}/>
      <main>
        <h2>Projects</h2>
        <p>I'm currently rewriting this website in react.js, I will update this page soon!</p>
      </main>
      <Footer/>
    </div>
  );
}

export default Projects;
