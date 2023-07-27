import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}} >WelcomeScreen</Text>
      <Button
        title='Ir a Home'
        onPress={ () => navigation.navigate('HomeStack') }
      />
      <Button 
        title='Ir a HOME'
        color={'#666'}
        onPress={ () => navigation.navigate('HOMETAB') }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fdfd86',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})