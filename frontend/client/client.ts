import {createClient, type ClientConfig} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config: ClientConfig = {
  projectId: 'a8ep10pk',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2022-03-07', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_SANITY_TOKEN,
}

export const client = createClient(config)

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder
    .image(source)
    .auto('format')
    .fit('max')
}