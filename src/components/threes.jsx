import React, { Component, Fragment } from 'react';
import Dice from './dice';

export default class Threes extends React.Component {
    state = {
        diceValue: null
    }
    roll = () => {
        let dice = Math.floor((Math.random() * 6) + 1)
        this.setState({diceValue: dice })
      }
    render() {
        return (
            <Fragment>
                <button onClick={this.roll} value='Roll'>Roll</button>
                <Dice diceValue={this.state.diceValue}/>
            </Fragment>
        )
    }

} 