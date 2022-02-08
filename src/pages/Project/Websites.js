import Header from '../../components/Header';
import Preview from '../../components/Preview';

function Websites() {
  return (
    <div className="Websites">
      <Header index={1} content="<span><p>Lorem Ipsum</p></span><br>"/>
      <main>
          <h2>Websites</h2>
	        <p>Here you can find some of the websites I've been involved in.</p>
          <Preview url='/cofflang' title={'cofflang'} img={'/games/Coff.png'}/>
          <Preview url='/staben' title={'staben.info'} img={'/games/STABEN.png'}/>
          <Preview url='/dsektionen' title={'d-sektionen.se'} img={'/games/Data.png'}/>
          <Preview url='/' title={'isakhorvath.me'} img={'/games/Tavro.png'}/>
      </main>
    </div>
  );
}

export default Websites;
