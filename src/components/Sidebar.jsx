import React, { useReducer } from 'react'
import SidebarItem from '../UI/SidebarItem'

const sideBarProps = [
    {
        id: "all",
        value: "Все"
    },
    {
        id: "direct",
        value: "Без пересадок"
    },
    {
        id: "one",
        value: "1 пересадка"
    },
    {
        id: "two",
        value: "2 пересадки"
    },
    {
        id: "three",
        value: "3 пересадки"
    },
]





function Sidebar({state, dispatch}) {




    const handleCheck = (value, item) => {
        dispatch({
            type: item.toUpperCase(),
            payload: value
        })
    }

    return (
        <div className = "sidebar">
          <h4 className = "mb-20">
            Количество пересадок
          </h4>
          {sideBarProps.map((item, index) => <SidebarItem checked = {state[item.id]} handleCheck = {handleCheck} key = {index} {...item}/>)}
        </div>
    )
}

export default Sidebar
