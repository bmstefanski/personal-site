import { formatDate } from 'pliny/utils/formatDate'
import Image from './Image'
import Link from './Link'

const ArticleCard = async ({ title, imgSrc, href, date, locale }) => {
  return (
    <div className="relative md min-w-[300px] max-w-[384px] p-2 w-full group">
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700 transition-all group-hover:border-primary-900 border-transparent `}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                style={{ objectPosition: 'top' }}
                alt={title}
                src={imgSrc}
                sizes="400px"
                loading="lazy"
                className="object-cover rounded-t-sm group-hover:scale-105 transition-all duration-300 object-center md:h-36 lg:h-[350px]"
                width={384}
                height={384}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover md:h-36 lg:h-[350px]"
              width={384}
              height={384}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, locale)}</time>
            </dd>
          </dl>

          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
