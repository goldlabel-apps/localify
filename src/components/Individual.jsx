import React from 'react'
import { useSelector } from 'react-redux'
import { initIndividual } from '../redux/individual/actions'

export default function Individual() {
  
  const individualSlice = useSelector( state => state.individual ) 
  React.useEffect(() => {
    const {
      initted,
      initting,
    } = individualSlice
    if (!initted && !initting) initIndividual()
  }, [ individualSlice ]) 
  const {
    id,
    individual,
  } = individualSlice
  if ( !id || !individual ) return null

  return null
}