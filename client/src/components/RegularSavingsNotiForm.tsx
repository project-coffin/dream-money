import React from 'react'

type props = {
  purpose: number
  remain: number
  savingsPerDay: number
}

const RegularSavingsNotiForm = ({ purpose, remain, savingsPerDay }: props) => {
  return (
    <div>
      <h3>
        <span>{purpose}</span>원 모으기
      </h3>
      <div>
        남은 금액 <span>{remain}</span> 원
      </div>
      <div>
	      <span>하루에 저축해야 하는 금액</span>
	        <span>{savingsPerDay}</span>원
      </div>
    </div>
  )
}

export default RegularSavingsNotiForm
