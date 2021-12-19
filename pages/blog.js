import groupBy from 'lodash/groupBy'
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'components/Link'
import MidDot from 'components/MidDot'
import Page from 'components/Page'
import { EnvVars } from 'env'
import { formatDate } from 'utils/formatDate'
import { getReadTime } from 'utils/getReadTime'
import { makeApiUrl } from 'utils/makeApiUrl'
import { getAllPosts } from 'utils/postsFetcher'

export default function Blog({ yearGroupedPosts }) {
  return (
    <>
      <Head>
        <title>Blog | bstefanski.com</title>
      </Head>
      <Page title="Blog posts" description="The archive of blog posts">
        <List>
          {yearGroupedPosts.map(([year, posts]) => (
            <YearSection key={year}>
              <Year>{year}</Year>
              <Posts>
                {posts.map((singlePost) => {
                  const formattedDate = formatDate(new Date(singlePost.date))

                  return (
                    <ListItem key={singlePost.slug}>
                      <Link href={'/' + singlePost.slug}>{singlePost.title}</Link>
                      <Details>
                        <time dateTime={singlePost.date}>{formattedDate}</time> <MidDot /> {singlePost.readTime} <MidDot />{' '}
                        {singlePost.views || 'N/A'} views
                      </Details>
                      <p>{singlePost.description}</p>
                    </ListItem>
                  )
                })}
              </Posts>
            </YearSection>
          ))}
        </List>
      </Page>
    </>
  )
}

const YearSection = styled.div`
  display: flex;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    flex-direction: column;
  }
`

const Year = styled.p`
  font-size: ${(p) => p.theme.fontSizes['3xl']}px;
  font-weight: bold;
  flex: 2;

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    flex: 1;
    margin-bottom: ${(p) => p.theme.spacings.sm}px;
    text-align: center;
  }
`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 8;

  & > *:not(:first-child) {
    margin-top: ${(p) => p.theme.spacings.md}px;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.md}) {
    flex: 1;
    margin: auto;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: ${(p) => p.theme.spacings.lg}px;
  }
`

const ListItem = styled.div`
  font-size: ${(p) => p.theme.fontSizes['2xl']}px;
  max-width: ${(p) => p.theme.spacings.smallContainer}px;

  p {
    margin-top: ${(p) => p.theme.spacings['2xs']}px;
    font-size: ${(p) => p.theme.fontSizes.lg}px;
  }
`

const Details = styled.div`
  font-size: ${(p) => p.theme.fontSizes.md}px;
  opacity: 0.8;
`

export async function getStaticProps() {
  const fetchedPosts = await getAllPosts()
  const viewsData = await fetch(makeApiUrl('/api/views'))
    .then((r) => r.json())
    .then((r) => r.posts)

  const transformedPosts = fetchedPosts.map((singlePost) => ({
    ...singlePost.meta,
    slug: singlePost.slug,
    readTime: getReadTime(singlePost.content),
    views: viewsData.find((item) => item.slug === singlePost.slug)?.views || 'N/A',
  }))
  const yearGroupedPosts = groupBy(sortDescByDate(transformedPosts), (post) => new Date(post.date).getFullYear())

  return {
    props: { yearGroupedPosts: Object.entries(yearGroupedPosts) },
    revalidate: 60 * 10 * 6,
  }

  function sortDescByDate(array) {
    return array.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
}