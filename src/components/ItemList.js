import { useEffect, useState } from "react"
import Item from './Item.js'
const ItemList = () => {

  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    const url = "https://fakestoreapi.com/products" 

    fetch(url)
    .then((res) => res.json())
    .then((json) => {
      setProductos(json);
      console.log(json);
    });
  }, [])
 

  return (
    <>
      {
        productos.map((producto) =>( 
          <Item key={producto.id} producto={producto} />
       ))
      }
    </>
    )
}

export default ItemList
