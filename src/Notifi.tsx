import React from 'react';
import './Notifi.scss';

interface Props {
  id: string;
  name: string;
  content: string;
  checked: boolean;
  onChange: any
}

export const Notifi = ({ name, content, checked, onChange, id }: Props) => {
  return (
    <div>
      <h3>{name}</h3> &ensp; &ensp; &ensp; &ensp; &ensp;
      <br/><span>{content}</span> &ensp; &ensp;
      <div className='toggle-switch'>
        <input
          type='checkbox'
          name={name}
          className='toggle-switch-checkbox'
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label className='toggle-switch-label' htmlFor={id}>
          <span className='toggle-switch-inner'></span>
          <span className='toggle-switch-switch'></span>
        </label>
      </div>
    </div>
  );
};
