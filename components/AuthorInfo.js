import styled from 'styled-components'
import NextImage from 'next/image'
import Link from './Link'

export default function AuthorInfo(props) {
  return (
    <Container>
      <AvatarContainer>
        <NextImage src="/avatar.jpeg" width={96} height={96} />
      </AvatarContainer>
      <Content>
        <AuthorTitle>Bart Stefański</AuthorTitle>
        <p>
          A self-taught full-stack software engineer based in Poland, working in React.js & Nest.js Stack. Passionate about Clean Code,
          Object-Oriented Architecture and fast web.{' '}
        </p>
        <Links>
          <Link href="https://github.com/bmstefanski">Github</Link>
          <Link href="https://www.goodreads.com/user/show/125029202-bart-omiej-stefa-ski">Goodreads</Link>
          <Link href="https://twitter.com/bmstefanski">Twitter</Link>
        </Links>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  grid-gap: ${(p) => p.theme.spacings.sm}px;
  flex-wrap: wrap;

  @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
    flex-flow: column;
  }
`

const AvatarContainer = styled.div`
  display: flex;
  width: ${(p) => p.theme.spacings.lg}px;
  height: 100%;
  overflow: hidden;
  border-radius: 100px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  grid-gap: ${(p) => p.theme.spacings['2xs']}px;
`

const Links = styled.div`
  display: flex;
  grid-gap: ${(p) => p.theme.spacings.xs}px;
`

const AuthorTitle = styled.div`
  font-size: ${(p) => p.theme.fontSizes['lg']}px;
  font-weight: bold;
`