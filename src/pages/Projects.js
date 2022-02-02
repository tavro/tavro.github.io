import Header from '../components/Header';
import Preview from '../components/Preview';

function Projects() {
  return (
    <div className="Projects">
      <Header index={1} content="Git happens..."/>
      <main>
          <h2>Projects</h2>
	      <p>Here you can find some of my work and projects I've been involved in.</p>
          {/*
          <Preview title={'Coff Language'} img={'/games/Party Penguin.png'}/>
          <Preview title={'cofflang.info'} img={'/games/Party Penguin.png'}/>
          <Preview title={'isakhorvath.me'} img={'/games/Party Penguin.png'}/>
          <Preview title={'Donsole'} img={'/games/Party Penguin.png'}/>
          <Preview title={'PoemScript'} img={'/games/Party Penguin.png'}/>
          <Preview title={'Minigrep'} img={'/games/Party Penguin.png'}/>
          <Preview title={'Birds'} img={'/games/Party Penguin.png'}/>
          <Preview title={'Scraper'} img={'/games/Party Penguin.png'}/>
          <Preview title={'Song Lyric Generator'} img={'/games/Party Penguin.png'}/>
          */}
          <Preview title={'Games'} img={'/games/Games.png'}/>
          <Preview title={'Websites'} img={'/games/Websites.png'}/>
          <Preview title={'Programs'} img={'/games/Programs.png'}/>
          <Preview title={'Music'} img={'/games/Music.png'}/>
      </main>
    </div>
  );
}

export default Projects;
