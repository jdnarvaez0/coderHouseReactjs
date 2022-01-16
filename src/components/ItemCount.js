import { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

const ItemCount = ({stock,initial}) => {
  const [cantidad, setCantidad] = useState(initial)

  function sumaProducto() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  function restaProducto() {
      if (cantidad > 0) {
        setCantidad(cantidad - 1)
      }
    }
    return (
    <Card  className='p-4' style={{ width: '18rem' }}>
      <div>
        <ButtonGroup className="mb-2" size='lg'>
          <Button onClick={() => restaProducto()} > - </Button>
          <Button>{cantidad}</Button>
          <Button onClick={() => sumaProducto()}> + </Button>
        </ButtonGroup>
      </div>
      <div>
        <Button variant="primary" size="sm">
          Agregar al carrito
        </Button>{' '}
      </div>
    </Card>
  )
}

export default ItemCount
