import { Test } from './Links.styles';
import { Link } from 'react-router-dom';
const Links=()=><Test>
  <ul>
    <li><Link to="/TicToe/cpu/">VS CPU</Link></li>
    <li><Link to="/TicToe/vs/">1 VS 1</Link></li>
  </ul>
  </Test>;
export default Links;
