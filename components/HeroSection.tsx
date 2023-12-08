import siteMetadata from '@/data/siteMetadata'
import SocialIcon from './social-icons'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex flex-wrap justify-between w-full items-center">
      <div className="w-full lg:w-1/2">
        <p className="md:text-7xl text-5xl font-bold text-primary-600 mb-6">
          Hello, I'm <br />
          <span className="text-white ">Bart Stefanski</span>
        </p>
        <p className="mb-6 text-lg">
          Software developer focused on crafting robust web experiences. Skilled in advising on web
          platform, performance, developer experience, and expert in Next.js & React.js.
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
          className="rounded-lg shadow-lg ml-auto object-cover mix-blend-luminosity h-[550px] "
          src="/static/images/pp.png"
          alt="Ai generated image of Bart"
          width="400"
          loading="eager"
          height="500"
          priority
        />
      </div>
    </div>
  )
}
