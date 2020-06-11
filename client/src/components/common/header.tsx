import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const categories = [
  {
    name: 'achievement',
    text: '목표금액',
  },
  {
    name: 'analytics',
    text: '지출분석',
  },
  {
    name: 'statistics',
    text: '지출통계',
  },
]

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #7f66ff;
    color: #7f66ff;
    &:hover {
      color: #7f66ff;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`

const Header = () => {
  return (
    <CategoriesBlock>
      { categories.map(c => (
        <Category key={c.name}
        activeClassName="active"
        to={`/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  )
}

export default Header
