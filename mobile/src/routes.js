import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import Main from './pages/Main'
import Product from './pages/Product'

const AppStack = createStackNavigator()


const stylesNavigatio = {
        title: 'JSHunt',
        headerStyle: {
          backgroundColor: '#DA552f',
          
        },
        headerTitleAlign:'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
}

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator >
                <AppStack.Screen  name="Main" component={Main} options={stylesNavigatio} />
                <AppStack.Screen  name="Product" component={Product} options={stylesNavigatio} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}