import React from 'react'
import styled from 'styled-components'

const ContentBar = styled.div`
  display: flex;
  padding: 1rem;
  height: 2rem;
  width: 100%;
  margin: 0 auto;
  background-color: #3c3c3c;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`

const Contents = () => {
  return <ContentBar></ContentBar>
}

export default Contents
