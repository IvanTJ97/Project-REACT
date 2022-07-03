import './App.css';
import Routes from './application/routes';
import Provider from './application/provider';
const App=()=>{
  return <div>
    <Provider>
      <Routes/>
    </Provider>
  </div>
}
export default App;
