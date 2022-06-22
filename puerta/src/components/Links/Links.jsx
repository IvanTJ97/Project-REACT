import { Test } from './Links.styles';
import { Link } from 'react-router-dom';
const Links=()=><Test>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/write">Write Messages</Link></li>
      <li><Link to="/see">See Messages</Link></li>
  </Test> 
  ;

export default Links;
