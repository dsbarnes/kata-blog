import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Media from 'react-media'
import { Container, Row, Col } from 'react-bootstrap'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom"
import KataWriteup from './KataWriteup'

function KataTitleList({ katas, getImgSrc }) {

  const { path, url } = useRouteMatch()
  const [category, setCategory] = useState(katas)

  useEffect(() => {
    url !== '/' && setCategory(
      katas.filter((el) => el.category === url.slice(1))
    )
  }, [katas, url])

  const puzzlesHeader = url === '/' ?
    "All Puzzles" :
    // remove the '/' and uppercase the first letter of url
    url.slice(1)[0].toUpperCase() + url.slice(2).replace('sharp', '#') + " Puzzles"

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={path}>
          <h3>{puzzlesHeader}</h3>
          <hr />

          <Container className='mt-4 mb-2'>
            {category && category
              .sort((elA, elB) => {
                // elA elB === Element A or B
                // ymdA ymdB === Year Month Day of A or B
                const ymdA = elA.publishdate.split('/')
                const ymdB = elB.publishdate.split('/')
                const dateA = new Date(`${ymdA[0]}-${ymdA[1]}-${ymdA[2]}`)
                const dateB = new Date(`${ymdB[0]}-${ymdB[1]}-${ymdB[2]}`)
                // newest to oldest
                return dateB - dateA
              })
              .map(el => {
                const urlTitle = el.title
                  .split(' ').join('').replace('#', 'sharp')

                return (
                  <Row key={Math.random() * 10000} className='m-3'>
                    <Media queries={{
                      small: "(max-width: 770px)",
                      large: "(min-width: 771px)"
                    }}>
                      {matches => (
                        <React.Fragment>
                          {matches.small &&
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
                          }

                          {matches.large &&
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
                          }

                        </React.Fragment>
                      )}
                    </Media>
                  </Row>
                )
              })}
          </Container>
        </Route>

        <Route exact path={`${path}/:title`}>
          <KataWriteup katas={katas} getImgSrc={getImgSrc} />
        </Route>

      </Switch>
    </React.Fragment>
  )
}

export default KataTitleList;