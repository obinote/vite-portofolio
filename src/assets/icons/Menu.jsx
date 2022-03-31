import * as React from 'react';
import PropTypes from 'prop-types';

function Menu({ width, height, stroke, strokeWidth, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      stroke={stroke}
      strokeWidth={strokeWidth}
      width={width}
      height={height}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

Menu.prototypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string
};

Menu.defaultProps = {
  height: 16,
  width: 16,
  strokeWidth: 2,
  stroke: 'currentColor',
  fill: 'none'
};

export default Menu;
