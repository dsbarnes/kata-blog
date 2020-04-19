import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Media from 'react-media'


function Home({ katas, getImgSrc, projects }) {

  return (
    <React.Fragment>
      <h3>About</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br />

      <h3>All Puzzles and Projects</h3>
      <hr />

      <Container>
        <Row>
          <Media queries={{
            small: "(max-width: 770px)",
            large: "(min-width: 771px)"
          }}>
            {matches => (
              <React.Fragment>
                {matches.large &&
                  <React.Fragment>
                    <Col>
                      {
                        katas
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
                          })
                      }
                    </Col>

                    <Col>
                      {projects
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
                        .map(project => {
                          return (
                            <Container className='mb-4'>
                              <Row>
                                <Col xs={2}>
                                  <img
                                    style={{
                                      'height': '2rem',
                                      'width': '2rem',
                                      'position': 'relative',
                                      'top': '20px',
                                      'right': '5px'
                                    }}
                                    alt={`${project.category} icon`}
                                    src={getImgSrc(project.category)} />
                                </Col>
                                <Col>
                                  <Row className='articleListFontSize'>{project.title}</Row>
                                  <Row className='articleListFontSize date'>{project.publishdate}</Row>
                                  <Row>
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
                        })}
                    </Col>
                  </React.Fragment>
                }

                {matches.small &&
                  <React.Fragment>
                    <Col>
                      {
                        katas.map(el => {
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
                        })
                      }
                    </Col>

                    <Col>
                      {projects.map(project => {
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
                      })}
                    </Col>
                  </React.Fragment>
                }
              </React.Fragment>
            )}
          </Media>
        </Row>
      </Container>

    </React.Fragment >
  )

}

export default Home;