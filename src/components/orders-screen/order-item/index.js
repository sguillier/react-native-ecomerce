import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function OrderItem({ order, deleteOrderItem }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxContent}>
                <Text><Text style={{fontWeight: 'bold'}}>Fecha:</Text> {order.date}</Text>
                <Text><Text style={{fontWeight: 'bold'}}>Total:</Text> {order.total}</Text>
            </View>

            <View style={styles.boxDelete}>
                <TouchableOpacity
                    // style={[styles.containerTouchable]}
                    onPress={() => deleteOrderItem(order.id)}
                >
                    <Ionicons name='trash-outline' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};


