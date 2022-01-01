import { dougnutChartColors } from '@styles/colors';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart} from 'chart.js';


const DoughnutChart = () => {
  Chart.register(ChartDataLabels);
  const data = {
    labels: ['red', 'blue', 'yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [37, 25, 37],
        backgroundColor: Object.values(dougnutChartColors),
        borderColor:  Object.values(dougnutChartColors),
        borderWidth: 2,
        hoverBorderColor: '#46EEC6'
      },
    ],
  };
    // console.log('ChartProps', ChartProps);
    //  https://github.com/reactchartjs/react-chartjs-2/issues/86
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right' as any,
        align: 'start' as any,
        onClick: () => {
          console.log('I clicked on legend')
        },
       
        labels: {
          boxWidth: 16,
          boxHeight: 16,
          padding: 10,
          pointStyle: 'rectRounded',
          usePointStyle: true
        },
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          return `${value}%`;
        },
        color: '#fff',
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#FFFFFF',
        titleColor: '#000',
        bodyColor: '#000',
        caretSize: 0,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context?.label} ${context?.formattedValue}%` as any
          }
        }

      }
    }
  }

  return (
    <div>
      <Doughnut data={data} options={options}  />
    </div>
  )
}

export default DoughnutChart
