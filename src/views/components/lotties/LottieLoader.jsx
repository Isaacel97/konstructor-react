import React from 'react'
import Lottie from "lottie-react";
import LoaderLottie from "../../../assets/images/animations/loader.json";

const LottieLoader = () => {
  return <Lottie 
    animationData={LoaderLottie} />;
}

export default LottieLoader
