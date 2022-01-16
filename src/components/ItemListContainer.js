import ItemList from '../components/ItemList'
import {Row, Container} from 'react-bootstrap'

const ItemListContainer = () => {

  return (
    <>
      <Container>
        <Row className="g-5">
          <ItemList/>
        </Row>
      </Container>
    </>
  )
}

export default ItemListContainer
