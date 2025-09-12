import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodEvening = document.getElementById("period-evening")

/**
 * Show daily schedule agenda 
 * @param { [{ id, name, when}] } dailySchedules Array of schedule objects
 */
export function scheduleShow( dailySchedules) {
  try {
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodEvening.innerHTML = ""

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Add id appointment
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Create icon cancel
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancel")

      // Add tim, name icon in item
      item.append(time, name, cancelIcon)

      // Get hour
      const hour = dayjs(schedule.when).hour()

      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodEvening.appendChild(item)
      }

    });
  } catch (error) {
    console.log(error)
    alert("Nao foi possivel mostar os agendamentos")
  }
}