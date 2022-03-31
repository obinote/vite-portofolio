import * as React from 'react';
import PropTypes from 'prop-types';

function Envelope({ width, height, stroke, strokeWidth, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      stroke={stroke}>
      <path
        d="M2 5.37388C2 5.14164 2.12087 4.92614 2.31903 4.80503L8 1.33333L13.6809 4.80503C13.8791 4.92614 14 5.14164 14 5.37388V12C14 12.3682 13.7015 12.6667 13.3333 12.6667H2.66667C2.29848 12.6667 2 12.3682 2 12V5.37388Z"
        stroke="black"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2 5.66666L8 9.33332L14 5.66666"
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

Envelope.prototypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.string,
  fill: PropTypes.string
};

Envelope.defaultProps = {
  height: 16,
  width: 16,
  strokeWidth: 2,
  stroke: 'currentColor',
  fill: 'none'
};

export default Envelope;
