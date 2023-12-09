import ArticleCard from '@/components/ArticleCard'
import Card from '@/components/Card'
import GithubGraphSection from '@/components/GithubGraph'
import HeroSection from '@/components/HeroSection'
import LatestArticles from '@/components/LatestArticles'
import Link from '@/components/Link'
import ProjectsSection from '@/components/ProjectsSection'
import StatsSection from '@/components/StatsSection'
import Tag from '@/components/Tag'
import TestimonialsSection from '@/components/TestimonialsSection'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'
import projectsData from '@/data/projectsData'

// import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Home({ posts }) {
  return (
    <div className="w-full flex flex-col gap-28">
      <HeroSection />
      <StatsSection />
      <GithubGraphSection />
      <ProjectsSection
        items={projectsData.map((singleProject) => (
          <Card
            key={singleProject.title}
            className={' min-h-[290px] '}
            title={singleProject.title}
            description={singleProject.description}
            imgSrc={singleProject.imgSrc}
            href={singleProject.href}
            repoUrl={singleProject.repoUrl}
          />
        ))}
      ></ProjectsSection>
      <LatestArticles posts={posts} />

      <TestimonialsSection />
    </div>
  )
}
