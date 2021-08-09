//packages
import React from 'react';

//styles
import styles from "./style";

//native components
import {View} from "react-native";

interface IFlag {
  color?: string,
  leftColor?: string,
  rightColor?: string,
  shieldColor?: string,
}

export default function Flag({color, leftColor, rightColor, shieldColor}: IFlag){ //se tipan las componentes
  return(
    <View style={[styles.Flag, {backgroundColor: color}]}>
      <View style={[styles.FlagSideContainer, {backgroundColor: leftColor}]}/>
      <View style={[styles.Shield, {backgroundColor: shieldColor}]}/>
      <View style={[styles.FlagSideContainer, {backgroundColor: rightColor}]}/>


    </View>
  )
}
