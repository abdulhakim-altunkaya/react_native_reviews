import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function About() {
  return (
    <View style={styles.container}>
        <Text>
            About screen
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})

export default About