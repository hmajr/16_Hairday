import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new"
import { schedulesDay } from "../schedule/load"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Current date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Load current date
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    // Get client name
    const name = clientName.value.trim()
    if (!name) {
      return alert("Informe o nome do client!")
    }

    const hourSelected = document.querySelector(".hour-selected")
    if (!hourSelected) {
      return alert("Selecione a hora.")
    }

    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = String(new Date().getTime())

    await scheduleNew({
      id,
      name,
      when
    })

    await schedulesDay()
    clientName.value = ""
  } catch (error) {
    alert("Nao foi possivel realizar o agendamento")
    
  }
}