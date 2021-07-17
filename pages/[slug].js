import styled from 'styled-components'
import { formatDate } from 'utils/formatDate'
import RichText from 'components/RichText'
import * as path from 'path'
import * as fs from 'fs'

import matter from 'gray-matter'
import Head from 'next/head'

const DOCS_DIRECTORY = path.join(process.cwd(), 'posts')

export default function SingleArticlePage(props) {
  const {
    slug,
    content,
    meta: { title, date },
  } = props

  const formattedDate = formatDate(new Date(date))
  const readTime = `9 min read`

  return (
    <>
      <Head>
        <link href="/nord-prism-theme.css" rel="stylesheet" />
      </Head>
      <Container>
        <HeaderContainer>
          <Title>{title}</Title>
          <DetailsContainer>
            {formattedDate} <MidDot /> {readTime}
          </DetailsContainer>
        </HeaderContainer>
        <RichText {...content} />
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((slug) => ({ params: { slug } })),
    fallback: false,
  }

  function getAllPosts() {
    return fs.readdirSync(DOCS_DIRECTORY).map(normalizePostName)
  }
}

export async function getStaticProps({ params }) {
  const singlePost = await getSinglePost(params.slug)
  return {
    props: singlePost,
  }

  async function getSinglePost(slug) {
    const filePath = path.join(DOCS_DIRECTORY, slug + '.mdx')
    const contents = fs.readFileSync(filePath, 'utf8')
    const { data: meta, content } = matter(contents)
    const serializedContent = await serializeContent(content, meta)
    return { slug, content: serializedContent, meta }
  }

  async function serializeContent(content, meta) {
    const { serialize } = require('next-mdx-remote/serialize')
    const remarkPrism = require('remark-prism')

    return serialize(content, {
      scope: meta,
      mdxOptions: {
        remarkPlugins: [
          require('@fec/remark-a11y-emoji'),
          require('remark-breaks'),
          require('remark-gfm'),
          require('remark-footnotes'),
          require('remark-external-links'),
          require('remark-toc'),
          require('remark-slug'),
          [
            remarkPrism,
            {
              plugins: ['line-numbers', 'diff-highlight'],
            },
          ],
          require('remark-sectionize'),
        ],
        rehypePlugins: [],
      },
    })
  }
}

function normalizePostName(postName) {
  return postName.replace('.mdx', '')
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${(p) => p.theme.spacings.mediumContainer}px;
  padding: 0 ${(p) => p.theme.spacings.xs}px;
  margin: 0 auto;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(p) => p.theme.spacings.smallContainer}px;
  grid-gap: ${(p) => p.theme.spacings.sm}px;
`

const Title = styled.h1`
  font-size: ${(p) => p.theme.fontSizes['4xl']}px;
  font-weight: 600;
`

const DetailsContainer = styled.div`
  font-size: ${(p) => p.theme.fontSizes['md']}px;
  color: var(--text-lighter);
`

const MidDot = styled.span`
  &::before {
    display: inline-block;
    content: '\x000B7';
    margin: 0 ${(p) => p.theme.spacings['2xs']}px;
  }
`
