import './App.css';
export default ()=>{
  return <div className="container">
    <header>
      <h2 id='TJ97'><a href="#">TJ97</a></h2>
      <nav>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <article className='head'>
      <div className="imagen">
        <div className="cercle"></div>
      </div>
      <div className="title">
        <h1>Developer Front-End</h1>
        <h4>Based in Barna</h4>
        <h2>Skills</h2>
        <h4>JS,CSS,HTML,REACT,STYLED COMPONENTS, REACT ROUTER, FIREBASE, GIT, JAVA, BOOTSTRAP</h4>
      </div>
    </article>
    <article className='projects' id='projects'>
      <h2>Projects</h2>
      <section>
        <h4>Section 1</h4>
        <p>Description</p>
      </section>
      <section>
        <h4>Section 2</h4>
        <p>Description</p>
      </section>
      <section>
        <h4>Section 3</h4>
        <p>Description</p>
      </section>
      <section>
        <h4>Section 4</h4>
        <p>Description</p>
      </section>
    </article>
    <article className='about' id='about'>
      <h2>About me</h2>
        <p>About me 1</p>
        <p>About me 2</p>
        <p>About me 3</p>
        <p>About me 4</p>
        <p>About me 5</p>
    </article>
    <article className='contact' id='contact'>
      <h2>Contact</h2>
      <ul>
        <li>Tlf</li>
        <li><input type="button" value="Email" class="button-1"/></li>
        <li><input type="button" value="GitHub" class="button-1"/></li>
      </ul>
    </article>
    <footer>Cosecha propria... aquí hay patacas</footer>
  </div>
}
