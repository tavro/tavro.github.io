import Header from '../components/Header';
import Footer from '../components/Footer';

function School() {
  return (
    <div className="School">
      <Header index={3}/>
      <main>
        <h2>School</h2>
        <ul>
          <li><a href="#">Grönkullaskolan, Blästadsskolan, Hagaskolan [Elementary]</a></li>
          <img src={'/school/gronkulla.png'} class="nondragable"/>
          <img src={'/school/blastad.jpg'} class="nondragable"/>
          <img src={'/school/haga.jpg'} class="nondragable"/>
          <li><a href="#">Gamedevelopment @ LBS Linköping [Highschool]</a></li>
          <img src={'/school/lbs.jpg'} class="nondragable"/>
          <li><a href="#">Software Engineering @ Linköpings Universitet [University]</a></li>
          <img src={'/school/liu.jpeg'} class="nondragable"/>
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default School;
