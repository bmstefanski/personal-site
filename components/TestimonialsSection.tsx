import Image from 'next/image'

export default function TestimonialsSection() {
  return (
    <section>
      <div className="mx-auto">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Testimonials
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Over the years, I've received numerous testimonials from colleagues and peers in the
            tech industry, reflecting on my collaborative work and problem-solving skills
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <Quote
              position={`Head of Integration @ Blazity`}
              author={`Jakub Jabłoński`}
              avatar={'/static/images/jj-avatar.jpeg'}
              content={`Before I worked with Bart, I thought that the term "10x developer" was made up, but it
          describes him perfectly. I believe that Bart's remarkable problem-solving abilities stand
          out the most. He usually has a solution before I can fully articulate the problem.
          Additionally, he possesses extensive knowledge in web development and stays up-to-date
          with the latest technologies. Bart is truly an exceptional developer and a great person to
          work with.`}
            />
            <Quote
              position={`Software Engineer @ Blazity`}
              author={`Filip Dukat`}
              avatar={'/static/images/fd-avatar.jpeg'}
              content={`I had the pleasure of working with Bart on several occasions. Every time, he showed a lot of professionalism, high proactivity when it came to looking for problem solutions, and a willingness to help less experienced developers. Bart is a great team player who takes ownership of the product he is working on. He's an excellent mentor and a valuable asset that would enhance any development team, regardless of project complexity.`}
            />
          </div>
          <div className="space-y-6">
            <Quote
              position={`CEO @ Blazity`}
              author={`Pawel Dadun`}
              avatar={'/static/images/pd-avatar.jpeg'}
              content={`I genuinely admire Bartek's analytical and engineering skills. Bartek is one of the most talented engineers I have been working with so far; Besides his outstanding engineering skills, he is an excellent communicator and a solid team player. I highly recommend Bartek to work with, especially on challenging projects and problems where there is a need for an A player in a team.`}
            />
            <Quote
              position={`Full-stack Developer @ Enfour Digital `}
              author={`Igor Klepacki`}
              avatar={'/static/images/ik-avatar.jpeg'}
              content={`I had a pleasure to work with Bart on several projects and I must say wow... Bart's knowledge about Next.js and web performance is astonishing, without a doubt. For the past few years I've learned a lot about previously mentioned technologies, general programming and OOP. His approach to programming and software engineering that goes in pair with marvellous skills regarding communication and planning makes him a perfect pal to collaborate with.`}
            />{' '}
          </div>
          <div className="space-y-6">
            <Quote
              position={`Software Engineer @ Blazity`}
              author={`Kacper Potyrała`}
              avatar={'/static/images/kp-avatar.jpeg'}
              content={`I've worked alongside Bart for a bit and I can assure you that it's always been a smooth experience. Bart was always ready to help with everything thanks to all of the solutions and ideas he just constantly keeps coming up with, which came in handy not just once. Also if you ever will encounter Bart of a technical interview don't worry, it was the most comfortable and best interview I ever had, even when I was being checked for every possible outcome and piece of knowledge that might be useful, the stress just disappeared. Recommending Bart comes without hesitation.`}
            />
            <Quote
              position={`Software Engineer`}
              author={`Igor Lasota`}
              avatar={'/static/images/il-avatar.jpeg'}
              content={`I hold Bart in high regard as a developer and colleague overall. He was coaching me for some period of time and during that phase I learned many useful aspects of programming. His knowledge of performance-related topics and ability to present this knowledge to other person is making him a great person to hang around if you want to gain deep knowledge about Next.js or programming in general.`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Quote({ author, position, content, avatar }) {
  return (
    <figure className="p-6 rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
      <blockquote className="text-sm text-gray-500 dark:text-gray-400">
        <p className="mb-4">{content}</p>
      </blockquote>
      <figcaption className="flex items-center space-x-3">
        <Image
          sizes="64px"
          width={32}
          height={32}
          className="w-9 h-9 rounded-full"
          src={avatar}
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium dark:text-white">
          <div>{author}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">{position}</div>
        </div>
      </figcaption>
    </figure>
  )
}
