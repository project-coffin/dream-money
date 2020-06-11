import React from 'react'
import { Route } from 'react-router-dom'
import ExpenditureStatistics from './dashboard/ExpenditureStatistics'
//TOOD: *
const DashBoard = ({ match }: any) => {
  console.log(match.params.category)
  return (
    <Route path="/expenditure" component={ExpenditureStatistics}/>
  )
}
export default DashBoard
