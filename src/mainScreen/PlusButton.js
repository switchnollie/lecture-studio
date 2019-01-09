import React from "react";

export default props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="84"
    height="84"
    viewBox="0 0 84 84"
    className="plusBtn">
    <defs>
      <radialGradient
        id="radial-gradient"
        cx="0.5"
        cy="0.5"
        r="0.5"
        gradientTransform="matrix(1 0 0 .982 0 .009)">
        <stop offset="0" stopColor="#75c7f6" />
        <stop offset="0.569" stopColor="#75c7f6" />
        <stop offset="1" stopColor="#5eb6e9" />
      </radialGradient>
      <filter
        id="Ellipse_1"
        x="0"
        y="0"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse">
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Gruppe_37" data-name="Gruppe 37" transform="translate(-815 -980)">
      <g className="cls-3" transform="translate(815 980)">
        <circle
          id="Ellipse_1-2"
          data-name="Ellipse 1"
          className="cls-1"
          cx="33"
          cy="33"
          r="33"
          transform="translate(7 7)"
        />
      </g>
      <line
        id="Linie_4"
        data-name="Linie 4"
        className="cls-2"
        y1="17.065"
        transform="translate(855.5 1011.468)"
      />
      <line
        id="Linie_5"
        data-name="Linie 5"
        className="cls-2"
        y1="17.065"
        transform="rotate(90 -77.984 942.017)"
      />
    </g>
  </svg>
);
