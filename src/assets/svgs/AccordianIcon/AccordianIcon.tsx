import * as React from 'react';

interface AccordianProps {
  color?: string
}

function AccordianIcon({color = '#ccc'} : AccordianProps) {
  return (
    <svg
      fill={color}
      height='10px'
      width='10px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 386.257 386.257'
    >
      <polygon points='0,96.879 193.129,289.379 386.257,96.879 ' />
    </svg>
  );
}

export default AccordianIcon;
