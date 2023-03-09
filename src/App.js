import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       {Card()}
    </div>
  );
}


function Card(){
  return (
    <div className="card">
      <img src="../res/locationtest.png" alt="location"/>
    </div>
  )
}


export default App;
