import axios from "axios"

export const statusInfo = async () => {
  const response = await axios.get("http://localhost:8000/api/chart/status")
  return response.data
}

export const totalCotizaciones = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/chart/totalCotizaciones"
  )
  return response.data
}
