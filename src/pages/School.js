import Header from '../components/Header';
import Footer from '../components/Footer';

function School() {
  return (
    <div className="School">
      <Header index={3} content="Final year of bachelor, woo"/>
      <main>
        <h2>School</h2>
          <ul>
	  <li><a href="#">Software Engineering @ Linköpings Universitet [University]</a></li>
	  <p>During my time at university (2019-2021) I've been taking programming and software development more seriously. I've been working as frontend- and backenddeveloper for serveral different companies and projects.</p>
          <img src={'/school/liu.jpeg'} class="nondragable"/>
	  <li><a href="#">Gamedevelopment @ LBS Linköping [Highschool]</a></li>
	  <p>2016 I moved to Linköping to study gamedevelopment. During this period of my life I developed over 20 games for different assignments and gamejams in several different gameengines and programming languages (2016-2019)</p>
	  <img src={'/school/lbs.jpg'} class="nondragable"/>
          <li><a href="#">Grönkullaskolan, Blästadsskolan, Hagaskolan [Elementary]</a></li>
	  <p>When I went to Grönkullaskolan I first got introduced to gamedevelopment in Scratch (2009) and later started to develop mods to Minecraft in Java (2011-2012)</p>
          <img src={'/school/gronkulla.png'} class="nondragable"/>
	  <p>I moved to Linköping and took a break from gamedevelopment and programming during my time at Blästadsskolan (2012-2013)</p>
          <img src={'/school/blastad.jpg'} class="nondragable"/>
	  <p>When I moved back to Alvesta and went to Hagaskolan my interest in programming and gamedevelopment peaked and I started to develop software in several different programming languages and frameworks (2013-2016)</p>
          <img src={'/school/haga.jpg'} class="nondragable"/>
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default School;
