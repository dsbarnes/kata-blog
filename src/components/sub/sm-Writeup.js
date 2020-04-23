import React from 'react'
import { Col, Row } from 'react-bootstrap'


const SmWriteup = ({ el, getImgSrc }) => {
    return (
        <React.Fragment>
            <Col xs={2}>
                <img
                    style={{
                        'height': '2rem',
                        'width': '2rem',
                        'position': 'relative',
                        'top': '10px'
                    }}
                    alt={`${el.category} icon`}
                    src={getImgSrc(el.category)} />
            </Col>

            <Col>
                <Row className='articleListFontSize'>
                    <Col>{el.title}</Col>
                </Row>
                <Row className='articleListFontSize date'>
                    <Col>{el.publishdate}</Col>
                </Row>
            </Col>
        </React.Fragment>
    )
}

export default SmWriteup