import React from 'react'
import { injectGlobal } from 'styled-components'
import { ClockDiv, DateDiv } from '../styles/Clock'

injectGlobal`
html,body {
  height: 100%
}
body {
  width: 100%;
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;
  font-family: 'Sukhumvit set', san-serif;
  background: linear-gradient(70deg, #4cb8c4, #3cd3ad, #1fa2ff, #12d8fa, #a6ffcb);
  background-size: 1000% 1000%;
  
  -webkit-animation: Background 19s ease infinite;
  -moz-animation: Background 19s ease infinite;
  animation: Background 19s ease infinite;
  
  @-webkit-keyframes Background {
      0%{background-position:72% 0%}
      50%{background-position:29% 100%}
      100%{background-position:72% 0%}
  }
  @-moz-keyframes Background {
      0%{background-position:72% 0%}
      50%{background-position:29% 100%}
      100%{background-position:72% 0%}
  }
  @keyframes Background { 
      0%{background-position:72% 0%}
      50%{background-position:29% 100%}
      100%{background-position:72% 0%}
  }
}
`

const Clock = props => {
  return (
    <div>
      <DateDiv>
        {props.date.day} {props.date.month} {props.date.year}
      </DateDiv>
      <ClockDiv>
        {props.date.hours}:{props.date.minutes}:{props.date.seconds}
      </ClockDiv>
    </div>
  )
}

export default Clock
