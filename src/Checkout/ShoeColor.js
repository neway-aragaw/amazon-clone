import React from 'react';

function ChooseShoeColor(props) {
  const { shoeColors, onColorSelected } = props;

  return (
    <div>
      <h3>Please choose a shoe color:</h3>
      <ul>
        {shoeColors.map(color => (
          <li key={color} onClick={() => onColorSelected(color)}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseShoeColor;