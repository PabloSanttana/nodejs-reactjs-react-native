import React from 'react'
import {WebView} from 'react-native-webview'
import { useRoute } from '@react-navigation/native'


export default function Product({navigation}){
    const route = useRoute()
    const product = route.params.product
    navigation =>{
        title: navigation.state.product.title
    }

     return <WebView style={{fle:1}} source={{ uri: 'https://github.com/facebook/react-native'}} />


   
}

