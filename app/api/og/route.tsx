/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from '@vercel/og'
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
              <div tw="flex-1 flex flex-col">
                <h1 tw="text-[120px] text-center m-auto leading-none text-white drop-shadow-2xl">
                  Bart Stefanski
                </h1>

                <p tw="text-[70px] m-auto mt-14">🐶 🥊 🍿 ❤️</p>
              </div>
            </div>
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
