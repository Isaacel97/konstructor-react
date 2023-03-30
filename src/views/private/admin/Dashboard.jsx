import React, { useState } from "react"
import { View, Text, Box, Center, Flex } from "native-base"
import PieChart from "../../components/PieChart.jsx"
import BarChart from "../../components/BarChart.jsx"
import { useEffect } from "react"
import { statusInfo, totalCotizaciones } from "../../../api/chart.js"
import Chart from "chart.js/auto"

const Dashboard = () => {
  const [pieData, setpieData] = useState([])
  const [barData, setbarData] = useState([])
  useEffect(() => {
    ;(async () => {
      setpieData(await statusInfo())
      setbarData(await totalCotizaciones())
    })()
  }, [])
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
          {pieData.length !== 0 && <PieChart data={pieData} />}
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
          {barData.length !== 0 && <BarChart data={barData} />}
        </Box>
      </Flex>
    </View>
  )
}
export default Dashboard
