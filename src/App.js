import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
       {ExtraCard()}
      </p>
    </div>
  );
}


function Card(){
  return (
    <div className="card">
      HELLP!
    </div>
  )
}

function ExtraCard(){
  return (
    <div className="card">
      whats up!
    </div>
  )
}

export default App;
