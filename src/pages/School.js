import Header from '../components/Header';
import Footer from '../components/Footer';

import gronkulla from '../images/school/gronkulla.png';
import blastad from '../images/school/blastad.jpg';
import haga from '../images/school/haga.jpg';
import lbs from '../images/school/lbs.jpg';
import liu from '../images/school/liu.jpeg';

function School() {
  return (
    <div className="School">
      <Header index={3}/>
      <main>
        <h2>School</h2>
        <ul>
          <li><a href="#">Grönkullaskolan, Blästadsskolan, Hagaskolan [Elementary]</a></li>
          <img src={gronkulla} class="nondragable"/>
          <img src={blastad} class="nondragable"/>
          <img src={haga} class="nondragable"/>
          <li><a href="#">Gamedevelopment @ LBS Linköping [Highschool]</a></li>
          <img src={lbs} class="nondragable"/>
          <li><a href="#">Software Engineering @ Linköpings Universitet [University]</a></li>
          <img src={liu} class="nondragable"/>
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default School;
