import React from 'react';
import {
    SafeAreaView,
    Button,
    Text,
    View,
} from 'react-native';
import { styles } from './styles'


const ItemDetailScreen = ({ navigation }) => {
    
    const clickGoCategoriesScreen = (item) => {
        navigation.navigate('CategoriesScreen', { category: item });
    }

    const clickGoListItemsScreen = (item) => {
        navigation.navigate('ListItemsScreen', { category: item });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Volver a</Text>
            <Button
                title="List Items Screen"
                onPress={() => clickGoListItemsScreen('category 1')}
            />
            <Text>Volver a</Text>
            <Button
                title="Categories Screen"
                onPress={() => clickGoCategoriesScreen('category 1')}
            />
         </SafeAreaView>
    );
};


export default ItemDetailScreen;
