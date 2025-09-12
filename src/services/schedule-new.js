import { apiConfig } from "./api-config";

/**
 * POST new schedule appointment
 * @param { string } id Timestamp ID to appointment
 * @param { string } name Name of client to appointment
 * @param { string } when ISO string time of appointment 
 */
export async function scheduleNew({ id, name, when}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, when })
    }) 

    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Nao foi possivel agendar. Tente novamente mais tarde.")
  }
}