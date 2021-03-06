import React from 'react';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(el => (
      <BuildControl
        key={el.label}
        label={el.label}
        added={() => props.addIngredient(el.type)}
        removed={() => props.removeIngredient(el.type)}
        disabled={props.disabled[el.type]}
      />
    ))}
    <button onClick={props.order} disabled={!props.purchasable} className={classes.OrderButton}>{props.isAuth ? "ORDER NOW": "SIGN UP TO ORDER"}
      
    </button>
  </div>
);

export default BuildControls;
