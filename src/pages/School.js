import Header from '../components/Header';

function School() {
  return (
    <div className="School">
      <Header index={3} content="Final year of bachelor, woo"/>
      <main>
        <h2>School</h2>
        <ul>
	  <li><a href="https://liu.se/">Software Engineering @ Linköpings Universitet [University]</a></li>
	      <img alt="LiU" src={'/school/liu.jpeg'} class="nondragable"/>
	      <p>During my time at university (2019-2022) I've been taking programming and software development more seriously. I've been working as frontend- and backend developer for serveral different companies and projects.</p>
	      <li><a href="https://www.lbs.se/linkoping/">Gamedevelopment @ LBS Linköping [Highschool]</a></li>
	      <img alt="LBS" src={'/school/lbs.jpg'} class="nondragable"/>
	      <p>2016 I moved to Linköping to study gamedevelopment. During this period of my life I developed over 20 games for different assignments and gamejams in several different gameengines and programming languages (2016-2019)</p>
          <li><a href="https://www.alvesta.se/Barn--Utbildning/Grundskola/">Grönkullaskolan, Blästadsskolan, Hagaskolan [Elementary]</a></li>
	      <img alt="Gronkulla" src={'/school/gronkulla.png'} class="nondragable"/>
	      <p>When I went to Grönkullaskolan I first got introduced to gamedevelopment in Scratch (2009) and later started to develop mods to Minecraft in Java (2011-2012)</p>
          <img alt="Blastad" src={'/school/blastad.jpg'} class="nondragable"/>
	      <p>I moved to Linköping and took a break from gamedevelopment and programming during my time at Blästadsskolan (2012-2013)</p>
          <img alt="Haga" src={'/school/haga.jpg'} class="nondragable"/>
	      <p>When I moved back to Alvesta and went to Hagaskolan my interest in programming and gamedevelopment peaked and I started to develop software in several different programming languages and frameworks (2013-2016)</p>
        </ul>
      </main>
    </div>
  );
}

export default School;
