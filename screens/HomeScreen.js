import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdjustmentsHorizontalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
  return (
    <SafeAreaView className="bg-white pt-5">
     <View>

      {/*Header*/}

      <View className="flex flex-row pb-3 items-center mx-4 space-x-2">
        <View className="flex flex-row flex-1 items-center">
        <Image 
          source = {{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

      <View className="mx-1">      
        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
        <Text className="font-bold text-xl">Current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
        </Text>
      </View>

      </View>

      
      <UserIcon size={35} color="#00CCBB" />
      

      </View>

      {/*SearchBar*/}
      <View className="mx-4 flex-row items-center space-x-2 pb-2">
        <View className="flex-row flex-1 space-x-2 items-center p-3 bg-gray-200">
          <MagnifyingGlassIcon color="gray"/>
          <TextInput placeholder='Restaurants and Cuisines'/>

        </View>

        <AdjustmentsHorizontalIcon color="#00CCBB"/>
      </View>

      {/*Body*/}
      <ScrollView className="bg-gray-100 px-4">
        {/*categories*/}
        <Categories />
        
        {/*featured*/}
        <FeaturedRow 
          id='123'
          title='Featured Row'
          description='Paid placement from our partners'
          />

        {/*Tasty Discounts*/}
        <FeaturedRow 
          id='1234'
          title='Tasty Discounts'
          description="Everyone's been enjoying these tasty discounts!"
          />

        {/*Offers near you*/}
        <FeaturedRow 
          id='12345'
          title='Offers near you'
          description='Why not support your local restaurant tonight!'
          />  
      </ScrollView>


    </View> 
    </SafeAreaView>  
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  userIcon: {
    alignSelf: 'flex-end',
  }
})