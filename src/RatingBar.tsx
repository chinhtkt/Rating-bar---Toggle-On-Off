import React, { ReactElement, useState } from 'react';
import './Hover.css'

interface Props {
  value: number;
  inactiveColor: string;
  activeColor: string;
  size: number;
  onChange: any;
}


export default function RatingBar(props: Props): ReactElement {


  const {
    value,
    inactiveColor = '#ddd',
    activeColor = '#f00',
    size = 100,
    onChange,
  } = props;

  const rating = ['🟊','🟊','🟊','🟊','🟊','🟊','🟊','🟊','🟊','🟊'];

  const handleChange = (value: number) => {
    onChange(value + 1);
  };
  return (
    <div>
      {rating.map((r, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className= {'star'}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            onClick={() => handleChange(index)}
          >
            {r}
          </span>
        );
      })}
      {value}
    </div>
  );
}


