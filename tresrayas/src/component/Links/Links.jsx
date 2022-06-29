import { Test } from './Links.styles';
import { Link } from 'react-router-dom';
const Links=()=><Test>
  <ul>
      <li><Link to="/cpu">VS CPU</Link></li>
      <li><Link to="/vs">1 VS 1</Link></li>
  </ul>
  </Test>;
export default Links;
