import Particles from 'react-particles';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>Hello everyone</p>


        <Particles
          params={{particles: {number:{value: 200, density: {enable: true, value_area:1000,}}}}}
        >

        </Particles>
    </div>
  );
}

export default App;
