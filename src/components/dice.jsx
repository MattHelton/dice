import React, { Fragment} from 'react';

const Dice = (props) => {
  return (  
          <Fragment>
            <h2>{props.diceValue}</h2>
          </Fragment>
          );
}
 
export default Dice;