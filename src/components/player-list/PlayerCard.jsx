import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profImg from '../../img/profile.png';

const PlayerCard = (props) => {
  return (
       <Container style={{ padding: '10px' }}>
        <Card style={{ width: '23rem' }}>
            <Row>
                <Col className='d-flex align-items-center justify-content-center'  xs={6}>
                    <Row>
                        <Card.Img variant="top" src={profImg} style={{ width: '5rem', borderRadius:"50%" }}/>
                    </Row>
                    <Row>
                        <Card.Text>
                            {props.playerDetails.name}
                        </Card.Text>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Card.Body>
                        <Card.Title>Value: {props.playerDetails.value}</Card.Title>
                        <Card.Text>
                        Batting Rank: {props.playerDetails.battingRank}
                        </Card.Text>
                        <Card.Text>     
                        Bowling Rank: {props.playerDetails.bowlingRank} 
                        </Card.Text>
                        <Card.Text>
                        All Rounder Rank: {props.playerDetails.allrounderRank}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Container>
  )
}

export default PlayerCard