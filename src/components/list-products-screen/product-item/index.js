import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ProductItem({ product, goProductDetailScreen, color }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.containerTouchable, { backgroundColor: color }]}
                onPress={() => goProductDetailScreen(product)}
            >
                <View>
                    <Text style={styles.title}>{product.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


