//packages
import React from "react";

//styles
import styles from "./style";

//core components
import { SafeAreaView, StatusBar, View } from "react-native";

export default function Screen({children}) {
  return(
    <SafeAreaView backgroundColor="blue" style={styles.SafeArea}>
      <StatusBar backgroundColor="blue" barStyle="light-content"/>
      <View style={styles.Screen}>
        {children}
      </View>
    </SafeAreaView>
  )

}
