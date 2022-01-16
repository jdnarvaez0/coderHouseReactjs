import { useEffect, useState } from "react"
import {Card,Button } from 'react-bootstrap'
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
          <Card  style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.image}  className="h-1"/>
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>
                $ {producto.price} - Stock {0}
              </Card.Text>
              <Button variant="primary">Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        ))
      }
    </>
    )
}

export default ItemList
