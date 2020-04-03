import React,{useState, useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import api from '../../services/api'

export default function Main(){
   
        const navigation = useNavigation()
        const [products, setProducts] = useState([])
        const [productInfo, setProductInfo] = useState({})
        const [page, setPage] = useState(1)
        const [loading, setLoading] = useState(false)

    async function loadProducts(page = 1 ){
     
        setLoading(true)
        const response = await api.get('/products',{
            params: {page}
        });

        const { docs, ...productsIfon } =  response.data
       
        setProducts([...products,...docs]);
        setPage(page);
        setProductInfo(productsIfon)
        setLoading(false)
    }

    function ladMore(){
        if(loading){
             return
         }

        if(page === productInfo.pages) return;

        const pageNumber = page +1;

        loadProducts(pageNumber)
    }
    function navigateToProduct( product){
        navigation.navigate('Product', {product})
    }


    useEffect(()=>{
        loadProducts()
    },[])

    
    return(
        <View style={styles.container}>
            <Text style={styles.total}>Total:{productInfo.total}</Text>
            <FlatList
            data={products}
            contentContainerStyle={styles.list}
            keyExtractor={item => String(item._id)}
            showsVerticalScrollIndicator={true}
            onEndReached={ladMore}
            onEndReachedThreshold={0.2}
            renderItem={({item : product}) =>(
               <View style={styles.productContainer}>
                    <Text style={styles.productTitle}>{product.title}</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    <TouchableOpacity style={styles.productButton} onPress={()=>navigateToProduct(product)}>
                    <Text style={styles.productButtonText}>Acessar</Text>
                    </TouchableOpacity>
               </View>
            )}
            />


        </View>
    )
}