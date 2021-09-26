import { useMemo } from "react"

export const useSort = (array, state) => {
    const sortedArray = useMemo(() => {
        if (state.all) {
            return array
        } else if (state.one) {
            return array.filter(item => item.segments.reduce((len, elem) => len + elem.stops.length, 0) <= 1)
        } else if (state.two) {
            return array.filter(item => item.segments.reduce((len, elem) => len + elem.stops.length, 0) <= 2)
        } else if (state.three) {
            return array.filter(item => item.segments.reduce((len, elem) => len + elem.stops.length, 0) <= 3)
        } else {
            return array.filter(item => item.segments.reduce((len, elem) => len + elem.stops.length, 0) === 0)
        }
    }, [array, state])
    return sortedArray
}