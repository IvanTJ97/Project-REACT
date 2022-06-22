import Routes from './application/routes';
import Provider from './application/provider';
const App=()=>{
  return <>
    <Provider>
      <Routes/>
    </Provider>
  </>
}
export default App;
