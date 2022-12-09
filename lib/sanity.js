import {createClient} from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url'
const config = {
    projectId: "hajc3yso",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
}
export const sanityClient = createClient(config)


export const urlFor = (source) => createImageUrlBuilder(config).image(source)
