import React from 'react'

function Segments({origin, destination, duration, date}) {

    function getHoursAndMinutes(duration) {
        let [hours, minutes] = (duration / 60).toString().split('.')
        minutes = Math.round(`0.${duration}` * 60)
        minutes = minutes < 10 ? `0${minutes}` : minutes
        return {hours, minutes: !isNaN(minutes) ? minutes : '00'}
    } 

    const handleGetTime = (date) => {
        const [hours, minutes] = (date.split('T')[1]).split(':').filter((item, index) => index <= 1 ? item : null)
        return {hours, minutes}
    }

    const handleGetFinishTime = (time, duration) => {
        const finish = time.hours * 60 + +time.minutes + +duration
        console.log(finish);
        return getHoursAndMinutes(finish)
    }
    console.log(date);
    return (
        <div>
            <div className = "d-flex justify-between mb-10">
                <div className = "d-flex flex-column align-center">
                    <p>{origin}-{destination}</p>
                    <b>{handleGetTime(date).hours}:{handleGetTime(date).minutes}-{handleGetFinishTime(handleGetTime(date), duration).hours}:{handleGetFinishTime(handleGetTime(date), duration).minutes}</b>
                </div>
                <div className = "d-flex flex-column align-center">
                    <p>В ПУТИ</p>
                    <b>{getHoursAndMinutes(duration).hours}ч {getHoursAndMinutes(duration).minutes}м</b>
                </div>
                <div className = "d-flex flex-column align-center">
                    <p>2 ПЕРЕСАДКИ</p>
                    <b>HKG, JNB</b>
                </div> 
            </div>
        </div>
    )
}

export default Segments
