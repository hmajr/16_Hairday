import { schedulesDay } from "../schedule/load"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()