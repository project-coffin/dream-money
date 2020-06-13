import React from 'react'
import { Route } from 'react-router-dom'
import AchievementRate from './dashboard/AchievementRate'
import ExpenditureStatistics from './dashboard/ExpenditureStatistics'
import ExpenditureAnalytics from './dashboard/ExpenditureAnalytics'
//TOOD: *
const DashBoard = ({ match }: any) => {
  return (
    <>
      <Route path="/achievement" component={AchievementRate}/>
      <Route path="/statistics" component={ExpenditureStatistics}/>
      <Route path="/analytics" component={ExpenditureAnalytics}/>
    </>
  )
}
export default DashBoard
