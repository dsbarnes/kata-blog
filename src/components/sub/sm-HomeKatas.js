import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SmHomeKatas = ({ el, getImgSrc }) => {
    return (
        <Container className='mb-3'>
            <Row>
                <Col xs={2}>
                    <img
                        style={{
                            'height': '1.33rem',
                            'width': '1.33rem',
                            'position': 'relative',
                            'top': '14px',
                            'right': '5px'
                        }}
                        alt={`${el.category} icon`}
                        src={getImgSrc(el.category)} />
                </Col>
                <Col>
                    <Row className='articleListFontSize'>
                        <Link to='/'>{el.title}</Link>
                    </Row>
                    <Row className='articleListFontSize date'>{el.publishdate}</Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SmHomeKatas
