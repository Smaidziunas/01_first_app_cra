import './App.css';
// #1 budas itraukti paveiksleli
import house5 from './house5.jpg';


// react components
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

function TeamGrid() {
  return (
    <div className='grid1'>
    {teamItem1}
    {teamItem2}
    {teamItem1}
    {teamItem2}
  </div>
  )
}

function Form() {
  return (
  <div className="form">
  <h3 className="form__title">Contact</h3>
  <p className="form_description">Lets get in touch and talk about your next project.</p>
  <form>
    <input type="text" placeholder='Name' />
    <input type="email" placeholder='Email' />
    <input type="text" placeholder='Subject' />
    <input type="text" placeholder='Comment' />
  </form>
  <button className='form__btn' type='submit'>SEND MESSAGE</button>
  </div>
)
}
// =================


// react const functions ===========
const teamItem1 = (

    <div className='teamItem'>
      <img src='/img/team2.jpg' alt='team member' />
      <h3 className='team__title'>John Doe</h3>
      <p className='team__ocupation'>CEO & Founder</p>
      <p className='team_desc'>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
        elementum.
      </p>
      <button>Contact</button>
    </div>
  );

const teamItem2 = (

    <div className='teamItem'>
      <img src='/img/team1.jpg' alt='team member' />
      <h3 className='team__title'>Jane Doe</h3>
      <p className='team__ocupation'>Architect</p>
      <p className='team_desc'>
        Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque
        elementum.
      </p>
      <button>Contact</button>
    </div>
  );

const card1 = (
  <div className='card'>
    <h4 className='card__title'>house 5</h4>
    <img className='card__img' src={house5} alt='namas penktas' />
  </div>
);

const card2 = (
  <div className='card'>
    <h4 className='card__title'>house 2</h4>
    <img className='card__img' src='/img/house2.jpg' alt='namas antras' />
  </div>
);




function App() {
  const name = 'James';

  return (
    <div className='App'>
      <h1 className='mainTitle'>
        Hello111 {name} !!! {150 * 45}
      </h1>
      {/* {houseGrid} */}
      <HouseGrid />
      {/* {TeamGrid} */}
      <TeamGrid />

      <hr />
      {/* contact form */}
      <Form />

    </div>
  );
}

export default App;
