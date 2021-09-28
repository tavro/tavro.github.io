import Header from '../components/Header';
import Footer from '../components/Footer';
import Preview from '../components/Preview';

function Projects() {
    const games = ["Party Penguin", "Monkey Farming Sim", "Retro Colors", "Flower Power", "Infecteria", "Eggplant Kindergarten", "Powered By Coal", "Pyramid Building Sim", "Garage Sale", "Animal Transmission", "Abandoned Tech", "Paniscu Island", "Surviva", "Blob", "Robber & Robert", "Compost Wars"]
  return (
    <div className="Projects">
      <Header index={1}/>
      <main>
          <h2>Games</h2>
	  <p>Some of the games I've developed over the years.</p>
         <div>
          {
          games.map((game,i) => (
            <Preview title={game} img={'/games/' + game + '.png'}/>
          ))
          }
         </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Projects;
