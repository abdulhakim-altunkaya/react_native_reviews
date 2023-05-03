import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReviewDetails from './screens/ReviewDetails';
import Home from "./screens/Home";

import { useFonts } from "expo-font";


export default function App() {
  const [loaded] = useFonts({
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });
  
  if (!loaded) {
    return null;
  }
  return (

    <View >
      <ReviewDetails />
      <Home />    
    </View>
      
  );
}

