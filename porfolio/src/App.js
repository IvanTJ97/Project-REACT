import Modal from './components/Modal';
import {useState} from 'react';
import {AiFillHtml5,AiOutlineMail,AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import {DiCss3,DiReact} from "react-icons/di";
import {IoLogoJavascript,IoLogoFirebase} from "react-icons/io5";
import {SiStyledcomponents,SiTailwindcss} from "react-icons/si";
import ImgPerfil from './Assets/IT.jpeg';
import Imanes from './Assets/Imanes.png';
import Landing from './Assets/landing.png';
import API from './Assets/api.png';
import WORDLE from './Assets/wordle.png';
import ESCALERA from './Assets/escalera.png';
import Profile from './Assets/profile.png';
const App=()=>{
  const [display,setDisplay]=useState(false);
  const closeModal=()=>setDisplay(false);
  return <>
  <div className='bg-slate-900 text-white' id='Inicio'>
      <nav className='mb-10 pt-1'>
        <ul className='flex flex-row list-none'>
          <li className='grid place-items-center flex-1 text-center text-3xl font-bold'><h1>TJ97</h1></li>
          <li className='grid place-items-center flex-1 text-center'><a href="#projects" className='border-white hover:border-b-2 hover:text-xl'>Projects</a></li>
          <li className='grid place-items-center flex-1 text-center'><a href="#about" className='border-white hover:border-b-2 hover:text-xl'>About me</a></li>
          <li className='grid place-items-center flex-1 text-center'><a href="#contact" className='border-white hover:border-b-2 hover:text-xl'>Contact</a></li>
        </ul>
      </nav>
    <header className='grid grid-cols-2 place-items-center mb-10'>
      <div>
        <img alt='Foto Perfil' src={ImgPerfil} style={{width:250,height:250}}/>
      </div>
      <div className="text-center">
        <h2 className='text-3xl font-semibold'>Front-End Developer</h2>
        <h4 className='text-xl'>Hi, I'm Ivan Tejedor Farreras.</h4>
        <h4 className='text-xl'>I love to think and develop web and mobile application ideas.</h4>
        <h4 className='text-xl mb-4'>Based in Barcelona</h4>
        <h2 className='text-3xl font-semibold mb-2'>Skills</h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex justify-center items-center">
              <AiFillHtml5 style={{color:"#FF0000"}} size="30px"/>
              <h4 className='text-xl'>HTML</h4>
          </div>
          <div className="flex justify-center items-center">
                <DiCss3 style={{color:"#0000FF"}} size="30px"/>
              <h4 className='text-xl'>CSS</h4>
          </div>
          <div className="flex justify-center items-center">
                <IoLogoJavascript style={{color:"#FFFF00"}} size="30px"/>
              <h4 className='text-xl'>JavaScript</h4>
          </div>
          <div className="flex justify-center items-center">
                <DiReact style={{color:"#00CCFF"}} size="30px"/>
              <h4 className='text-xl'>React</h4>
          </div>
          <div className="flex justify-center items-center">
                <DiReact style={{color:"#00CCFF"}} size="30px"/>
              <h4 className='text-xl'>React Native</h4>
          </div>
          <div className="flex justify-center items-center">
                <DiReact style={{color:"#00FF00"}} size="30px"/>
              <h4 className='text-xl'>React Router</h4>
          </div>
          <div className="flex justify-center items-center">
                <SiStyledcomponents style={{color:"#FF00FF"}} size="30px"/>
              <h4 className='text-xl'>Styled-Components</h4>
          </div>
          <div className="flex justify-center items-center">
                <IoLogoFirebase style={{color:"#FFCA28"}} size="30px"/> 
              <h4 className='text-xl'>FireBase</h4>
          </div>
          <div className="flex justify-center items-center">
                <SiTailwindcss style={{color:"#00CCFF"}} size="30px"/>
              <h4 className='text-xl'>Tailwind CSS</h4>
          </div>
        </div>
      </div>
    </header>
    <article className='bg-white mb-5 pb-10' id='projects'>
      <h2 className='font-semibold text-3xl text-center mb-5 pt-5 text-slate-900'>Projects</h2>
      <div className="grid grid-cols-3 gap-x-2">
        <div className="grid place-items-center bg-slate-900 pt-5 ml-2 rounded-t-xl px-5">
          <img src={Profile} alt="profile"/>
        </div>
        <div className="grid place-items-center bg-slate-900 pt-5 rounded-t-xl px-5">
          <img src={Imanes} alt="ImanesImg"/>
        </div>
        <div className="grid place-items-center bg-slate-900 pt-5 mr-2 rounded-t-xl px-5">
          <img src={Landing} alt="LandingImg"/>
        </div>
        <div className='text-center bg-slate-900 ml-2 pb-2'>
          <h3 className='text-2xl'>Profile</h3>
          <p className='text-xl'>This web, made with Reactjs and TailwindCSS</p>
        </div>
        <div className='text-center bg-slate-900 pb-2'>
          <h3 className='text-2xl'>Imanes</h3>
          <p className='text-xl'>Simple app to meet friends and friends of friends, made with React Native and Firebase</p>
        </div>
        <div className='text-center bg-slate-900 mr-2 pb-2'>
          <h3 className='text-2xl'>Imanes Landing Page</h3>
          <p className='text-xl'>Landing Page of Imanes, made with Next.js and TailwindCSS</p>
        </div>
        <div className='text-center bg-slate-900 rounded-b-xl pb-5 ml-2'>
          <a href="#Inicio">
            <input 
              type="button" 
              value="Visit" 
              className='bg-white text-slate-900 rounded py-2 px-3 hover:cursor-pointer hover:bg-black hover:text-white'
            />
          </a>
        </div>
        <div className='text-center bg-slate-900 rounded-b-xl pb-5'>
          <a href="https://play.google.com/store/apps/details?id=com.tj97.imanes">
            <input 
              type="button" 
              value="Play Store" 
              className='bg-white text-slate-900 rounded py-2 px-3 hover:cursor-pointer hover:bg-black hover:text-white'
            />
          </a>
        </div>
        <div className='text-center bg-slate-900 rounded-b-xl pb-5 mr-2'>
          <a href="https://imanes-apl.web.app/">
            <input 
              type="button" 
              value="Visit" 
              className='bg-white text-slate-900 rounded py-2 px-3 hover:cursor-pointer hover:bg-black hover:text-white'
            />
          </a>
        </div>
        <div className="grid place-items-center bg-slate-900 pt-5 mt-2 ml-2 rounded-t-xl px-5">
          <img src={ESCALERA} alt="Escalera"/>
        </div>
        <div className="grid place-items-center bg-slate-900 pt-5 mt-2 rounded-t-xl px-5">
          <img src={API} alt="APIS"/>
        </div>
        <div className="grid place-items-center bg-slate-900 pt-5 mt-2 mr-2 rounded-t-xl px-5">
          <img src={WORDLE} alt="Wordle"/>
        </div>
        <div className='text-center bg-slate-900 ml-2 pb-2'>
          <h3 className='text-2xl font-semibold'>ESCALERA</h3>
          <p className='text-xl'>Party Game, made in React Native. You can download the apk here.</p>
        </div>
        <div className='text-center bg-slate-900 pb-2'>
          <h3 className='text-2xl font-semibold'>APIs</h3>
          <p className='text-xl'>You can find some data of Pokemon, Persons created by AI or movies, all with API Rest method.</p>
        </div>
        <div className='text-center bg-slate-900 mr-2 pb-2'>
          <h3 className='text-2xl font-semibold'>WORDLE</h3>
          <p className='text-xl'>Worlde created in REACT</p>
        </div>
        <div className='text-center bg-slate-900 rounded-b-xl pb-5 ml-2'>
          <a href="https://drive.google.com/file/d/1JJucTze1SIyXKjk8U8xpapUoREMEKsMZ/view?usp=sharing">
            <input 
              type="button" 
              value="Download APK" 
              className='bg-white text-slate-900 rounded py-2 px-3 hover:cursor-pointer hover:bg-black hover:text-white'
            />
          </a>
        </div>
        <div className='text-center bg-slate-900 rounded-b-xl pb-5'>
          <a href="#project" onClick={()=>{alert("Próximamente")}}>
            <input 
              type="button" 
              value="Visit" 
              className='bg-white text-slate-900 rounded py-2 px-3 hover:cursor-pointer hover:bg-black hover:text-white'
            />
          </a>
        </div>
        <div className='text-center bg-slate-900 rounded-b-xl pb-5 mr-2'>
          <a href="https://ivantj97.github.io/Wordle-Handmade/">
            <input 
              type="button" 
              value="Visit" 
              className='bg-white text-slate-900 rounded py-2 px-3 hover:cursor-pointer hover:bg-black hover:text-white'
            />
          </a>
        </div>
      </div>
    </article>
    <article className='mb-5' id='about'>
      <h2 className='font-semibold text-3xl text-center mb-5'>Other achievements and random info</h2>
      <ul className='list-disc'>
        <li className='pl-3 text-xl'><p>Currently studying web and mobile programming, both front-end and back-end.</p></li>  
        <li className='pl-3 text-xl'><p>Graduated in international trade and in administration and finances.</p></li>
        <li className='pl-3 text-xl'><p>I would like to graduate from a computer science degree and learn other languages ​​such as node.js, python or php.</p></li>
      </ul>
    </article>
    <article className='mb-3' id='contact'>
      <h2 className='font-semibold text-3xl text-center mb-3'>Contact</h2>
      <ul className='flex flex-row'>
        <li className='flex-1 grid place-items-center hover:cursor-pointer hover:text-[#ea4335]'>
          <AiOutlineMail onClick={()=>{setDisplay(prev=>!prev)}} size="30px"/>
        </li>
        <li className='flex-1 grid place-items-center hover:cursor-pointer hover:text-[#6cc644]'>
          <a href="https://github.com/IvanTJ97">
            <AiFillGithub size="30px"/>
          </a>
        </li>
        <li className='flex-1 grid place-items-center hover:cursor-pointer hover:text-[#0077b5]'>
          <a href="https://www.linkedin.com/in/ivan-tejedor-farreras-tj97/">
            <AiFillLinkedin size="30px"/>
          </a>
        </li>
      </ul>
    </article>
    <footer className='text-center'>¬¬ Cosecha propria... aquí hay patacas @IvanTJ97 v0.0.1</footer>
  </div>
  <div className={display?"grid fixed top-0 left-0 w-full h-full place-items-center bg-black/50":"hidden"}>
    <Modal func={closeModal}/>
  </div>
  </>
}
export default App;