import logo from './tennis.jpg';
import './App.css';

function App() {
  return (
    <div>
      <h1>SPORTS</h1>
      <section class="tennis">
        <h2><u>Tennis</u></h2>
        <img src="tennis.jpg" />
        <p class="textTennis">Tennis is a racket sport that can be played by two people (singles) or four people (doubles).
          Players use rackets to hit a ball back and forth over a net. The goal is to hit the ball so that your opponent
          cannot return it.Tennis is a great way to get exercise and have fun at the same time. It's also a good way to
          learn about strategy and sportsmanship. </p>
      </section>
      <section class="b-ball">
        <h2><u>Basketball</u></h2>
        <img src="b-ball.jpg" />
        <p class="textB-Ball">
          Basketball is a team sport where two teams of five players each try to score points by shooting a ball through 
          a hoop. The team with the most points at the end of the game wins.Basketball is a great way to get exercise and 
          have fun with friends. It's also a good way to learn about teamwork and sportsmanship.
        </p>
      </section>
      <section class="hockey">
        <h2><u>Hockey</u></h2>
        <img src="hockey.jpg" />
        <p class="textHockey">
        Hockey is a fast-paced team sport played on ice.  Players wear skates and use sticks to hit a puck and try to 
        score goals.  It's a popular sport in many countries, especially in North America and Europe.     

        </p>
      </section>
    </div>
  );
}

export default App;
