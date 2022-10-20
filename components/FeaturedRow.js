import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import sanityClient from '../sanity'

const FeaturedRow = ( {id, title, description} ) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      }
    }[0]
    `, {id}).then(data => {
      setRestaurants(data.restaurants)
      
    })
  }, [id]);


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

        {restaurants.map((restaurant) => {
          return(
          <RestaurantCards 
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            // genre={restaurant._type.name}
            long={restaurant.long}
            lat={restaurant.lat}
            />)

            
        })}

        

       
 
         
      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})