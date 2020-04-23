import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Media from 'react-media'
import LgHomeProjects from './sub/lg-HomeProjects';
import SmHomeProjects from './sub/sm-HomeProjects';
import LgHomeKatas from './sub/lg-HomeKatas';
import SmHomeKatas from './sub/sm-HomeKatas';


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
          <React.Fragment>
            <Col>
              {katas
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
                    <React.Fragment>
                      <Media queries={{
                        small: "(max-width: 770px)",
                        large: "(min-width: 771px)"
                      }}>

                        {matches => (
                          <React.Fragment>
                            {matches.large && <LgHomeKatas el={el} getImgSrc={getImgSrc} />}
                            {matches.small && <SmHomeKatas el={el} getImgSrc={getImgSrc} />}
                          </React.Fragment>
                        )}
                      </Media>
                    </React.Fragment>
                  )
                })}
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
                    <React.Fragment>
                      <Media queries={{
                        small: "(max-width: 770px)",
                        large: "(min-width: 771px)"
                      }}>

                        {matches => (
                          <React.Fragment>
                            {matches.large && <LgHomeProjects project={project} getImgSrc={getImgSrc} />}
                            {matches.small && <SmHomeProjects project={project} getImgSrt={getImgSrc} />}
                          </React.Fragment>
                        )}
                      </Media>
                    </React.Fragment>
                  )
                })}
            </Col>
          </React.Fragment>
        </Row>
      </Container>

    </React.Fragment >
  )

}

export default Home;