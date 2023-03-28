import { Pie } from "react-chartjs-2"

const PieChart = ({ data: pieData }) => {
  const labels = pieData.map((item) => item.status)
  const porContactar = pieData[0]?.count
  const conCita = pieData[1]?.count
  const sinCita = pieData[2]?.count
  const conExito = pieData[3]?.count
  const sinExito = pieData[4]?.count

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total de cotizaciones",
        data: [porContactar, conCita, sinCita, conExito, sinExito],
        backgroundColor: [
          "rgb(62, 228, 33)",
          "rgb(74, 19, 174)",
          "rgb(157, 7, 7)",
          "rgb(189, 192, 2)",
          "rgb(2, 192, 110)",
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <Pie
      data={data}
      options={{
        style: {
          width: 100,
          height: 100,
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Estado de la cotizaciones",
            font: {
              size: 20,
            },
          },
        },
      }}
    />
  )
}

export default PieChart
