import Header from '../../components/Header';
import Preview from '../../components/Preview';

function Music() {
  return (
    <div className="Music">
      <Header index={1} content="Baby, baby, baby, ohhhhh"/>
      <main>
          <h2>Music</h2>
	        <p>Here you can find some of the music I've produced.</p>
          <Preview url='/rewind' title={'Rewind'} img={'/games/Rewind.png'}/>
      </main>
    </div>
  );
}

export default Music;
