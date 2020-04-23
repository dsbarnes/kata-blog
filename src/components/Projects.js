import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import handleSortByDate from '../helpers'

function Projects({ projects, getImgSrc }) {
  return (
    <React.Fragment>
      <h3>Projects</h3>
      <hr />
      <Container>
        {projects
          .sort((a, b) => handleSortByDate(a, b))
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
