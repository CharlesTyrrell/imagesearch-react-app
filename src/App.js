import logo from './logo.svg';
import './App.css';


function App()
{
  return(
    <div className='app'>
      <div className='app-images'>
        <div className='media-scroller'>
          {Card()}
          {Card()}
          {Card()}
          {Card()}
          {Card()}
        </div>
     </div>
      <div className='app-locations'>
        <div className='media-scroller'>
          {Card()}
          {Card()}
          {Card()}
          {Card()}
          {Card()}
        </div>
     </div>
      <div className='app-tags'>
        <div className='media-scroller'>
          {Card()}
          {Card()}
          {Card()}
          {Card()}
        </div>
     </div>
      <div className='app-notes'>
        <div className='media-scroller'>
          {Card()}
          {Card()}
          {Card()}
        </div>
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
