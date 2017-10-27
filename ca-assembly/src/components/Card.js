import React, { Component } from 'react';
import './Cards.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: true
    }
    this._flipCard = this._flipCard.bind(this);
  }

_flipCard () {
  if (this.state.flipped) {
    this.setState ({
      flipped: false
    })
  }
  else {
    this.setState ({
      flipped: true
    })
  }
}

  render() {
    let display = this.state.flipped ? this.props.text : '';

    return (
      <div className="card" onClick={this._flipCard}>
        <p className="card-text">{display}</p>
        <p className="footer">Cards Against Assembly TM</p>
      </div>
      );
    }
  }


export default Card;
