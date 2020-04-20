import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Media from 'react-media'
import { Row, Col } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import YouTube from 'react-youtube'

function KataWriteup({ katas, getImgSrc }) {

  const { title } = useParams()
  const [writeup, setWriteup] = useState([])

  useEffect(() => {
    setWriteup(
      katas.filter(el => el.title
        .split(' ').join('').replace('#', 'sharp') === title)
    )
  }, [katas, title])


  return (
    <React.Fragment>
      {writeup && writeup.map(el => {
        const textContent = el.content.filter(x => x.type === 'text')
        const codeContent = el.content.filter(x => x.type === 'code')

        return (
          <React.Fragment key={Math.random() * 10000}>
            <Row className='articleListFontSize'>
              <Media queries={{
                small: "(max-width: 580px)",
                large: "(min-width: 581px)"
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
                              'top': '10px'
                            }}
                            alt={`${el.category} icon`}
                            src={getImgSrc(el.category)} />
                        </Col>

                        <Col>
                          <Row className='articleListFontSize'>
                            <Col>{el.title}</Col>
                          </Row>
                          <Row className='articleListFontSize date'>
                            <Col>{el.publishdate}</Col>
                          </Row>
                        </Col>
                      </React.Fragment>
                    }

                    {matches.large &&
                      <React.Fragment>
                        <Col sm={1}>
                          <img
                            style={{ 'height': '2rem', 'width': '2rem' }}
                            alt={`${el.category} icon`}
                            src={getImgSrc(el.category)} />
                        </Col>
                        <Col xs={2} className='date'>{el.publishdate}</Col>
                        <Col>{el.title}</Col>
                      </React.Fragment>
                    }
                  </React.Fragment>
                )}
              </Media>
            </Row>

            <hr />

            {el.video &&
              <YouTube
                id={'YTvideo'}
                containerClassName={'YTcont'}
                videoId={el.video} />
            }


            <hr />
            {codeContent.map(content => {
              return (
                <React.Fragment key={Math.random() * 10000}>
                  <SyntaxHighlighter
                    style={atomOneDark}
                    className='m-0 pb-4 pt-4'
                  >
                    {content.head}
                  </SyntaxHighlighter>

                  <SyntaxHighlighter
                    style={atomOneDark}
                    showLineNumbers
                  >
                    {content.body}
                  </SyntaxHighlighter>
                </React.Fragment>
              )
            })
            }

            {textContent.map(content => {
              return (
                <React.Fragment key={Math.random() * 10000}>
                  <h2 className='mt-5'>{content.head}</h2>
                  <p className='mb-5'>{content.body}</p>
                </React.Fragment>
              )
            })
            }
          </React.Fragment>
        )
      })}
    </React.Fragment >

  )
}

export default KataWriteup
