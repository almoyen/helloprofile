import './App.css';
import Timer from './pages/comingsoon/components/Countdown/Timer';
import Preloader from './pages/comingsoon/components/Preloader/Preloader'

function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>
        HelloProfile is Coming Soon...
      </h1>
      <h3> We're currently burning calories to build something awesome for you, stay tuned!</h3>
     <Timer/>
      <Preloader />
    </div>
  </div>
  );
}

export default App;
