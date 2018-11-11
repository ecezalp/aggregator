import * as React from 'react';

const defaultButtonStyle = {
  cursor: 'pointer',
  border: '1px solid green',
  borderRadius: '5px / 10px',
  width: '100px',
  textAlign: 'center',
};

const Button = ({onClick, children}) => {
  return <div
    className="button"
    onClick={onClick}
    style={defaultButtonStyle}
  >
    {children}
  </div>
};

export default Button;