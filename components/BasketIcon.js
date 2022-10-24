import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)

    if (items.length === 0) return null;

  return (
    <View style={{position: 'absolute', bottom: 10, width: '100%', zIndex: 50}}>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} style={{backgroundColor: '#00CCBB', marginHorizontal: 10, padding: 10, 
           borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#F0F8FF', fontSize: 15, fontWeight: 'bold'}}>{items.length}</Text>
        <Text style={{flex: 1, textAlign: 'center', color: '#F0F8FF', fontSize: 15, fontWeight: 'bold'}}>View Basket</Text>
        <Text style={{color: '#F0F8FF', fontSize: 15, fontWeight: 'bold'}}>Ksh {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon

const styles = StyleSheet.create({})