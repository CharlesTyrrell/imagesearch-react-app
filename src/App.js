import logo from './logo.svg';
import './App.css';


function App()
{
  return(
    <div className='app'>
     <div className='media-scroller'>
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
     </div><div className='media-scroller'>
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
     </div><div className='media-scroller'>
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
     </div><div className='media-scroller'>
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
      {Card()}
     </div>
    </div>
  )
}

function Card(){
  return (
    <div className="card">
      <img src="../res/locationtest.png" alt="location"/>
    </div>
  )
}


export default App;
