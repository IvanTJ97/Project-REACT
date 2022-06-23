import './App.css';
import Modal from './Modal/';
import {useState} from 'react';

const App=()=>{
  const [display,setDisplay]=useState(false);
  const funcion=()=>{
    setDisplay(false);
  };
  return <>
  <div className="container">
    <header>
      <h2 id='TJ97'><a href="#">TJ97-Ivan Tejedor Farreras</a></h2>
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
        <div className="cercle"/>
      </div>
      <div className="title">
        <h1>Front-End Developer</h1>
        <h4>I love to think and develop web and mobile application ideas.</h4>
        <h4>Based in Barcelona</h4>
        <h2>Skills</h2>
        <h4>HTML, CSS, JavaScript, React, Styled-Components, React Router, Git, FireBase, NodeJS, React Native</h4>
      </div>
    </article>
    <article className='projects' id='projects'>
      <h2>Projects</h2>
      <section>
        <h4>Profile</h4>
        <p>This web actually, currently in development</p>
      </section>
      <section>
        <h4>Oca</h4>
        <p>Party Game, currently in development (80%)</p>
      </section>
      <section>
        <h4>Tic, tac, toe</h4>
        <p>Classical game</p>
      </section>
      <section>
        <h4>Wordle</h4>
        <p>Currently in development (50%)</p>
      </section>
    </article>
    <article className='about' id='about'>
      <h2>Other achievements and random info</h2>
      <p>Former student of physics at UB(University of Barcelona)</p>
      <p>Graduated in international trade and in administration and finances.</p>
      <p>Currently studying web and mobile programming, both front-end and back-end.</p>
      <p>I would like to graduate from a computer science degree and learn other languages ​​such as java, python or golang.</p>
      <p>Happily married and with a lovely dog.</p>
    </article>
    <article className='contact' id='contact'>
      <h2>Contact</h2>
      <ul>
        <li><input type="button" value="Email" className="button-1" onClick={()=>{setDisplay(!display)}}/></li>
        <li><input type="button" value="GitHub" className="button-1"/></li>
      </ul>
    </article>
    <footer>Cosecha propria... aquí hay patacas v0.0.1</footer>
  </div>
  <Modal display={display} func={funcion}/>
  </>
}
export default App;