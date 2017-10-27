import React, { Component } from 'react';
import './CardList.css';
import Card from './Card';
import { database, firebaseListToArray } from '../utils/firebase.js';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    database.ref('/cards/')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        this.setState({
          cards:  results
        });
      });
    }

  render() {
    let cardsArr = this.state.cards.map(el =>(<Card text={el.phrase} key={el.id}/>));
    return (
      <div className="card-list">
        {cardsArr.reverse()}
      </div>
    );
  }
}

export default CardList;
