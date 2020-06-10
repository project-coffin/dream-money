import React, { useState, useMemo } from 'react'
import AchievementRateForm from '../components/AchievementRateForm/AchievementRateForm'

//TODO: convert "features" to (useState | Redux | GraphQL)
//TODO:
const AchievementRateContainer = () => {
  /* TESTCASE */
  //TODO: 데이터 넘어오는 양식 정해지면 수정할 것.
  // 데이터: 고정지출, 변동지출, 월 수익, 현재자산, 목표기간, 목표금액
  type feature1Type = {
    name: string
    money: number
    purpose: number
  }
  type feature2Type = {
    deposit: number
    withdraw: number
  }
  const [feature1, setFeature1] = useState({
    name: 'GANGSTER',
    money: 33_333_333,
    purpose: 100_000_000,
  })
  const [feature2, setFeature2] = useState({
    deposit: 3_000_000,
    withdraw: 2_000_000,
  })
  const temporaryFormula1 = (feature2: feature2Type): number => {
    return feature2.deposit - feature2.withdraw
  }
  const temporaryFormula2 = (feature1: feature1Type): number =>{
    return Math.round((feature1.money / feature1.purpose) * 100)
  }
  // TODO: difference 삭제
  const [difference, achievementRate] = useMemo(() => [temporaryFormula1(feature2), temporaryFormula2(feature1)], [
    feature1,
    feature2,
  ])

  return(
    <>
      <button onClick={()=>{setFeature1({...feature1, money: feature1.money + 1_000_000})} } > 가진돈+ </button>
      <button onClick={()=>{setFeature1({...feature1, money: feature1.money - 1_000_000})} } > 가진돈- </button>
      <button onClick={()=>{setFeature2({...feature2, withdraw: feature2.withdraw + 1_000_000})} } > 지출+ </button>
      <AchievementRateForm rate={achievementRate}/>
    </>
  )
}
export default AchievementRateContainer
