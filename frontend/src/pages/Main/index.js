import React,{useEffect,useState} from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Main(){

   const [products, setProducts] = useState([]);
   const [productInfo, setProductIfon] = useState({})
   const [page, setPage] = useState(1)

    useEffect(() => {
       loadProducts();
    }, [])

    async function loadProducts( page = 1){
        api.get(`/products?page=${page}`)
        .then(response=>{
            const { docs , ...productInfo } = response.data;

            setProducts(docs);
            setProductIfon(productInfo)
            setPage(page)

        })
    }


    const Products = products.map(item =>(
        <article key={item._id}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>

          <Link to={`/products/${item._id}`}>Acessar</Link>
        </article>
    ))


    function prevPage(){
       if(page === 1) return;
       const pageNumber = page -1;
       loadProducts(pageNumber)
    }
    function nextPage(){
      
        if(page === productInfo.pages){
            return;
        }

       const pageNumber = page + 1;
        loadProducts(pageNumber)
    }

    
    return(

        <div className="product-lits">
            {Products}
            <div className="actions">
            <button disabled={page === 1} onClick={prevPage}>Anterior</button>
            <button disabled={page === productInfo.pages} onClick={nextPage}>Próxima</button>
        </div>
        </div>
       

    )

}