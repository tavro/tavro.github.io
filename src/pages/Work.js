import Header from '../components/Header';

function Work() {
  return (
    <div className="Work">
      <Header index={2} content="Just get ready for work, work, work, work"/>
      <main>
        <h2>Work</h2>
        <li>
            <b>Opera</b>
            <ul>2022 | Student Ambassador</ul>
            <ul>2022 | Summer Intern</ul>
        </li>
        <li>
            <b>Laboratory Assistant @ Linköping University</b>
            <ul>2022 | TDDI16, Datastructures & Algorithms</ul>
            <ul>2022 | TDDD78, OO-programming & Java</ul>
            <ul>2021 | TDDE24, Functional & Imperative programming</ul>
            <ul>2021 | TDDE23, Functional & Imperative programming</ul>
        </li>
        <li>
            <b>LiU Formula Student</b>
            <ul>2021 | Software Engineer @ Driverless</ul>
            <ul>2021 | Server Manager</ul>
        </li>
        <li>
            <b>Datateknologsektionen</b>
            <ul>2022 | Webmaster @ WebbU</ul>
            <ul>2021 | Webmaster @ WebbU</ul>
            <ul>2021 | Web & Info @ STABEN</ul>
        </li>
        <p>2021 | Frontend Developer @ Deepdialog </p>
        <p>2019 | Game Developer @ East Sweden Game </p>
      </main>
    </div>
  );
}

export default Work;
