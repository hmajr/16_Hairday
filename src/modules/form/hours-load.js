import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")
const format = "H:mm"

/**
 * Load available hours to selection
 * @param { string } date ISO Date string
 * @param { [string]  } dailySchedules list of daily schedules hours
 */
export function hoursLoad({ date, dailySchedules }) {
  // Clean hours list
  hours.innerHTML = ""

  // Get unavailable hours list
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format(format) // pay attetion to hour string
  )
  const opening = openingHours.map((hour) => {
    // Get only full hour
    const [scheduleHour] = hour.split(":")

    // Verify hour is in past
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
    
    const available =  !unavailableHours.includes(hour)  && !isHourPast
    return {
      hour,
      available
    }
  })

  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if (hour === "9:00") {
      hourHeadedAdd("Manha")
    }else if (hour === "13:00") {
      hourHeadedAdd("Tarde")
    } else if (hour === "18:00"){
      hourHeadedAdd("Noite")
    }

    hours.append(li)
  })

  hoursClick()
}

/**
 * 
 * @param {string} title Add time period header
 */
function hourHeadedAdd(title){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title
  hours.append(header)
}