import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

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
                <Form onSubmit={this.handleSubmit(this)} method="POST">
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="First Name" value={this.state.fname} onChange={this.onfNameChange.bind(this)} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last Name" value={this.state.lname} onChange={this.onlNameChange.bind(this)} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Please enter your message here..." value={this.state.message} onChange={this.onMessageChange.bind(this)} />
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

    handleSubmit(event) {
    }


    handleSubmit(e) {
        console.log(this.state);
        // e.preventDefault();
        // axios({
        //     method: "POST",
        //     url: "http://localhost:3002/send",
        //     data: this.state
        // }).then((response) => {
        //     if (response.data.status === 'success') {
        //         alert("Message Sent.");
        //         this.resetForm()
        //     } else if (response.data.status === 'fail') {
        //         alert("Message failed to send.")
        //     }
        // })
    }
}

export default Contact;