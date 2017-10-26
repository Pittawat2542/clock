import React from 'react'
import { CountdownDiv } from '../styles/Countdown'

const Countdown = props => {
  return (
    <CountdownDiv>
      {props.date.days} Days {props.date.hours} Hours {props.date.minutes}{' '}
      Minutes {props.date.seconds} Seconds to #136Farewell
    </CountdownDiv>
  )
}

export default Countdown
