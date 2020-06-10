import React from 'react'
import AchievementRateContainer from '../containers/AchievementRateContainer'
import RegularSavingsNotiContainer from '../containers/RegularSavingsNotiContainer'
import Header from '../components/common/Header'
//TOOD: *
const DashBoard = () => {
  return (
    <div>
      <Header/>
      <AchievementRateContainer/>
      <RegularSavingsNotiContainer/>
    </div>
  )
  /*
  <fullpage>
      <header/>
      <content>
          <subtitle/>
          (...)
          <AchievementRateContainer />
          <RegularSavingsNotiContainer />
          (...)
      </content>
  </fullpage>
  */
}

export default DashBoard
