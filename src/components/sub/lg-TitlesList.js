import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useRouteMatch } from 'react-router-dom'


const LgTitleList = ({ el, getImgSrc }) => {

    const { path, url } = useRouteMatch()

    const urlTitle = el.title
        .split(' ').join('').replace('#', 'sharp')

    return (

        <React.Fragment key={Math.random() * 10000}>
            <Col sm={2}>
                <img
                    style={{ 'height': '2rem', 'width': '2rem' }}
                    alt={`${el.category} icon`}
                    src={getImgSrc(el.category)} />
            </Col>

            <Col className='articleListFontSize date' sm={3}>{el.publishdate}</Col>

            <Col className='articleListFontSize'>
                <Link
                    to={url === '/' ?
                        `${el.category}/${urlTitle}` :
                        `${url}/${urlTitle}`
                    }
                >{el.title}
                </Link>
            </Col>
        </React.Fragment>
    )
}

export default LgTitleList