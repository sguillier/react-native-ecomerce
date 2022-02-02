import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function CartItem({ item, deleteCartItem }) {
    return (
        <View style={styles.container}>
            <View style={styles.boxContent}>
                <Text style={styles.title}>{item.product.name}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Precio:</Text> {item.product.price}</Text>
                <Text><Text style={{ fontWeight: 'bold' }}>Cantidad:</Text> {item.quantity}</Text>
            </View>

            <View style={styles.boxDelete}>
                <TouchableOpacity
                    // style={[styles.containerTouchable]}
                    onPress={() => deleteCartItem(item.product.id)}
                >

                    <Ionicons name='trash-outline' size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};


