import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './components/Sidebar'
import { useSort } from './hooks/useSort'
import logo from './static/images/logo.png'
import { getNextPage, getTicketsAction } from './store/actions/getTickets'
import Segments from './UI/Segments'
import SortTab from './UI/SortTab'

const reducer = (state, action) => {
  switch(action.type) {
      case "ALL": {
          return {
              ...state,
              all: action.payload,
              one: false,
              direct: false,
              two: false,
              three: false
          }
      }
      case "DIRECT": {
          return {
              ...state,
              all: false,
              direct: action.payload,
              one: false,
              two: false,
              three: false
          }
      }
      case "ONE": {
          return {
              ...state,
              all: false,
              one:action.payload,
              direct: false,
          }
      }
      case "TWO": {
          return {
              ...state,
              all: false,
              two:action.payload,
              direct: false,
          }
      }
      case "THREE": {
          return {
              ...state,
              all: false,
              three:action.payload,
              direct: false,
          }
      }
      default:
          return state
  }
}


const inititalState = {
  all: true,
  one: false,
  direct: false,
  two: false,
  three: false
}


function App() {
  const [state, checkDispatch] = React.useReducer(reducer, inititalState)
  const {visibleTickets, isLoading} = useSelector(state => state.tickets)
  const dispatch = useDispatch()

  const sortedAndFiltered = useSort(visibleTickets, state)
  console.log(sortedAndFiltered);
  React.useEffect(() => {
    dispatch(getTicketsAction())
  }, [])
  
  

  return (
    <div>
      <div className = 'container d-flex flex-column align-center'>
          <img className = "mb-50" width = {100} src = {logo} alt = "logo"/>
          <div>
            <div className = "d-flex align-start">
              <Sidebar state = {state} dispatch = {checkDispatch}/>
              <div>
                <SortTab />
                {sortedAndFiltered.map(item => 
                <div className = "ticketItem">
                  <div className = "d-flex align-center justify-between mb-20"> 
                    <h5>{item.price} Р</h5>
                    <img src = {`https://pics.avs.io/99/36/${item.carrier}.png`} alt = "pic"/>
                  </div>
                  {item.segments.map((item, index) => <Segments key = {index} {...item}/>)}
                </div>)}
                <button className = "getNextPage" onClick = {() => dispatch(getNextPage())}>
                Next 5 tickets
              </button>
              </div>
            </div>
            
              
          </div>

      </div>
    </div>  
  )
}

export default App

