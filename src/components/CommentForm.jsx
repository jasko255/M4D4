import { Component } from "react";
import { Form, Button } from "react-bootstrap";

//my endpoint needs:
// "comment": "A good book but definitely I don't like many parts of the plot",
// "rate": 3,
// "elementId": "0316438960"

class CommentForm extends Component {
  state = {
    newComment: {
      comment: "",
      rate: 1,
      elementId: "",
    },
  };

  render() {
    return (
      <>
        <h1 className="text-center">Leave a comment</h1>
        <Form className="text-center">
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) =>
                this.setState({
                  newComment: {
                    ...this.state.newComment,
                    comment: e.target.value,
                  },
                })
              }
              value={this.state.newComment.comment}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>give it a value</Form.Label>
            <Form.Control as="select" value={this.state.newComment.rate}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default CommentForm;

// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWM1ZGNlYWY0ODAwMTVjOTE5NDEiLCJpYXQiOjE2MjI3MzIwNTQsImV4cCI6MTYyMzk0MTY1NH0.Ga3zIHQ5YxKSJ1BDgNaji8maS1zGhWZXK7h13vknTc4"
// }
// }
