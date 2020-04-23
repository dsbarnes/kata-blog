import React from 'react'
import { Col } from 'react-bootstrap'

const LgWriteup = ({ el, getImgSrc }) => {
    return (
        <React.Fragment>
            <Col sm={1}>
                <img
                    style={{ 'height': '2rem', 'width': '2rem' }}
                    alt={`${el.category} icon`}
                    src={getImgSrc(el.category)} />
            </Col>
            <Col xs={2} className='date'>{el.publishdate}</Col>
            <Col>{el.title}</Col>
        </React.Fragment>
    )
}

export default LgWriteup