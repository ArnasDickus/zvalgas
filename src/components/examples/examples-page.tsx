import React from 'react'
import DoughnutChart from './components/charts/doughnut-chart'
import { Counter } from './components/counter/Counter'
import styled from 'styled-components';

const ExamplesPage = () => {
  return (
    <ContainerExamplesPage>
      <p>Examples Page</p>
      <Counter />
      <p>Doughnut</p>
      <div className="doughnut_wrapper">
        <DoughnutChart />
      </div>
    </ContainerExamplesPage>
  )
}

export default ExamplesPage

const ContainerExamplesPage = styled.div`
  .doughnut_wrapper {
    width: 306px;
  }
`;
