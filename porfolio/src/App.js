import './App.css';
export default ()=>{
  return <div className="container">
    <header>
      <h2 id='TJ97'><a href="#">TJ97</a></h2>
      <nav>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Contact</a></li>
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
    <article className='projects'>
      <h2>Projects</h2>
    </article>
    <article className='about'>
      <h2>About me</h2>
    </article>
    <article className='contact'>
      <h2>Contact</h2>
    </article>
    <footer>Footer</footer>
  </div>
}
