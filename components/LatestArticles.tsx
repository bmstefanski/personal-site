import siteMetadata from '@/data/siteMetadata'
import ArticleCard from './ArticleCard'
import Link from 'next/link'

const MAX_DISPLAY = 6

export default function LatestArticles({ posts }) {
  return (
    <div className="">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest articles
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          For a few years now, I've been sharing insights on my blog from my tech journey, focusing
          on simply and effectively solving tech issues. It's how I love to learn.
        </p>
      </div>
      {!posts.length && 'No posts found.'}
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}
      >
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <ArticleCard
              key={slug}
              date={date}
              title={title}
              href={`/blog/${slug}`}
              imgSrc={`/static/thumbnails/${slug.replace('blog/', '')}.png`}
              locale={siteMetadata.locale}
            />
          )
        })}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </div>
  )
}
