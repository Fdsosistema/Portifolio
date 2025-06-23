import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carta from './card';

export default function Cartas() {
    return (
        <Container class="cards">
            <Row>
                <Col xs={{ order: 0 }}> <Carta></Carta> </Col>
                <Col xs={{ order: 2 }}> <Carta></Carta> </Col>
                <Col xs={{ order: 4 }}> <Carta></Carta> </Col>

            </Row>
        </Container>
    );
}

