import React from 'react'
import {useDispatch} from 'react-redux'


import {sortByAction} from '../store/actions/getTickets'


const sortItems = ["САМЫЙ ДЕШЕВЫЙ", "САМЫЙ БЫСТРЫЙ"]

function SortTab() {
    const [sortBy, setSortBy] = React.useState(0)
    const dispatch = useDispatch()
    const handleSortBy = (index) => {
        setSortBy(index);
        dispatch(sortByAction(index))
    }

    return (
        <div className = "sortTab d-flex mb-20">
            {sortItems.map((item, index) => 
            <div
                className = {`sortItem ${index === sortBy ? "activeSortItem" : ""}`}
                onClick = {() => handleSortBy(index)} 
                key = {index}>
                {item}
            </div>)}
        </div>
    )
}

export default SortTab
