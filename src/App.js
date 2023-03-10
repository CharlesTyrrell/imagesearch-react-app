import './App.css';
import location1 from "./res/location-test/location-AF.png"
import location2 from "./res/location-test/location-AU.png"
import location3 from "./res/location-test/location-EA.png"
import location4 from "./res/location-test/location-NA.png"
import location5 from "./res/location-test/location-SA.png"


import example1 from "./res/example-images/best-travel-photos-from-around-the-world-main-image-op.jpg"
import example2 from "./res/example-images/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg"
import example3 from "./res/example-images/travel-the-world-bm-1625733321-390X219.jpg"

var locations = [location1,location2,location3,location4,location5]
var exampleImage = [example1,example2,example3]
function App()
{

  return(
    <div className='app'>
      <div className='app-images'>
        <div className='media-scroller'>
          {makeCards(exampleImage)}
        </div>
     </div>
      <div className='app-locations'>
        <div className='media-scroller'>
        {makeCards(locations)}
        </div>
     </div>
      <div className='app-tags'>
        <div className='media-scroller'>
          {makeTags(["Bodega", "cafe", "resteraunt", "lush", "green"])}
        </div>
     </div>
      <div className='app-notes'>
        <div className='media-scroller'>
          {makeNotes(["USE SHIFT SCROLL TO MOVE HORIZONTALLY. Will use mouse in the future"])}
        </div>
     </div>
    </div>
  )
}

function Card(imagePath){
  return (
    <div className="card">
      <img src= {imagePath} className="card" alt="default picture"/> 
    </div>
  ) 
}
function Tag(text){
  return (
    <div className="card">
        {text}
    </div>
  ) 
}



function makeCards(imagespaths){ 
  var cards = []
  for (var image of imagespaths) {
    cards.push(Card(image))
  }

  return cards
}
function makeTags(tagStrings){ 
  var tags = []
  for (var text of tagStrings) {
    tags.push(Tag(text))
  }
  return tags
}
function makeNotes(noteStrings){ 
  var notes = []
  for (var text of noteStrings) {
    notes.push(Tag(text))
  }
  return notes
}
export default App;
