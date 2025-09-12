import { apiConfig } from "./api-config"

/**
 * Delete a schedule from the database
 * @param {string} id Appointment unique ID 
 */
export async function scheduleCancel( {id}) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE"
    })

    if (!response.ok) {
      throw Error(`Servidor responde com ${response.status}`)
    }

    alert("Agendamento cancelado com sucesso")
  } catch (error) {
    console.log(error)
    alert("Nao foi possivel cancelar o agendamento!")
  }
}