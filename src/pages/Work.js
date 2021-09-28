import Header from '../components/Header';
import Footer from '../components/Footer';

function Work() {
  return (
    <div className="Work">
      <Header index={2}/>
      <main>
        <h2>Work</h2>
        <ul>
          <li><a href="https://www.ungatio.se/" target="_blank" >Designer @ UNGATIO</a></li>
          <img src={'/work/ungatio.png'} class="nondragable"/>
          <li><a href="https://ldjam.com/users/liquidbrain/" target="_blank" >Gamedesigner @ Liquidbrain</a></li>
          <img src={'/work/brain.gif'} class="nondragable"/>
          <li><a href="http://swedengamearena.com/" target="_blank" >Stage Assistant @ Sweden Game Arena</a></li>
          <img src={'/work/stage.jpg'} class="nondragable"/>
          <li><a href="https://www.tekniskaverken.se/evenemang/innovation-camp/innovation-camp/" target="_blank" >Innovation Camp @ Tekniska Verken</a></li>
          <img src={'/work/camp.jpg'} class="nondragable"/>
          <li><a href="https://www.forsvarsmakten.se/sv/" target="_blank" >Military Service @ Försvarsmakten</a></li>
          <img src={'/work/military.jpg'} class="nondragable"/>
          <li><a href="https://www.google.com/search?q=%C3%B6stg%C3%B6tatak&rlz=1C1GGRV_enSE759SE759&oq=%C3%B6stg%C3%B6tatak&aqs=chrome..69i57j69i59j69i61j69i60l2.2088j1j7&sourceid=chrome&ie=UTF-8" target="_blank" >Roofer @ Östgötatak</a></li>
          <img src={'/work/tak.jpg'} class="nondragable"/>
          <li><a href="http://stangsmagasin.se/sv/" target="_blank" >Dishwasher @ Stångs Magasin</a></li>
          <img src={'/work/stangs.jpg'} class="nondragable"/>
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default Work;
