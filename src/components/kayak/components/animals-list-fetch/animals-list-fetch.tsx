import { IAnimals } from '@components/kayak';
import React, { useEffect, useState } from 'react'



const AnimalsListFetch = () => {
  const [animals, setAnimals] = useState<IAnimals[]>([]);

  useEffect(() => {
    fetch('https://petbook-back-dev.herokuapp.com/graphql', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ animals { edges { node { id name }}}}"})
    }).then(res => res.json()).then(res => setAnimals(res?.data?.animals?.edges))

  }, [])

  console.log('animals', animals);
  return (
    <div>
      {
        animals?.map(val => {
          return (
            <p key={val?.node?.id}>{val?.node?.name}</p>
          )
        })}
    </div>
  )
}

export default AnimalsListFetch
