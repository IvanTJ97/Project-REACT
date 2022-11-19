import {useRef} from 'react';
import {BiArrowBack} from "react-icons/bi";
import emailjs from '@emailjs/browser';
const Modal=({func})=>{
  const form=useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm("service_q0ak2ae","template_8qtppm3",form.current,"UW_m_DjnandArYerx")
      .then((result)=>{alert("Message Sent correctly",result.text);},
            (error) => {alert("An error occurred, Please try again",error.text);
    });
  };
  return<div className='bg-white p-8 relative text-center'>
    <BiArrowBack size={30} className="absolute top-3 left-3 hover:cursor-pointer" onClick={func}/>
    <h2 className='text-2xl mb-5 text-center'>Send me a message!</h2>
    <form ref={form} onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        name="name" 
        className='w-full mb-5 border-b-2 focus:outline-none focus:border-blue-900'
      />
      <br />
      <textarea 
        cols="30" 
        rows="10" 
        name="message" 
        placeholder='Messsage' 
        className='resize-none mb-5 border-2 focus:outline-none focus:border-blue-900'>
      </textarea>
      <br />
      <input 
        type="submit" 
        value="Send" 
        className='py-2 px-20 text-xl  bg-[#FF11FF] hover:text-white hover:bg-[#FF00CC] hover:cursor-pointer'
      />
    </form>
</div>};
export default Modal;