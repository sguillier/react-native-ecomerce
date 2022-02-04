import React from 'react';
import { FlatList, SafeAreaView, Text, View, } from 'react-native';
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cart-item/index';

export default function CartScreen({ navigation, route }) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.items);
    const total = cart.reduce((sum, item) =>  sum + item.product.price * item.quantity , 0)
    
    const deleteCartItem = (productId) => {
        dispatch({
            type: 'REMOVE_ITEM',
            itemId: productId,
        })
        console.log(productId);
    }

    if(cart.length === 0) { return (
        <View style={styles.container}>
            <Text style={styles.textCartEmpty}>El carro esta vacio</Text>
        </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Total:  ${total} </Text>
            </View>
            <View style={styles.containerFlatList}>
                <FlatList
                    keyExtractor={item => item.product.id}
                    data={cart}
                    renderItem={({ item }) => (
                        <CartItem item={item} deleteCartItem={deleteCartItem} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
