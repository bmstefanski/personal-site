import ArticleCard from '@/components/ArticleCard'
import GithubGraphSection from '@/components/GithubGraph'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'

// import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 6

export default function Home({ posts }) {
  return (
    <div className="w-full flex flex-col gap-20">
      <div className="flex flex-wrap justify-between w-full items-center">
        <div className="w-full lg:w-1/2">
          <p className="md:text-7xl text-5xl font-bold text-primary-600 mb-6">
            Hello, I'm <br />
            <span className="text-white ">Bart Stefanski</span>
          </p>
          <p className="mb-6 text-lg">
            Software developer focused on crafting robust web experiences. Skilled in advising on
            web platform, performance, developer experience, and expert in Next.js & React.js.
          </p>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold mb-2 uppercase">Socials</h3>
              <div className="flex gap-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
                <SocialIcon kind="github" href={siteMetadata.github} size={6} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 ">
          <Image
            className="rounded-lg shadow-lg ml-auto mix-blend-luminosity "
            src="/static/images/pp.png"
            alt="Ai generated image of Bart"
            width="400"
            loading="eager"
            height="500"
            priority
          />
        </div>
      </div>

      <GithubGraphSection />
      <div className="">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest articles
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            For a few years now, I've been sharing insights on my blog from my tech journey,
            focusing on simply and effectively solving tech issues. It's how I love to learn.
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
    </div>
  )
}
