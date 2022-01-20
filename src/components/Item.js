import {Card,Button } from 'react-bootstrap'

const Item = ({producto}) => {
  return (
    <div>
      <Card  key={producto.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.image}  className="h-1"/>
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>
            $ {producto.price} - Stock {0}
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item
