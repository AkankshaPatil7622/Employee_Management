import React from 'react'
import Cards from '../components/Cards'

function Dashboard() {
  return (
    <>
    <h1>Welcome Akanksha</h1>
    <Cards cardName={"Total employees"}/>
    <Cards cardName={"Departments"}/>
    <Cards cardName={"Active Employee"}/>
    <Cards cardName={"New joiners"}/>
    </>
  )
}

export default Dashboard