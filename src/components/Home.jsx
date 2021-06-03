import fanbooks from '../products/fanta.json'
import { Component,  } from 'react'
import {Container, Row, Button, Card} from 'react-bootstrap'

class Home extends Component {
    state = {

    }

    render(){

        return (
            <Container>
               
        <Row className='justify-content-center row-cols-1 row-cols-md-2 g-4  '>
            {/* <Col xs={12} md={3} className='d-flex'> */}
               
                   { fanbooks.slice(0,9).map(book => (
                     
                          <Card style={{ width: '18rem' }} className='card col-12 col-md-3 bg-dark text-white  mt-2 m-2' key={book.asin}>
                          <Card.Img variant="top" className=" img-fluid" src={book.img} alt="First slide"/>
                          <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                            {book.price} $
                            </Card.Text>
                            <Button variant="primary" className='mt-auto'>Go somewhere</Button>
                          </Card.Body>
                        </Card>
                       
                     
                   ))
                    

                   }    
                
            {/* </Col> */}
        </Row>
   

               
            </Container>

        )
    }
}


export default Home