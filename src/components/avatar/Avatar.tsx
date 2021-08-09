//packages
import React from "react";

//styles
import styles from "./style";

//core components
import { Image, View } from "react-native";

export default function Avatar() {
  return(
    <View style={styles.AvatarContainer}>
      <Image
        resizeMode={"cover"}
        style={styles.Avatar}
        //source={require('../../../assets/images/goku.png')}/>
        source={{uri:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"}}/>
    </View>
  )
}
