import dayjs from "dayjs";
import { apiConfig } from "./api-config";

/**
 * Get schedules from a specific date
 * @param {Date} date UTC Date string 
 * @returns {[string]} Array of schedules hours
 */
export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )

    // sort by the ISO timestamp in `when`
    dailySchedules.sort((a, b) =>
      dayjs(a.when).valueOf() - dayjs(b.when).valueOf()
    )

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Nao foi possivel buscar os agendamentos do dia selecionado.")
  }
}