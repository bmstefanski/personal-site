import ArticleCard from '@/components/ArticleCard'
import GithubGraphSection from '@/components/GithubGraph'
import HeroSection from '@/components/HeroSection'
import LatestArticles from '@/components/LatestArticles'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import TestimonialsSection from '@/components/TestimonialsSection'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'

// import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Home({ posts }) {
  return (
    <div className="w-full flex flex-col gap-20">
      <HeroSection />

      <GithubGraphSection />
      <LatestArticles posts={posts} />

      <TestimonialsSection />
    </div>
  )
}
