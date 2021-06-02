import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

// class Contact extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fname: '',
//             lname: '',
//             email: '',
//             message: ''
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Contact</h1>
//                 <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
//                     <Form.Group>
//                         <Form.Row>
//                             <Col>
//                                 <Form.Control placeholder="First Name" value={this.state.fname} onChange={this.onfNameChange.bind(this)} />
//                             </Col>
//                             <Col>
//                                 <Form.Control placeholder="Last Name" value={this.state.lname} onChange={this.onlNameChange.bind(this)} />
//                             </Col>
//                         </Form.Row>
//                     </Form.Group>
//                     <Form.Group controlId="formBasicEmail">

//                         <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//                     </Form.Group>

//                     <Form.Group controlId="exampleForm.ControlTextarea1">
//                         <Form.Control as="textarea" rows={3} placeholder="Please enter your message here..." value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//                     </Form.Group>

//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//             </div>
//         )
//     }

//     onfNameChange(event) {
//         this.setState({ fname: event.target.value })
//     }

//     onlNameChange(event) {
//         this.setState({ lname: event.target.value })
//     }

//     onEmailChange(event) {
//         this.setState({ email: event.target.value })
//     }

//     onMessageChange(event) {
//         this.setState({ message: event.target.value })
//     }


//     handleSubmit(e) {
//         e.preventDefault();
//         axios({
//           method: "POST", 
//           url:"/send", 
//           data:  this.state
//         }).then((response)=>{
//           if (response.data.status === 'success'){
//               alert("Message Sent!"); 
//               this.resetForm();
//           }else if(response.data.status === 'fail'){
//               alert("Message failed to send.");
//           }
//         })

//     }

//     resetForm(){
//         this.setState({name: '', email: '',subject:'', message: ''})
//     }

// }

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }

    onMsgChange(event) {
        this.setState({ message: event.target.value })
    }

    submitEmail(e) {
        e.preventDefault();

        // const details = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     subject: this.state.subject,
        //     message: this.state.message
        // };

        axios({
            method: "POST",
            url:"/api/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        this.setState({ name: '', email: '', subject: '', message: '' })
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr />
                                <form id="contact-form" onSubmit={this.submitEmail.bind(this)}
                                    method="POST">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input placeholder="Name" id="name" type="text"
                                                    className="form-control" required value={this.state.name}
                                                    onChange={this.onNameChange.bind(this)} />
                                            </div>
                                            <div className="col-md-6">
                                                <input placeholder="Email" id="email" type="email"
                                                    className="form-control" aria-describedby="emailHelp"
                                                    required value={this.state.email} onChange=
                                                    {this.onEmailChange.bind(this)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input placeholder="Subject" id="subject" type="text"
                                            className="form-control" required value={this.state.subject}
                                            onChange={this.onSubjectChange.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Message" id="message"
                                            className="form-control" rows="1"
                                            required value={this.state.message}
                                            onChange={this.onMsgChange.bind(this)} />
                                    </div>
                                    <button type="submit" className="primary-btn submit">Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }




}


export default Contact;