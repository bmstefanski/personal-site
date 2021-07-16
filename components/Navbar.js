import { useScrollPosition } from 'hooks/useScrollPosition'
import { useRouter } from 'next/dist/client/router'
import React, { useRef, useState } from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import { lighten } from 'polished'
import dynamic from 'next/dynamic'

const ColorSwitcher = dynamic(() => import('./ColorSwitcher'), { ssr: false })

export default function Navbar(props) {
  const router = useRouter()
  const [scrollingDirection, setScrollingDirection] = useState('none')

  let lastScrollY = useRef(0)
  const lastRoute = useRef()
  const stepSize = useRef(50)

  useScrollPosition(scrollPositionCallback, [router.asPath], false, false, 50)

  function scrollPositionCallback({ currPos }) {
    const routerPath = router.asPath
    const hasRouteChanged = routerPath !== lastRoute.current

    if (hasRouteChanged) {
      lastRoute.current = routerPath
      setScrollingDirection('none')
      return
    }

    const currentScrollY = currPos.y
    const isScrollingUp = currentScrollY > lastScrollY.current
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY)
    const hasScrolledWholeStep = scrollDifference >= stepSize.current
    const isInNonCollapsibleArea = lastScrollY.current > -200

    if (isInNonCollapsibleArea) {
      setScrollingDirection('none')
      lastScrollY.current = currentScrollY
      return
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY
      return
    }

    setScrollingDirection(isScrollingUp ? 'up' : 'down')
    lastScrollY.current = currentScrollY
  }

  const isNavbarHidden = scrollingDirection === 'down'

  return (
    <Container isNavbarHidden={isNavbarHidden}>
      <Content>
        <NextLink href="/" passHref>
          <Logotype>Bart Stefanski</Logotype>
        </NextLink>
        <ColorSwitcher />
      </Content>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: ${(p) => p.theme.spacings.xs}px;
  width: 100%;
  max-width: ${(p) => p.theme.spacings.largeContainer}px;
  height: 75px;
  margin: 0 auto ${(p) => p.theme.spacings.lg}px auto;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 20px;

  visibility: ${(p) => (p.isNavbarHidden ? 'hidden' : 'visible')};
  transform: ${(p) =>
    p.isNavbarHidden
      ? `translateY(-75px) translateY(-${p.theme.spacings.xs}px) translateZ(0) scale(1)`
      : 'translateY(0) translateZ(0) scale(1)'};
  backface-visibility: hidden;
  transition-property: transform, visibility, height;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;

  z-index: ${(p) => p.theme.zIndexes.navbar};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background-color: var(--navbar);
    opacity: 0.95;
    border-radius: 20px;
    z-index: -1;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.xl}) {
    width: 95%;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 ${(p) => p.theme.spacings.md}px;
`

const Logotype = styled.a`
  font-size: ${(p) => p.theme.fontSizes['3xl']}px;
  text-decoration: none;

  &:visited,
  &:link {
    color: var(--heading);
  }

  &:active,
  &:focus {
    color: var(--heading);
  }

  &:hover {
    color: var(--heading);
  }
`
