import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

function About() {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
            About screen
        </Text>
    </View>
  )
}


export default About