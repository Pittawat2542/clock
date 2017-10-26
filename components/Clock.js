import React from 'react'
import { ClockDiv, DateDiv } from '../styles/Clock'

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
