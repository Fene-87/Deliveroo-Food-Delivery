import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingTop: 10,
    }}
    >
        {/*Catogory Card*/}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
    </ScrollView>
  )
}

export default Categories