import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <Form action="https://formsubmit.co/02ac09f63ab1347f1208e1efb8c871b5" method="POST">
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Form.Control name="First Name" placeholder="First Name" value={this.state.fname} onChange={this.onfNameChange.bind(this)} />
                            </Col>
                            <Col>
                                <Form.Control name="Last Name" placeholder="Last Name" value={this.state.lname} onChange={this.onlNameChange.bind(this)} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control name="Email" type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control name="Message" as="textarea" rows={3} placeholder="Please enter your message here..." value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }

    onfNameChange(event) {
        this.setState({ fname: event.target.value })
    }

    onlNameChange(event) {
        this.setState({ lname: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    resetForm(){
        this.setState({name: '', email: '',subject:'', message: ''})
    }

}

export default Contact;