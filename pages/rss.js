import xmlescape from 'xml-escape'
import { EnvVars } from 'env'
import { getAllPosts, getAllPostsSlugs } from 'utils/postsFetcher'
import withCacheEffectivePage from 'utils/withCacheEffectivePage'

export default function Rss() {}

export async function getServerSideProps(ctxt) {
  return withCacheEffectivePage(async ({ res }) => {
    res.write(await mapToXmlFormat(await getAllPosts()))
    res.end()
  })(ctxt)
}

async function mapToXmlFormat(items) {
  return `<?xml version="1.0" ?>
  <rss xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">
  <channel>
    <title>bstefanski.com</title>
    <link>https://bstefanski.com/</link>
    <description>  
      <![CDATA[ A self-taught full-stack software engineer based in Poland, working in React.js & Nest.js Stack. Passionate about Clean Code, Object-Oriented Architecture and fast web. ]]></description>
    <generator>bstefanski.com</generator>
    <atom:link href="https://bstefanski.com/rss" rel="self" type="application/rss+xml"/>
    <language>en</language>
    ${(await Promise.all(items.map(makeSingleRssItem))).join('\n')}
  </channel>
  </rss>`
}

async function makeSingleRssItem(post) {
  const {
    meta: { title, description, date, tags },
    content,
    slug,
  } = post
  const ogImageUrl = EnvVars.OG_IMAGES_URL + `${slug}.png`
  const pubDate = new Date(date).toUTCString()

  return `
      <item>
        <title>${xmlescape(title)}</title>
        <link>${EnvVars.URL + slug}</link>
        <pubDate>${pubDate}</pubDate>
        <description><![CDATA[ ${description} ]]></description>
        <guid isPermaLink="true">${EnvVars.URL + slug}</guid>
        <dc:creator>Bart Stefański</dc:creator>
        <category>
          <![CDATA[ ${xmlescape(tags)} ]]>
        </category>
        <content><![CDATA[ ${content} ]]></content>
        <media:thumbnail url="${ogImageUrl}"/>
        <media:content url="${ogImageUrl}" medium="image">
          <media:title type="html"> ${xmlescape(title)} </media:title>
        </media:content>
      </item>`
}
