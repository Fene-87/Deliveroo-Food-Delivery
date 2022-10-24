import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import  Icon  from 'react-native-vector-icons/Entypo';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params:{
      id,
      imgUrl,
      title,
      rating,
      // genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    }} = useRoute();

    useEffect(() => {
      dispatch(setRestaurant({
        id,
      imgUrl,
      title,
      rating,
      // genre,
      address,
      short_description,
      dishes,
      long,
      lat,
      }))
    }, [])

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
    <>

    <BasketIcon />

    <ScrollView>
      <View style={{position: 'relative'}}>
        <Image 
          source= {{
            uri: urlFor(imgUrl).url(),
          }}
          style={{height: 180, width: '100%', padding: 4, backgroundColor: 'gray'}}
        />

        <TouchableOpacity
          onPress={navigation.goBack}
          style={{position: 'absolute', top: 35, left: 15, borderRadius: 20, padding: 2, backgroundColor: '#f5f5f5'}}>
          <ArrowLeftIcon size={30} color='#00CCBB' />
        </TouchableOpacity>
      </View>

      <View style={{backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 8, paddingTop: 8}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
          <View style={{flexDirection: 'row', }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <StarIcon color='green' opacity={0.5} size={22} style={{paddingHorizontal: 4}} />
              <Text style={{paddingHorizontal: 4, color: 'gray', fontSize: 12}}>{rating}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5}}>
              <Icon name="location-pin" size={22} color='gray' opacity={0.5} />
              <Text style={{paddingHorizontal: 4, fontSize: 12, color: 'gray'}}>{address}</Text>
            </View>
          </View>

          <Text style={{color: 'gray', marginTop: 15, paddingBottom: 4}}>{short_description}</Text>
        </View>

        <TouchableOpacity style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', padding: 5,}}>
          <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20}/>
          <Text style={{flex: 1, paddingLeft: 4, fontWeight: 'bold', fontSize: 15}}>Have a food allergy?</Text>
          <ChevronRightIcon color='#00CCBB'/>
        </TouchableOpacity>
      </View>

      <View style={{paddingBottom: 36}}>
        <Text style={{paddingHorizontal: 8, paddingVertical: 15, marginBottom: 3, fontWeight: 'bold', fontSize: 20,}}>
          Menu
        </Text>

        {dishes.map((dish) => {
          return (
            <DishRow 
               key={dish._id}
               id={dish._id}
               name={dish.name}
               description={dish.short_description}
               price={dish.price}
               image={dish.image}
            />
          )
        })}
      </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})