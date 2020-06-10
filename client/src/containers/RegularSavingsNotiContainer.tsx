import React, { useState } from 'react';
import RegularSavingsNotiForm from '../components/RegularSavingsNotiForm';

//TODO: convert "features" to (useState | Redux | GraphQL)
//TODO:

const RegularSavingsNotiContainer = () => {
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

  return <RegularSavingsNotiForm purpose={1000} remain={100} savingsPerDay={100} />
}

export default RegularSavingsNotiContainer
