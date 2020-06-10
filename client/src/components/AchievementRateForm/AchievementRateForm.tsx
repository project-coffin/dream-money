import React from 'react'
// TODO: styledComponents나 material-ui같은 모듈 사용하나?
//import './AchievementRateFormTest.css';
import './AchievementRateFormTest2.css'
// import { makeStyles } from '@material-ui/core';

type props = {
  rate: number
}

// TODO: 필요에 따라 props 추가해서 받을 것.
const AchievementRateForm = ({ rate }: props) => {
  return (
    <div className="circle">
      <span className="text">
        ₩ x,xxx to ₩ x,xxx.. OR  {rate}%
      </span>
      <div className="fill" style={{ height: `${rate}%`}}></div>
    </div>
  )
}
export default AchievementRateForm
