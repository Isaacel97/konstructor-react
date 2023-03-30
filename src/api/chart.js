import axios from "axios"

export const statusInfo = async () => {
  const response = await axios.get("https://icandelario-dev.com/back/public/api/chart/status")
  return response.data
}

export const totalCotizaciones = async () => {
  const response = await axios.get(
    "https://icandelario-dev.com/back/public/api/chart/totalCotizaciones"
  )
  return response.data
}
