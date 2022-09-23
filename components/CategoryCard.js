import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return ( 
    <TouchableOpacity style={{marginRight: 10, position: 'relative'}}>
        <Image source={{
            uri: imgUrl,
        }} 
        style={{height: 50, width: 50}}/>
        <Text style={{position: 'absolute', bottom: 1, color: '#fff', left: 1, font: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard