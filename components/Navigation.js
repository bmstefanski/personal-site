import React from 'react'
import styled, { css } from 'styled-components'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Snippets', href: '/snippets' },
  { title: 'Links', href: '/links' },
]

export default function Navigation(props) {
  // TODO: Drawer
  const router = useRouter()

  return (
    <nav>
      <Container>
        {navItems.map((singleItem) => {
          const isActive = router.asPath === singleItem.href
          return (
            <NavItem key={singleItem.href} isActive={isActive}>
              <NextLink href={singleItem.href}>{singleItem.title}</NextLink>
            </NavItem>
          )
        })}
      </Container>
    </nav>
  )
}

const Container = styled.ul`
  display: flex;
  grid-gap: ${(p) => p.theme.spacings.sm}px;
  justify-content: center;
  padding: 0;
  list-style: none;
  text-align: center;
`

const NavItem = styled.li`
  a {
    font-size: ${(p) => p.theme.fontSizes['lg']}px;
    display: block;
    color: currentColor;
    text-decoration: none;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover {
      background-color: var(--navbar-item-hover);
    }

    &:active,
    &:focus {
      background-color: var(--navbar-item-focus);
    }

    ${(p) =>
      p.isActive &&
      css`
        background-color: var(--navbar-item-focus);
      `}
  }
`
