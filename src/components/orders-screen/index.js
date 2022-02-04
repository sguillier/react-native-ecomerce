import React from 'react';
import { FlatList, SafeAreaView, Text, View, } from 'react-native';
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import OrderItem from './order-item/index';



export default function OrdersScreen({ navigation, route }) {
    const dispatch = useDispatch()

    const deleteOrderItem = (orderId) => {
        dispatch({
            type: 'REMOVE_ORDER',
            orderId: orderId,
        })
    }

    const orders = useSelector(state => state.orders.orders);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerFlatList}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={orders}
                    renderItem={({ item }) => (
                        <OrderItem order={item} deleteOrderItem={deleteOrderItem} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
