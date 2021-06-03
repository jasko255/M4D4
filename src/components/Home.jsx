import fanbooks from '../products/fanta.json'
import { Component,  } from 'react'
import {Container, Row, Button, Card, Col} from 'react-bootstrap'
import CommentForm from './CommentForm'

class Home extends Component {
    state = {
        selected: null

    }

    render(){

        return (
            <Container>
               
        <Row className='justify-content-center row-cols-1 row-cols-md-2 g-4  '>
            {/* <Col xs={12} md={3} className='d-flex'> */}
               
                   { fanbooks.slice(0,9).map(book => (
                     
                          <Card style={{ width: '18rem' }} className='card col-12 col-md-3 bg-dark text-white  mt-2 m-2' key={book.asin}
                          onClick={() => this.setState({selected: book})}>
                          <Card.Img variant="top" className=" img-fluid" src={book.img} alt="First slide"/>
                          <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                            {book.price} $
                            </Card.Text>
                            <Button variant="primary" className='mt-auto'>Comment it!</Button>
                          </Card.Body>
                        </Card>
                                           
                   ))
                    

                   }    
                
            {/* </Col> */}
        </Row>
        <Row className='justify-content-center'>
            <Col>
            <CommentForm />
            </Col>
        </Row>
   

               
            </Container>

        )
    }
}


export default Home