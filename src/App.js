import MainLogo from './components/logo';
import './App.css';
import Login from './components/login';
import Sidepic from './components/sidepic';


function App() {
  return (
    <>
      <div className='main_logo'>
        <MainLogo/>
      </div>
      <div className='main_login'>
        <Login/>
      </div>
      <div className='sidepic'>
        <Sidepic/>
      </div>
      
    </>
  );
}

export default App;
