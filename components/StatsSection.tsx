import { allBlogs } from 'contentlayer/generated'

export default function StatsSection() {
  return (
    <section>
      <div className="mx-auto">
        <div className="space-y-2 pb-12 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Statistics
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcasing tech achievements, from impactful software development and diverse
            collaborations to GitHub recognition and expertise in talent assessment.
          </p>
        </div>
        <dl className="grid gap-8 text-gray-900 sm:grid-cols-2 lg:gap-20 lg:grid-cols-4 dark:text-white">
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold tracking-tight">50 million</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Users actively engaging with software I developed
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">25+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Extensive work with various individuals and organizations
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">6000+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              GitHub stars earned in numerous solo and team projects
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">100+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Interviews Conducted with potential developer candidates
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
