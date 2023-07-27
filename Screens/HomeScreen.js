import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function HomeScreen( {navigation} ) {

  function navegar(){
    navigation.navigate('PERFIL')
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:40 }}> HomeScreen</Text>
      <Button
        title='Ir a Perfil'
        color={'red'}
        onPress={()=> navegar()}
      />
   
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#696cfc',
        justifyContent: 'center',
        alignItems: 'center'
    }
})