import './App.css';
// #1 budas itraukti paveiksleli
import house5 from './house5.jpg';

const card1 = (
  <div className='card'>
    <h4 className='card__title'>house 5</h4>
    <img className='card__img' src={house5} alt='namas penktas' />
  </div>
);
const card2 = (
  <div className='card'>
    <h4 className='card__title'>house 2</h4>
    <img className='card__img' src='./house2.jpg' alt='namas antras' />
  </div>
);



// react componentas
function HouseGrid() {
  return (
    <div className='grid1'>
      {card1}
      {card2}
      {card1}
      {card2}
      {card1}
      {card2}
    </div>
  );
}


// react TeamItem1 component

function TeamItem1 () {
 return (
    <div className='teamItem'>
        <img src='./team2.jpg' alt='team member' />
        <h3 className='team__title'>John Doe</h3>
        <p className='team__ocupation'>CEO & Founder</p>
        <p className='team_desc'>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
          elementum.
        </p>
        <button>Contact</button>
  </div>
   
  )
}

function App() {
  const name = 'James';

  return (
    <div className='App'>
      <h1 className='mainTitle'>
        Hello111 {name} !!! {150 * 45}
      </h1>
      {/* {houseGrid} */}
      <HouseGrid />

      <TeamItem1 />
      {/* <TeamItem2 /> */}
      {/* <TeamItem3 /> */}
      {/* <TeamItem4 /> */}
      

      <hr />
      <h2>House 2</h2>
      <img src='/img/house2.jpg' alt='second house' />
    </div>
  );
}

export default App;