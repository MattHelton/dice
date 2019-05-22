import React, { Fragment } from 'react';
import Dice from './dice';
import RollButton from './rollButton';

export default class Threes extends React.Component {
    state = {
        rolledDice: [],
        chosenDice: []
    }
    roll = () => {
        return Math.floor((Math.random() * 6) + 1)
      }

      threesRoll = () => {
          let rolledDice = this.state.rolledDice
          for(let i = 0; i < 5; i++){
            rolledDice.push(this.roll())}
            this.setState({rolledDice: rolledDice})
      }

      chooseDice = () => {
          
      }
    render() {
        return (
            <Fragment>
                <RollButton onClick={this.threesRoll}/>
                <Dice rolledDice={this.state.rolledDice}/>
            </Fragment>
        )
    }
} 