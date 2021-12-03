/* eslint-disable @next/next/no-img-element */
import { gql, useQuery } from '@apollo/client'
import { IAnimals } from '@components/kayak';

import React from 'react'
import { Animal } from 'src/graphql/types';
import styled from 'styled-components';


const AnimalsListGraphql = () => {
  const { data, loading, error} = useQuery(gql`
    {
    animals {
        edges {
            node {
              name
              imageUrl
              id
            }
        }
     
    }
    }
    `)
  console.log('data', data?.animals?.edges);

  if(loading) {
    return <h2>Loading...</h2>
  }

  if(error) {
    return <h2>Something went wrong...</h2>
  }
  return (
    <ContainerAnimalsListGraphql>
      {
        data?.animals?.edges?.map((val: { node: Animal }) => {
          return (
            <div key={val?.node?.id}>
              <p>{val?.node?.name}</p>
              {/* // eslint-disable-next-line @next/next/no-img-element */}
              <img className="img" src={val?.node?.imageUrl || ''} alt="image"/>
            </div>
          )
        })}
    </ContainerAnimalsListGraphql>
  )
}

export default AnimalsListGraphql

const ContainerAnimalsListGraphql = styled.div`
  .img {
    width: 200px;
  }
`;