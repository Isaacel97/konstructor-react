import React from 'react'
import Lottie from "lottie-react";
import LoaderLottie from "../../../assets/images/animations/loader.json";
import { Dimensions } from 'react-native-web';
const { height } = Dimensions.get('window');

const LottieLoader = () => {
  return <Lottie 
    animationData={LoaderLottie}
    style={{
      width: '100%',
      height: height * 0.8,
    }} 
    />;
}

export default LottieLoader
