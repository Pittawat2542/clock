import React from "react";
import { injectGlobal } from "styled-components";
import { ClockDiv, InnerClockDiv } from "../styles/ClockDiv";

injectGlobal`
html,body {
  height: 100%
}
body {
  width: 100%;
  margin: 0;
  text-align: center;
  font-size:8em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #f0f0f0;
  font-family: 'Sukhumvit set', san-serif;
}
`;

const Clock = props => {
  return (
    <div>
      <ClockDiv>
        {props.date.day} {props.date.month} {props.date.year}
      </ClockDiv>
      <ClockDiv>
        {props.date.hours}:{props.date.minutes}:{props.date.seconds}
      </ClockDiv>
    </div>
  );
};

export default Clock;
