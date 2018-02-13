import React from 'react';

export default Input = ({ className, name, type, onChange, value }) => {
  return (
    <input
      className={className}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  )
}