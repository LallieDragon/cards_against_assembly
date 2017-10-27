import React, { Component } from 'react';
import { database } from '../utils/firebase.js';
import Card from './Card';
import './AddNewCard.css';

class AddNewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: '',
      card: <Card />
    }

    this._updateText = this._updateText.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _updateText(e){
    this.setState({
      phrase: e.target.value,
      card: <Card text={e.target.value} />
    })
  }

  _handleSubmit(e){
    e.preventDefault();
    database.ref('/cards')
    .push({
      phrase: this.state.phrase
    })
    .then(()=>{
      console.log(`Successfully saved ${this.state.phrase} to db`);
      this.setState({
        phrase: ''
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input value={this.state.phrase} onChange={this._updateText} type='text' placeholder='What is your question...?' />
          <button>Save</button>
          {this.state.card}
        </form>
      </div>
    );
  }
}

export default AddNewCard;
