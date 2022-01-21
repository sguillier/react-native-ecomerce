import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native';
import { styles } from './styles'


const ListItemsScreen = ({ navigation }) => {

    const clicGokItemDetailScreen = (item) => {
        navigation.navigate('ItemDetailScreen', { category: item });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Ir a</Text>
            <Button
                title="Items Details Screen"
                onPress={() => clicGokItemDetailScreen('category 1')}
            />
         </SafeAreaView>
    );

};


export default ListItemsScreen;
