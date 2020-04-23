import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const LgHomeKatas = ({ el, getImgSrc }) => {
    return (
        <Container className='mb-3'>
            <Row>
                <Col xs={2}>
                    <img
                        style={{
                            'height': '2rem',
                            'width': '2rem',
                            'position': 'relative',
                            'top': '12px',
                            'right': '5px'
                        }}
                        alt={`${el.category} icon`}
                        src={getImgSrc(el.category)} />
                </Col>
                <Col>
                    <Row className='articleListFontSize'>
                        <Link to={`${el.category}/${el.title.split(' ').join('')}`}>{el.title}</Link>
                    </Row>
                    <Row className='articleListFontSize date'>{el.publishdate}</Row>
                </Col>
            </Row>
        </Container>
    )
}
export default LgHomeKatas