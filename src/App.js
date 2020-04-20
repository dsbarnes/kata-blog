import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap'

import {
  rustKatas,
  pythonKatas,
  nodeKatas,
  cSharpKatas,
  bashKatas,
  securityKatas,
  projects
} from './siteData'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { node, python, csharp, bash, rust, security } from './icons'
import KataTitlesList from './components/KataTitlesList'
import Projects from './components/Projects'
import Home from './components/Home';

const allKatas = [
  ...nodeKatas,
  ...pythonKatas,
  ...cSharpKatas,
  ...rustKatas,
  ...bashKatas,
  ...securityKatas
]

const getImgSrc = (category) => {
  if (category === 'node') return node
  if (category === 'python') return python
  if (category === 'csharp') return csharp
  if (category === 'bash') return bash
  if (category === 'rust') return rust
  if (category === 'security') return security
  return '*'
}

function App() {

  return (
    <Router basename='/' forceRefresh={true}>

      <Container className='mt-5 mb-5 navFontSize'>

        <Navbar bg="white">
          <Navbar.Brand href="/">
            <span className='brandColor'>D</span>.
            <span className='brandColor'>S</span>. Barnes
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="/node">Node</Nav.Link>
            <Nav.Link href="/python">Python</Nav.Link>
            <Nav.Link href="/csharp">C#</Nav.Link>
            <Nav.Link href="/rust">Rust</Nav.Link>
            <Nav.Link href="/bash">Bash</Nav.Link>
            <Nav.Link href="/assignments">Work Assignments</Nav.Link>
          </Nav>
        </Navbar>
      </Container>

      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home
              getImgSrc={getImgSrc}
              katas={allKatas}
              projects={projects}
            />
          </Route>

          <Route path='/node'>
            <KataTitlesList
              getImgSrc={getImgSrc}
              katas={allKatas} />
          </Route>

          <Route path='/python'>
            <KataTitlesList
              getImgSrc={getImgSrc}
              katas={allKatas} />
          </Route>

          <Route path='/csharp'>
            <KataTitlesList
              getImgSrc={getImgSrc}
              katas={allKatas} />
          </Route>

          <Route path='/rust'>
            <KataTitlesList
              getImgSrc={getImgSrc}
              katas={allKatas} />
          </Route>

          <Route path='/bash'>
            <KataTitlesList
              getImgSrc={getImgSrc}
              katas={allKatas} />
          </Route>

          <Route path='/assignments'>
            <Projects
              getImgSrc={getImgSrc}
              projects={projects}
            />
          </Route>
        </Switch>
      </div>
    </Router >
  )
}

export default App
