import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
        <Text>
            Home screen
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
})

export default Home