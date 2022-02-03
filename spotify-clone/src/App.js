import './App.css';
import Leftmenu from './components/leftMenu';
import Mainmenu from './components/mainMenu';
import Rightmenu from './components/rightMenu';

const App = () => {
  return (
    <>
      <div className="App">

        <Leftmenu />
        <Mainmenu />
        <Rightmenu />
        <div className="background"></div>

      </div>
    </>
  );
}

export default App;
