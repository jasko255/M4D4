import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

//my endpoint needs:
// "comment": "A good book but definitely I don't like many parts of the plot",
// "rate": 3,
// "elementId": "0316438960"

class CommentForm extends Component {

    render(){
        
        return <>
        <h1 className='text-center'>Leave a comment</h1>
        <Form className='text-center'>    
  <Form.Group >
    
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="1" name="group1" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="2" name="group1" type={type} id={`inline-${type}-2`} />
      <Form.Check inline label="3" name="group1" type={type} id={`inline-${type}-3`} />
      <Form.Check inline label="4" name="group1" type={type} id={`inline-${type}-4`} />
      <Form.Check inline label="5" name="group1" type={type} id={`inline-${type}-5`} />
      <Button variant="primary" type="submit">
    Submit
  </Button>
    </div>
  ))}
</Form>

</>
    }
}

export default CommentForm



// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWM1ZGNlYWY0ODAwMTVjOTE5NDEiLCJpYXQiOjE2MjI3MzIwNTQsImV4cCI6MTYyMzk0MTY1NH0.Ga3zIHQ5YxKSJ1BDgNaji8maS1zGhWZXK7h13vknTc4"
// }
// }