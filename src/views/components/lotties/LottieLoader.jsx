import React from "react"
import Lottie from "lottie-react"
import LoaderLottie from "../../../assets/images/animations/loader.json"
import { Dimensions } from "react-native-web"
const { height } = Dimensions.get("window")

const LottieLoader = () => {
  return (
    <Lottie
      animationData={LoaderLottie}
      style={{
        width: 100,
        height: 100,
        position: "absolute",
        top: height / 2 - 50,
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}

export default LottieLoader
