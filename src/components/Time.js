import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import {Welcome, TimeStamp, Greeting} from './TimeStyles'

const Time = () => {
  let today = new Date()

  let greeting = () => {
    if (today.getHours() >= 5 && today.getHours() <11) {
      return 'Good Morning, Jose!'
    } else if (today.getHours() >= 11 && today.getHours() < 17) {
      return 'Good Afternoon, Jose!'
    } else if (today.getHours() >= 17 && today.getHours() < 24 ) {
      return 'Good Evening, Jose!'
    } else {
      return 'What are you doing up so late?!'
    }
  }
  return (
    <Welcome>
      <TimeStamp><Moment format='LT'></Moment></TimeStamp>
      <Greeting>{greeting()}</Greeting>
      </Welcome>
  )
}

export default Time