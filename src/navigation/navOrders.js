
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import OrdersScreen from '../components/orders-screen/index.js';

export default function OrdersStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='OrdersScreen'
        >
            <Stack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
                options={{ title: 'Ordenes' }}
            />
        </Stack.Navigator>
    )
}
