const initialState = {
    tickets: [],
    error: null,
    visibleTickets: [],
    page: 2,
    isLoading: false,
    sortBy: 0
}

const handleSort = (index, tickets) => {
    if (!index) {
        return tickets.sort((a, b) => a.price - b.price)
    } else {
        return tickets.sort((a, b) => (a.segments.reduce((sum, el) => sum + el.duration, 0)) - (b.segments.reduce((sum, el) => sum + el.duration, 0)))
    }
}










export const getTicketsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_TICKETS": {
            
            return {
                ...state,
                isLoading: true
            }
        }
        case "GET_TICKETS_SUCCESS": {
            const currentTickets = [...action.payload].slice(0, 5)
            const sortedTickets = handleSort(state.sortBy, currentTickets)
            return {
                ...state,
                tickets: [...action.payload],
                visibleTickets: [...sortedTickets],
                isLoading: false,
            }
        }
        case "GET_NEXT_PAGE": {
            const currentTickets = [...state.tickets].slice(0, state.page * 5)
            const sortedTickets = handleSort(state.sortBy, currentTickets)
            return {
                ...state,
                page: state.page + 1,
                visibleTickets: [...sortedTickets],
            }
        }
        case "SORT_TICKETS": {
            const sortedTickets = handleSort(action.payload, state.visibleTickets)
            return {
                ...state,
                sortBy: action.payload,
                visibleTickets: sortedTickets
            }
        }
        default: 
            return state
        
    }
}