import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { scheduleShow } from "./show.js";

const selectedDate = document.getElementById("date")

/**
 * Get appoints from a selected date and show
 */
export async function schedulesDay() {
  // GEt date from input
  const date = selectedDate.value

  // Get appointments in API
  const dailySchedules = await scheduleFetchByDay({date})

  // Show the day appointments
  scheduleShow(dailySchedules)
  
  // Horas disponiveis
  hoursLoad({ date , dailySchedules})
}