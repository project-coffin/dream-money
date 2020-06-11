import React from 'react'
import RegularSavingsNotiForm from '../components/RegularSavingsNotiForm'

//TODO: convert "features" to (useState | Redux | GraphQL)
//TODO:

const RegularSavingsNotiContainer = () => {
  /* TESTCASE */
  //TODO: 데이터 넘어오는 양식 정해지면 수정할 것.
  // 데이터: 고정지출, 변동지출, 월 수익, 현재자산, 목표기간, 목표금액

  return <RegularSavingsNotiForm purpose={1000} remain={100} savingsPerDay={100} />
}

export default RegularSavingsNotiContainer
