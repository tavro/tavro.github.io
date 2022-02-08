import Header from '../../components/Header';
import Preview from '../../components/Preview';

function Games() {
  return (
    <div className="Games">
      <Header index={1} content="Wanna play Minecraft???"/>
      <main>
          <h2>Games</h2>
	        <p>Here you can find some of my games.</p>
          <Preview url='/retrocolors' title={'Retro Colors'} img={'/games/Retro Colors.png'}/>
          <Preview url='/partypenguin' title={'Party Penguin'} img={'/games/Party Penguin.png'}/>
          <Preview url='/abandonedtech' title={'Abandoned Technology'} img={'/games/Abandoned Tech.png'}/>
          <Preview url='/animaltrans' title={'Animal Transmission'} img={'/games/Animal Transmission.png'}/>
      </main>
    </div>
  );
}

export default Games;
