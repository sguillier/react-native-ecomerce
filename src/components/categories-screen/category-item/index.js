import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CategoryItem({ category, goListProductsScreen }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.containerTouchable, { backgroundColor: category.color }]}
                onPress={() => goListProductsScreen(category)}
            >
                <View>
                    <Text style={styles.title}>{category.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


