import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import ImageCard from './components/ImageCard'
import Jumbotron from './components/Jumbotron'
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    message: "Click a card to Begin!",
    score: 0,
    topScore: 0
  };

  ifClicked  = (id, clicked) => {
    const displayOrder = this.state.cards


    if (clicked) {
      displayOrder.forEach((card, index) => {
        displayOrder[index].clicked = false;
      });
      return this.setState({
        card: displayOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Incorrectly",
        score: 0
      })
    } else {
      displayOrder.forEach((card, index) => {
        if (id === card.id) {
          displayOrder[index].clicked = true;
        }
      });

      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return this.setState({
        card: displayOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Correctly!",
        score: newScore,
        topScore: newTopScore,
      })
    }

  }




  render() {
    return (
      <div className="App">
          <NavigationBar 
          message={this.state.message} 
          score={this.state.score} 
          topScore={this.state.topScore}
          />
          <Jumbotron />
          {this.state.cards.slice(0,12).map(card => (
            <ImageCard
            id={card.id}
            key={card.id}
            clicked={card.clicked}
            image={card.image}
            ifClicked={this.ifClicked}
             />
          ))}
      </div>
    );
  }
}

export default App;
