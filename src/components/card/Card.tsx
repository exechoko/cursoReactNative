// packages
import React from 'react';

// styles
import styles from "./style";

// native components
import {Image, Text, TouchableOpacity, View} from "react-native";

//components
import { Avatar, Flag } from "../index";

interface Icard{
  name?: string,
  country?: string,
  age?: number,
  sex?: string,
  points: number,
}

export default function Card({name, country, age, sex, points}: Icard) {
  return(
    <View style={styles.Card}>
      <View style={styles.Header}>
        <Avatar/>
        <View>
          <Text>{name}</Text>
        </View>

      </View>
      <View style={styles.Body}>
        <View style={styles.DescriptionContainer}>
          <Text>
            This is a citizen from {country} that has {age} years old and is a {sex}
          </Text>
        </View>
        <View>
          {
            country === "Guatemala" ?
              <Flag color="white" leftColor="blue" rightColor="blue" shieldColor="blue"/>
              :
              <Flag color="white" leftColor="transparent" rightColor="transparent" shieldColor="red"/>
          }
        </View>

      </View>
      <View style={styles.Footer}>
        <TouchableOpacity>
          <Text>Sumar ++</Text>
        </TouchableOpacity>
        <Text>{points}</Text>
        <TouchableOpacity>
          <Text>
            Restar --
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}
