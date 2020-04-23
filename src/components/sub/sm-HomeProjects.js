import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SmHomeProjects = ({ project, getImgSrc }) => {
    return (
        <Container className='mb-3'>
            <Row>
                <Col xs={2}>
                    <img
                        style={{
                            'height': '1.33rem',
                            'width': '1.33em',
                            'position': 'relative',
                            'top': '14px',
                            'right': '5px'
                        }}
                        alt={`${project.category} icon`}
                        src={getImgSrc(project.category)} />
                </Col>
                <Col>
                    <Row className='articleListFontSize'>{project.title}</Row>
                    <Row className='articleListFontSize date'>{project.publishdate}</Row>
                    <Row className='mt-2'>
                        <Col className='articleListFontSize p-0'>
                            <Link to='/'>Video</Link>
                        </Col>
                        <Col className='articleListFontSize p-0'>
                            <Link to='/'>Demo</Link>
                        </Col>
                        <Col className='articleListFontSize p-0'>
                            <Link to='/'>Repo</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default SmHomeProjects