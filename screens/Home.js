import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

function Home() {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
            Home screen
        </Text>
    </View>
  )
}

export default Home