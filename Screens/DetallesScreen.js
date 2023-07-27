import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DetallesScreen() {
  return (
    <View style={styles.container}>
      <Text style= {{ fontSize: 40 }}>DetallesScreen</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b5a1b5',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });