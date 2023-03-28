import { Bar } from "react-chartjs-2"

const BarChart = ({ data: barData }) => {
  //Bring in an array every month from January to the current month
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Ocutbre",
    "Noviembre",
    "Diciembre",
  ]
  //Get an array with months from January to the current month
  const labels = months.slice(0, new Date().getMonth() + 1)

  //array with the 12 colors of the bars
  const colors = [
    "rgba(62, 228, 33)",
    "rgba(74, 19, 174)",
    "rgba(157, 7, 7)",
    "rgba(189, 192, 2)",
    "rgba(2, 192, 110)",
    "rgba(255, 99, 132)",
    "rgba(255, 159, 64)",
    "rgba(255, 205, 86)",
    "rgba(75, 192, 192)",
    "rgba(54, 162, 235)",
    "rgba(153, 102, 255)",
    "rgba(201, 203, 207)",
  ]

  //filter the data to get only the months that have data
  const filteredData = barData.filter(
    (item) => item.month <= new Date().getMonth() + 1
  )
  //Add the months that do not have data and set the count to 0 so that the graph does not break
  for (let i = 0; i < new Date().getMonth() + 1; i++) {
    if (!filteredData.find((item) => item.month === i + 1)) {
      filteredData.push({ count: 0, month: i + 1 })
    }
  }
  //Sort the data by month
  filteredData.sort((a, b) => a.month - b.month)

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total de cotizaciones ",
        data: filteredData.map((item) => item.count),
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  }
  return (
    <Bar
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
            display: false,
          },
          title: {
            display: true,
            text: "Total de cotizaciones por mes",
            font: {
              size: 20,
            },
          },
        },
      }}
    />
  )
}

export default BarChart
