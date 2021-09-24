import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="Contact">
      <Header index={4}/>
      <main>
        <h2>Contact Me</h2>
        <ul>
          <li><a href="tel:072-313-1082">Phone</a></li>
          <li><a href="mailto:isakhorvath@gmail.com">Mail</a></li>
          <li><a href="https://www.instagram.com/isakhorvath/?hl=sv">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/isak-horvath-683950165">LinkedIn</a></li>
          <li><a href="https://www.facebook.com/people/Isak-Horvath/100006285705451">Facebook</a></li>
          <li><a href="https://twitter.com/isakhorvath">Twitter</a></li>
        </ul>
        <p class="caption">List ordered based on how fast i reply</p>
      </main>
      <Footer/>
    </div>
  );
}

export default Contact;
