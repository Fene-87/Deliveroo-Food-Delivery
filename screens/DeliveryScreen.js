import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

  return (
    <View style={{backgroundColor: '#00CCBB', flex: 1}}>
      <SafeAreaView style={{zIndex: 50}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <XCircleIcon color='#fff' size={30}/>
          </TouchableOpacity>
          <Text style={{color: '#fff', fontWeight: '300', fontSize: 16}}>Order Help</Text>
        </View>

        <View style={{zIndex: 50, backgroundColor: '#fff', marginHorizontal: 10,
                      marginVertical: 5, padding: 20, borderRadius: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>            
              <View>
                <Text style={{color: 'gray', fontSize: 18}}>Estimated Arrival</Text>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>45-55 Minutes</Text>
              </View>
              <Image
                 source={require('../assets/Smiley-delivery-man.png')}
                 style={{height: 50, width: 50}} />
            </View>  

            <Text style={{marginTop: 6, color: 'gray'}}>Your order at {restaurant.title} is being prepared</Text> 
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}

        style={{flex: 1, marginTop: 10, zIndex: 0}}
        mapType='mutedStandard'
      >

      </MapView>
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({})