import React from 'react';
import {
    Button,
    SafeAreaView,
    Text,
} from 'react-native';
import { styles } from './styles'


const CategoriesScreen = ({ navigation }) => {

    const clickGoListItemsScreen = (item) => {
        navigation.navigate('ListItemsScreen', { category: item });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Ir a</Text>
            <Button
                title="List Items Screen"
                onPress={() => clickGoListItemsScreen('category 1')}
            />
         </SafeAreaView>
    );
};


export default CategoriesScreen;
