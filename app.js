class App extends React.Component{
  state = {
    userChoice: null,
    compChoice: null,
    userScore: 0,
    compScore: 0,
    whoWon: ""
  }
  setChoice = (event) => {
    this.setState({
      userChoice: event.target.id,
      whoWon: ""
    });
    this.makeCompChoice();
  }
  makeCompChoice = () => {
    const compChoices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    this.setState({
      compChoice: compChoices[randomIndex]
    });
  }
  evalForWin = () => {
    if (this.state.userChoice === this.state.compChoice){
      this.setState({
        whoWon: "Tie!"
      })
    } else if (this.state.userChoice === 'rock' && this.state.compChoice === 'paper' 
              || this.state.userChoice === 'scissors' && this.state.compChoice === 'rock' 
              || this.state.userChoice === 'paper' && this.state.compChoice === 'scissors'){
      let newValue = this.state.compScore + 1;
      this.setState({
        whoWon: "Computer Wins!",
        compScore: newValue
      })
    } else if (this.state.userChoice === 'paper' && this.state.compChoice === 'rock' 
              || this.state.userChoice === 'scissors' && this.state.compChoice === 'paper' 
              || this.state.userChoice === 'rock' && this.state.compChoice === 'scissors'){
      let newValue = this.state.userScore + 1;
      this.setState({
        whoWon: "User Wins!",
        userScore: newValue
      });
  }
}
  clearDecks = () => {
    this.setState({
      compChoice: null,
      userChoice: null,
      userScore: 0,
      compScore: 0
    })
  }
  render = () => {
    return <div>
      <h1>RockPaperScissors</h1>
      <div className="userContainer">
        <button onClick={this.setChoice} id="rock">Rock</button>
        <button onClick={this.setChoice} id="paper">Paper</button>
        <button onClick={this.setChoice} id="scissors">Scissors</button>
        <button onClick={this.clearDecks}>Reset Game</button>
        <button onClick={this.evalForWin}>Score Round</button>
      </div>
      <div id="scoreContainer">
        <p>User Score: {this.state.userScore}</p>
        <p>Computer Score: {this.state.compScore}</p>
      </div>
      <div className="displayContainer">
        <div className="playerDisplay">
          {(this.state.userChoice === null) ? <p></p> : <p>User plays {this.state.userChoice}</p>}
          {(this.state.userChoice === null) ? <img></img> : <img src={'assets/' + this.state.userChoice + '.png'}/>}
        </div>
        <div className="playerDisplay">
          {(this.state.compChoice === null) ? <p></p> : <p>User plays {this.state.compChoice}</p>}
          {(this.state.compChoice === null) ? <img></img> : <img src={'assets/' + this.state.compChoice + '.png'}/>}
        </div>
      </div>
      <p>{this.state.whoWon}</p>
    </div>
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'));


/* 
//GRAVEYARD


class ComputerInput extends React.Component{
  render = () => {
    return <div class="inputContainer">
      <p>{this.state.compChoice}</p>
    </div>
  }
}

class UserInput extends React.Component{
  setChoice = (event) => {
    this.setState({
      userChoice: event.target.id
    });

  }
  render = () => {
    return <div class="inputContainer">
      <button onClick={this.setChoice} id="rock">Rock</button>
      <button onClick={this.setChoice} id="paper">Paper</button>
      <button onClick={this.setChoice} id="scissors">Scissors</button>
      <div>
        <p>{this.state.userChoice}</p>
      </div>
    </div>
  }
}

class Header extends React.Component{
  render = () => {
    return <h1>RockPaperScissors</h1>
  }
}

class App extends React.Component{
  state = {
    userChoice = null,
    computerChoice = null
  }
  render = () => {
    return <div id="containerDiv">
      <Header></Header>
      <UserInput ></UserInput>
      <ComputerInput></ComputerInput>
    </div>
  }
}

*/