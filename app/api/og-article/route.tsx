/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from '@vercel/og'
import { NextResponse } from 'next/server'
import React from 'react'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const rubikRegularFontP = fetch(
      new URL('../../../public/fonts/Rubik-Regular.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    const rubikBoldFontP = fetch(
      new URL('../../../public/fonts/Rubik-Bold.ttf', import.meta.url)
    ).then((res) => res.arrayBuffer())

    const [rubikRegularFont, rubikBoldFont] = await Promise.all([rubikRegularFontP, rubikBoldFontP])

    const { searchParams } = new URL(request.url)

    if (!searchParams.get('title')) {
      return new Response('Title was not provided', { status: 400 })
    }

    const title = decodeURIComponent(
      searchParams.has('title') ? searchParams.get('title')!.slice(0, 100) : 'My default title'
    )
    const image = 'https://avatars.githubusercontent.com/u/28964599?v=4'
    const date = searchParams.get('date')
    const readTime = searchParams.get('readTime')

    return new ImageResponse(
      (
        <div
          tw="w-full h-full flex"
          style={{
            background: `linear-gradient(60deg,#f79533,#f37055,#E60067,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82)`,
          }}
        >
          <div
            tw="relative h-[95%] w-[97%] m-auto flex items-center justify-center p-20"
            style={{ background: '#0E141B' }}
          >
            <div tw="flex h-full items-center w-full">
              <div tw="flex-1 flex flex-col mr-20 text-lg">
                <p tw="mb-4 " style={{ color: '#9eaab7' }}>
                  <strong tw="text-white text-lg font-normal mr-2">{date} </strong>{' '}
                  {readTime ? `(${readTime} min read)` : null}
                </p>
                <h1 tw="text-5xl leading-none tracking-wide text-white drop-shadow-2xl">{title}</h1>
              </div>
              {image ? (
                <div tw="flex relative">
                  <img
                    style={{
                      objectFit: 'cover',
                      borderColor: '#1E262F',
                      boxShadow:
                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                    }}
                    tw="mx-auto border-2 w-[300px] h-[300px] rounded-full"
                    src={image}
                  />
                </div>
              ) : null}
            </div>
            <h2
              tw="text-2xl font-normal text-white mt-auto"
              style={{ position: 'absolute', bottom: 40, left: 70 }}
            >
              ✌ bstefanski.com/blog
            </h2>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
        fonts: [
          {
            name: 'Rubik',
            data: rubikRegularFont,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Rubik',
            data: rubikBoldFont,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
