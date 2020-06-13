import React from 'react'
import { Pie } from 'react-chartjs-2'

const ExpenditureAnalyticsForm = () => {
  const data = {
    labels: ['치킨', '교통비', '가락시장'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  return (
    <div style={{height: '500px', width: '500px', position: 'relative'}}>
      <Pie
        data={data}
        height={150}
        width={200}
        options={{
          title: {
            display: true,
            text: '오늘 지출 목록',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'left',
          },
        }
      } />
    </div>
  )
}

export default ExpenditureAnalyticsForm