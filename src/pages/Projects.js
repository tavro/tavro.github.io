import Header from '../components/Header';
import Preview from '../components/Preview';

function Projects() {
  return (
    <div className="Projects">
      <Header index={1} content="Git happens..."/>
      <main>
          <h2>Projects</h2>
	      <p>Here you can find some of my work and projects I've been involved in.</p>
          <Preview url='/games' title={'Games'} img={'/games/Games.png'}/>
          <Preview url='/websites' title={'Websites'} img={'/games/Websites.png'}/>
          <Preview url='/programs' title={'Programs'} img={'/games/Programs.png'}/>
          <Preview url='/music' title={'Music'} img={'/games/Music.png'}/>
      </main>
    </div>
  );
}

export default Projects;
