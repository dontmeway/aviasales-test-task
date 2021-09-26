import axios from "axios"

export const sortByAction = (value) => ({
    type: "SORT_TICKETS",
    payload: value
})


export const getTicketsAction = () => async(dispatch) => {
        dispatch({
            type: "GET_TICKETS"
        })
        const { data } = await axios.get("https://front-test.beta.aviasales.ru/search");
        fetchTickets(data.searchId, dispatch)
} 


export const getNextPage = () => ({
    type: "GET_NEXT_PAGE"
})

const fetchTickets = async(id, dispatch) => {
    try {
        const { data } = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
        if (!data.stop) fetchTickets(id, dispatch)
        else {
            dispatch({
                type: "GET_TICKETS_SUCCESS",
                payload: data.tickets
            })
        }
    } catch(err) {
        fetchTickets(id, dispatch)
    }
}