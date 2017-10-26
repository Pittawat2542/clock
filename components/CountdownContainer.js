import React from 'react'
import Countdown from '../components/Countdown'

class CountdownContainer extends React.Component {
  setCountdown () {
    let currentDate = new Date().getTime()
    let farewellDate = new Date('2018-02-16').getTime()

    let timeLeft = farewellDate - currentDate

    const DAY = 1000 * 60 * 60 * 24
    const HOUR = 1000 * 60 * 60
    const MINUTE = 1000 * 60
    const SECOND = 1000

    let days = Math.floor(timeLeft / DAY)
    let hours = Math.floor((timeLeft % DAY) / HOUR)
    let minutes = Math.floor((timeLeft % HOUR) / MINUTE)
    let seconds = Math.floor((timeLeft % MINUTE) / SECOND)

    if (hours.length == 1) {
      hours = '0' + hours
    }

    if (minutes.length == 1) {
      minutes = '0' + minutes
    }

    if (seconds.length == 1) {
      seconds = '0' + seconds
    }

    this.setState({
      date: {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    })
  }

  componentWillMount () {
    this.setCountdown()
  }

  componentDidMount () {
    window.setInterval(
      function () {
        this.setCountdown()
      }.bind(this),
      1000
    )
  }

  render () {
    return <Countdown date={this.state.date} />
  }
}

export default CountdownContainer
