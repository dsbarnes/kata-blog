import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import SmTitleList from './sub/sm-TitlesList'
import LgTitleList from './sub/lg-TitlesList'

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
                return (
                  <Row key={Math.random() * 10000} className='m-3'>
                    <Media queries={{
                      small: "(max-width: 770px)",
                      large: "(min-width: 771px)"
                    }}>
                      {matches => (
                        <React.Fragment>
                          {matches.small &&
                            <SmTitleList el={el} getImgSrc={getImgSrc} />
                          }

                          {matches.large &&
                            <LgTitleList el={el} getImgSrc={getImgSrc} />
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