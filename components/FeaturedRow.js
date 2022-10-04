import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ( {id, title, description} ) => {
  return (
    <View>
      <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', padding: 4}}>  
        <Text style={{fontWeight: 'bold', fontSize: 15}}>{title}</Text>
        <ArrowRightIcon color='#00CCBB'/>
      </View>

      <Text style={{paddingHorizontal: 4, fontSize: 12, color: 'gray'}}>{description}</Text>

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 8
      }}
      showsHorizontalScrollIndicator={false}
      style={{paddingTop: 4,}}
      >
        {/*Restaurant Cards*/}
        <RestaurantCards 
          imgUrl="https://links.papareact.com/gn7"/>

        <RestaurantCards 
          imgUrl="https://links.papareact.com/gn7"/>  

        <RestaurantCards 
          imgUrl="https://links.papareact.com/gn7"/>

        <RestaurantCards 
          imgUrl="https://links.papareact.com/gn7"/>  
      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})