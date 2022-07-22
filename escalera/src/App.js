import './App.css';
import Jogo from './components/Jogo/';
import Provider from './application/provider';
const App=()=>{
  return <Provider>
    <Jogo/>
  </Provider>
}
export default App;
