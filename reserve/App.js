import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import * as Font from "expo-font";

const getFonts = () => {
  return Font.loadAsync({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  })
}




export default function App() {
  const getFonts2 = async () => {
    await getFonts();
    setFontsLoaded(true);
  }
  getFonts2();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (

    <View >
      {
        fontsLoaded ? 
        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 30 }}>Inter Black</Text>
        :
        <Text style={{ fontSize: 30 }}>SOMETHING</Text>
      }
      
      <Text style={{ fontSize: 30 }}>Platform Default</Text>

    </View>
      
  );
}


