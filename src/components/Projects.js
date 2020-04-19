import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'

function Projects({ projects, getImgSrc }) {
  return (
    <React.Fragment>
      <h3>Projects</h3>
      <hr />
      <Container>
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
                <Row>
                  <Col xs={2}><img
                    src={getImgSrc(project.category)}
                    alt='node icon'
                    style={{
                      "height": "2rem",
                      "width": "2rem",
                      'position': 'relative',
                      'top': '20px',
                      'right': '5px'
                    }}
                  />
                  </Col>
                  <Col>
                    <Row className='articleListFontSize'>{project.title}</Row>
                    <Row className='articleListFontSize date'>{project.publishdate}</Row>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col xs={2}></Col>
                  <Col className='articleListFontSize p-0'><a target='_blank' href={project.video}>Video</a></Col>
                  <Col className='articleListFontSize p-0'><a target='_blank' href={project.demo}>Demo</a></Col>
                  <Col className='articleListFontSize p-0'><a target='_blank' href={project.repo}>Repo</a></Col>
                </Row>
                <br />
              </React.Fragment>
            )
          })}
      </Container>
    </React.Fragment>
  )
}

export default Projects;
