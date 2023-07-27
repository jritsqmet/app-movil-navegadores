import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>PerfilScreen</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#97788b',
        justifyContent: 'center',
        alignItems: 'center'
    }
})