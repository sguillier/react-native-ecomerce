import React from 'react';
import { FlatList, SafeAreaView, Text, View, } from 'react-native';
import { styles } from './styles'

import { CART } from '../../utils/data/dataCart.js';
import CartItem from './cart-item/index';



export default function CartScreen({ navigation, route }) {

    const total = CART.reduce((sum, item) =>  sum + item.product.price * item.quantity , 0)
    
    const deleteCartItem = (productId) => {
        console.log(productId);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Total:  ${total} </Text>
            </View>
            <View style={styles.containerFlatList}>
                <FlatList
                    keyExtractor={item => item.product.id}
                    data={CART}
                    renderItem={({ item }) => (
                        <CartItem item={item} deleteCartItem={deleteCartItem} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
