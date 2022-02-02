import '../App.css';

import Header from '../components/Header';

function Contact() {
  return (
    <div className="Contact">
      <Header index={4} content="Feel free to contact me"/>
      <main>
        <h2>Contact Me</h2>
        <p>I'm currently rewriting this page from scratch, so the sign-in & up does not work at the moment.</p>
        <p>In order to contact me through this website you have to <a href="#">log in</a>. If you do not have an account, please create one <a href="#">here</a>.</p>
      </main>
    </div>
  );
}

export default Contact;
