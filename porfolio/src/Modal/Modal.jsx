import {Style} from "./Modal.styles";
const Modal=({display,func})=><Style display={display}>
  <div>
    <p><span onClick={func}>X</span></p>
    <h2>Send me a message!</h2>
    <input type="text" placeholder="Name" />
    <br />
    <textarea cols="30" rows="10"></textarea>
    <br />
    <input type="button" value="Send" />
  </div>
</Style>;
export default Modal;
