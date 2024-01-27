import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { dataFetching } from './redux/action'
import './App.css'

function App() {

  const data = useSelector((store) => store.data)

  const dispatch = useDispatch()

  const getData = () => {
    dispatch(dataFetching());
  }

  return (
    <>
      <button style={{margin: "30px", border: "1px solid black"}} onClick={getData}>Get Data</button>

      {data.map((el, index) => {

        return (
          <div style={{borderBottom: "1px solid white", width:"80vw"}} key={index}>
            <h3>{el.name}</h3>
            <h5>{el.email}</h5>
          </div>
        )
      })}
    </>
  )
}

export default App