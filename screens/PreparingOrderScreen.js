import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'


const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
     setTimeout(() => {
      navigation.navigate('Delivery')
     }, 6000)
  }, [])
  return (
    <SafeAreaView style={{backgroundColor: '#00CCBB', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image 
          source={require('../assets/preview.gif')}
          style={{width: '100%', height: 250}}
        />

        <Text style={{color: '#fff', marginVertical: 20, fontWeight: 'bold', fontSize: 16}}>
          Waiting For Restaurant to Accept your Order
        </Text>

        <Progress.Circle size={60} indeterminate={true} color='white' />

    </SafeAreaView>
  )
}

export default PreparingOrderScreen

const styles = StyleSheet.create({})