import React from 'react'

function SidebarItem({id, value, handleCheck, checked}) {
    return (
        <div className = "sidebar_item">
          <input checked = {checked} onChange = {(e) => handleCheck(e.target.checked, id)} type = "checkbox" id = {id}/>
          <label htmlFor = {id}>{value}</label>
        </div>
    )
}

export default SidebarItem
