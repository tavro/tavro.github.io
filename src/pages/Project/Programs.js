import Header from '../../components/Header';
import Preview from '../../components/Preview';

function Programs() {
  return (
    <div className="Programs">
      <Header index={1} content="Segmentation fault"/>
      <main>
          <h2>Programs</h2>
	        <p>Here you can find some of the websites I've been involved in.</p>
          <Preview url='/donsole' title={'Donsole'} img={'/games/Donsole.png'}/>
          <Preview url='/poemscript' title={'PoemScript'} img={'/games/PoemScript.png'}/>
          <Preview url='/minigrep' title={'Minigrep'} img={'/games/Grep.png'}/>
          <Preview url='/scraper' title={'Scraper'} img={'/games/Scraper.png'}/>
      </main>
    </div>
  );
}

export default Programs;
