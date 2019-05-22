import React, { Fragment} from 'react';
import './dice.css'
const Dice = (props) => {

  let rolled = props.rolledDice.map((die) => {
    return <h2 key={die.id}>{die}</h2>
  })
  return (  
          <Fragment>
            {rolled}
          </Fragment>
          );
}
 
export default Dice;