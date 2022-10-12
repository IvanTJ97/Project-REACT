import './App.css';
import Modal from './Modal/';
import {useState} from 'react';
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3,DiReact,DiGit} from "react-icons/di";
import {IoLogoJavascript,IoLogoFirebase} from "react-icons/io5";
import {SiStyledcomponents} from "react-icons/si";
import ImgPerfil from './Assets/perro.jpg';
import Imanes from './Assets/Imanes.png';
import Landing from './Assets/Landing.png';
const App=()=>{
  const [display,setDisplay]=useState(false);
  const funcion=()=>{
    setDisplay(false);
  };
  return <>
  <div className="container">
    <header>
      <h1 id='TJ97'>
          <a href="https://www.linkedin.com/in/ivan-tejedor-farreras-tj97">Ivan Tejedor Farreras - TJ97</a>
      </h1>
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
        <div className="cercle">
          <img alt='Foto Perfil' src={ImgPerfil} style={{width:150,height:150,borderRadius:"50%"}}/>
        </div>
      </div>
      <div className="title">
        <h2 style={{textAlign:"center"}}>Front-End Developer</h2>
        <h4>I love to think and develop web and mobile application ideas.</h4>
        <h4 style={{marginBottom:15}}>Based in Barcelona</h4>
        <h2 style={{textAlign:"center"}}>Skills</h2>
        <div className="gridSkills">
          <div className="html">
                <AiFillHtml5 style={{color:"#FF0000"}} size="30px"/>
              <h4>HTML</h4>
          </div>
          <div className="css">
                <DiCss3 style={{color:"#0000FF"}}
                size="30px"/>
              <h4>CSS</h4>
          </div>
          <div className="js">
                <IoLogoJavascript style={{color:"#FFFF00"}} 
                size="30px"/>
              <h4>JavaScript</h4>
          </div>
          <div className="react">
                <DiReact style={{color:"#00CCFF"}} size="30px"/>
              <h4>React</h4>
          </div>
          <div className="reactNative">
                <DiReact style={{color:"#00CCFF"}}
                size="30px"/>
              <h4>React Native</h4>
          </div>
          <div className="router">
                <DiReact style={{color:"#00FF00"}} size="30px"/>
              <h4>React Router</h4>
          </div>
          <div className="styled">
                <SiStyledcomponents style={{color:"#FF00FF"}} size="30px"/>
              <h4>Styled-Components</h4>
          </div>
          <div className="firebase">
                <IoLogoFirebase style={{color:"#FFCA28"}} size="30px"/> 
              <h4>FireBase</h4>
          </div>
          <div className="git">
                <DiGit style={{color:"#FF0000"}} size="30px"/>
              <h4>Git</h4>
          </div>
        </div>
      </div>
    </article>
    <article className='projects' id='projects'>
      <h2 style={{marginBottom:20}}>Projects</h2>
      <div className="gridProject">
        <section>
          <img src="" alt="" className="imgProject" />
          <h3>Profile</h3>
          <p>This web</p>
        </section>
          <section>
            <img src={Imanes} alt="ImanesImg" className="imgProject" />
            <h3>Imanes</h3>
            <p>Simple app to meet friends and friends of friends</p>
          </section>
          <section>
            <img src={Landing} alt="LandingImg" className="imgProject" />
            <h3>Imanes Landing Page</h3>
            <p>Landing Page of Imanes, made with Next.js and Tailwind.css</p>
          </section>
        <section>
          <img src="" alt="" className="imgProject" />
          <h3>Oca</h3>
          <p>Party Game, currently in development (80%)</p>
        </section>
        <section>
          <img src="" alt="" className="imgProject" />
          <h3>Tic, tac, toe</h3>
          <p>Classical game</p>
        </section>
        <section>
          <img src="" alt="" className="imgProject" />
          <h3>Wordle</h3>
          <p>Currently in development (50%)</p>
        </section>
      </div>
    </article>
    <article className='about' id='about'>
      <h2>Other achievements and random info</h2>
      <p>Currently studying web and mobile programming, both front-end and back-end.</p>
      <p>Graduated in international trade and in administration and finances.</p>
      <p>I would like to graduate from a computer science degree and learn other languages ​​such as node.js, python or php.</p>
      <p>Happily married and with a lovely dog.</p>
    </article>
    <article className='contact' id='contact'>
      <h2>Contact</h2>
      <ul>
        <li>
          <input type="button" value="Email" className="button-1" onClick={()=>{setDisplay(!display)}}/>
        </li>
        <li>
          <input type="button" value="GitHub" className="button-1"/>
        </li>
        <li>
          <input type="button" value="LinkdIn" className="button-1"/>
        </li>
      </ul>
    </article>
    <footer>Cosecha propria... aquí hay patacas v0.0.1</footer>
  </div>
  <Modal display={display} func={funcion}/>
  </>
}
export default App;