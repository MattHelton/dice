import React from 'react';


export default class Dice extends React.Component {

   roll () {
        return Math.floor((Math.random() * 6) + 1)
      }

    render() {
        return <button onClick={this.roll} value='Roll' />
    }
}