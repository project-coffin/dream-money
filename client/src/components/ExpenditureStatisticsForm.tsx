import React from 'react'
import { Line } from 'react-chartjs-2'

const state = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: '들어온 돈',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(54,162,236,1)',
      borderColor: 'rgba(54,162,236,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
    {
      label: '나간 돈',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(255,99,132,1)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 2,
      data: [5, 1, 100, 45, 61],
    },
  ],
}

const ExpenditureStatisticsForm = () => {
  return (
      <div>
        <Line
            data={state}
            options={{
              title:{
                  display: true,
                  text: '오늘 쓴 돈',
                  fontSize: 20,
              },
              legend:{
                  display: true,
                  position: 'right',
              }
            }}
        />
      </div>
  )
}

export default ExpenditureStatisticsForm
