import React, { Component } from 'react';
import { Form, Button, Col, Row, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css'


export default class Login extends Component {

    render() {
        return (
            <Row className="justify-content-md-center">
                <Card className="text-center" style={{ height: '20em', width: '20em' }}>
                    <Card.Header><FontAwesomeIcon icon="check-square" /> Fazer Login</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Form>
                            <Form.Group controlId="formEmail">
                                <Form.Control type="email" placeholder="Digite seu email" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control type="password" placeholder="Digite sua senha" />
                            </Form.Group>
                            <Button block variant="primary" type="submit">Fazer Login</Button>
                        </Form>
                    </Card.Body>
                    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                </Card>
            </Row>
        );
    }
}