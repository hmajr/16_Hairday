import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"


/**
 * Listen click event to remove a appointment from the database
 */
const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){
      const item = event.target.closest("li")
      const { id } = item.dataset

      if(id){

        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse agendamento?"
        )
        
        if (isConfirm) {
          // Fetch delete appointment id
          await scheduleCancel({id})

          // Reload appointment list
          schedulesDay()
        }
      }
    }
  })
})