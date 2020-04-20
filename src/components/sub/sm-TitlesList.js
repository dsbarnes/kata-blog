import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'



const SmTitleList = ({ el, getImgSrc }) => {

    const { path, url } = useRouteMatch()

    const urlTitle = el.title
        .split(' ').join('').replace('#', 'sharp')

    return (
        <React.Fragment>
            <Col xs={2}>
                <img
                    style={{
                        'height': '2rem',
                        'width': '2rem',
                        'position': 'relative',
                        'top': '10px',
                        'right': '5px'
                    }}
                    alt={`${el.category} icon`}
                    src={getImgSrc(el.category)} />
            </Col>

            <Col>
                <Row className='articleListFontSize'>
                    <Link
                        to={url === '/' ?
                            `${el.category}/${urlTitle}` :
                            `${url}/${urlTitle}`
                        }
                    >{el.title}
                    </Link>
                </Row>
                <Row className='articleListFontSize date'>{el.publishdate}</Row>
            </Col>
        </React.Fragment>
    )
}

export default SmTitleList