import React from 'react';
import { FlatList, SafeAreaView, Text, View, } from 'react-native';
import { styles } from './styles'

import { ORDERS } from '../../utils/data/dataOrders.js';
import OrderItem from './order-item/index';



export default function OrdersScreen({ navigation, route }) {

    const deleteOrderItem = (orderId) => {
        console.log(orderId);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerFlatList}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={ORDERS}
                    renderItem={({ item }) => (
                        <OrderItem order={item} deleteOrderItem={deleteOrderItem} />
                    )}
                />
            </View>
        </SafeAreaView>
    );
};
