// ./components/PieChart.js
import React, { useEffect, useState } from "react"
import Chart from "chart.js/auto"
import { Pie } from "react-chartjs-2"
import {
  View,
  Text,
  Box,
  Center,
  Container,
  Stack,
  HStack,
  Flex,
} from "native-base"
import { statusInfo } from "../../../api/chart"

const Dashboard = () => {
  const [labels, setLabels] = useState([])
  const [porContactar, setporContactar] = useState([])
  const [conCita, setconCita] = useState([])
  const [sinCita, setsinCita] = useState([])
  const [conExito, setconExito] = useState([])
  const [sinExito, setsinExito] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await statusInfo()
      console.log(response)
      setporContactar(response[0]?.count)
      setconCita(response[1]?.count)
      setsinCita(response[2]?.count)
      setconExito(response[3]?.count)
      setsinExito(response[4]?.count)
      setLabels(response.map((item) => item.status))
    })()
  }, [])

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
    <View>
      <Center>
        <Text fontSize="2xl">Metricas</Text>
      </Center>

      <Flex
        space={3}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
      >
        <Box
          size="100%"
          maxW={{ base: "100%", md: "50%" }}
          shadow={2}
          rounded="lg"
          bg="white"
          p={12}
          style={{ height: 400 }}
        >
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
        </Box>
        <Box
          size="100%"
          maxW={{ base: "100%", md: "50%" }}
          shadow={2}
          rounded="lg"
          bg="white"
          p={12}
          style={{ height: 400 }}
        >
          <Pie
            data={data}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                },
                title: {
                  display: true,
                  text: "Estatus de las cotizaciones",
                  font: {
                    size: 20,
                  },
                },
              },
            }}
          />
        </Box>
      </Flex>
    </View>
  )
}
export default Dashboard
