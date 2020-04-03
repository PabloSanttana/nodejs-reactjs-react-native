import React,{useEffect, useState} from 'react'

import api from '../../services/api'

import './styles.css'

export default function Product(props){

    const [product, setProuct]= useState({})
    const {id} = props.match.params;
    
    useEffect(() =>{
      api.get(`/products/${id}`)
      .then(Response =>{
          setProuct(Response.data)
      })
      .catch(err=>{
          alert('Erro tente novamente')
      })
        
    },[id])



    return(

        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>
            URL: <a href={product.url}>{product.url}</a>
            </p>
        </div>
    )
}