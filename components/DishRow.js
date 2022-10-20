import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';




const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {

  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(state => selectBasketItemsWithId(state, id));

  const addItemsToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}))
  };

  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }))
  }

  return (
    <>
    <TouchableOpacity 
       onPress={() => setIsPressed(!isPressed)}
       style={{backgroundColor: '#FFF', borderWidth: 1, borderColor: '#F3F3F4', padding: 8, }}>
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingRight: 2}}>
              <Text style={{fontSize: 18, marginBottom: 1}}>{name}</Text>
              <Text style={{color: 'gray'}}>{description}</Text>
              <Text style={{color: 'gray', marginTop: 20}}>
                Ksh {price}
              </Text>
            </View>
        
        <View>
            <Image 
               source={{uri: urlFor(image).url()}}
               style={{height: 100, width: 100, backgroundColor: 'gray', padding: 4, 
                      borderWidth: 1, borderColor: '#F3F3F4' }}
               />
        </View>

        </View>
    </TouchableOpacity>

    {isPressed && (
        <View style={{backgroundColor: '#fff', paddingHorizontal: 4}}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 5}}>
                <TouchableOpacity disabled={!items.length} onPress={removeItemsFromBasket} style={{marginRight: 10}}>
                    <MinusCircleIcon 
                      color={items.length > 0 ? '#00CCBB' : 'gray'}
                      size={40}
                    />
                </TouchableOpacity>

                <Text>{items.length}</Text>

                <TouchableOpacity onPress={addItemsToBasket} style={{marginLeft: 10}}>
                    <PlusCircleIcon
                      color='#00CCBB'
                      size={40}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRow

const styles = StyleSheet.create({})