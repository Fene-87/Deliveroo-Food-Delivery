import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[items.id] = results[items.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items])

    


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#D3D3D3', flex: 1}}>
            <View style={{padding: 8, borderBottomWidth: 1, borderBottomColor: '#00CCBB', backgroundColor: '#fff'}}>
                <View>
                    <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>Basket</Text>
                    <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>{restaurant.title}</Text>
                </View>

                <TouchableOpacity
                   onPress={navigation.goBack}
                   style={{top: 3, right: 5, position: 'absolute', borderRadius:25, backgroundColor: '#D3D3D3'}}>
                    <XCircleIcon color='#00CCBB' height={50} width={50} />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 4, 
                backgroundColor: '#fff', marginVertical: 20}}>
            <Image 
                   source={require('../assets/Smiley-delivery-man.png')}
                   style={{height: 50, width: 50, backgroundColor: 'gray', borderWidth: 1, borderRadius: 20}}
                />
                <Text style={{flex: 1, marginLeft: 10}}>Deliver in 50-75 mins</Text>

                <TouchableOpacity>
                    <Text style={{color: '#00CCBB'}}>Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View key={key} 
                        style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
                         paddingHorizontal:8, paddingVertical: 4}}>
                        <Text>{items.length}x</Text>
                        <Image 
                           source={{uri: urlFor(items[0]?.image).url()}}
                           style={{height: 50, width: 50, borderRadius: 20, marginHorizontal: 10}}
                        />
                        <Text style={{flex: 1}}>{items[0]?.name}</Text>
                        <Text style={{color: 'gray'}}>Ksh {items[0]?.price}</Text>

                        <TouchableOpacity style={{marginLeft: 10}}>
                            <Text 
                              onPress={() => dispatch(removeFromBasket({id: key}))}
                              style={{color: '#00CCBB', fontSize: 15}}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={{padding: 10, marginTop: 5, backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: 'gray'}}>Subtotal</Text>
                    <Text style={{color: 'gray'}}>Ksh{basketTotal}</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: 'gray'}}>Delivery Fee</Text>
                    <Text style={{color: 'gray'}}>Ksh250</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 'bold'}}>Order Total</Text>
                    <Text style={{fontWeight: 'bold'}}>Ksh{basketTotal + 250}</Text>
                </View>

                <TouchableOpacity 
                   onPress={() => navigation.navigate('PreparingOrderScreen')}
                   style={{backgroundColor: '#00CCBB', borderRadius: 5, marginTop: 15, padding: 5}}>
                    <Text style={{color: '#F0F8FF', textAlign: 'center', fontWeight: 'bold'}}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})