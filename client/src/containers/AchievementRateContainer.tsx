import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AchievementRateForm from '../components/AchievementRateForm/AchievementRateForm'
import { createPurpose } from '../features/purpose'

//TODO: convert "features" to (useState | Redux | GraphQL)
//TODO:

const AchievementRateContainer = () => {
  const purposeStateList = useSelector(({ purpose: { list } }: any) => list)
  const dispatch = useDispatch()

  const TESTMONEY = 40_000_000

  const rateFormula = (idx: number): number => {
    return (TESTMONEY / purposeStateList[idx].purpose) * 100
  }

  return (
    <>
      <AchievementRateForm rate={rateFormula(0)}/>
    </>
  )
}
export default AchievementRateContainer
