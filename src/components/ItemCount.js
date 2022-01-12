import { useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';


function ItemCount() {

  const [count, setCount] = useState(0)

  return (
   
      <Card  className='p-4' style={{ width: '18rem' }}>
          <div>
            <ButtonGroup className="mb-2" size='lg'>
              <Button onClick={ () => setCount(count - 1) } > - </Button>
              <Button>{count}</Button>
              <Button onClick={ () => setCount(count + 1) } > + </Button>
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
