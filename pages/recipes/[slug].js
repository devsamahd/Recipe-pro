import { sanityClient, urlFor } from "../../lib/sanity";


const recipeQuery = `*[_type == "recipe" && slug.current == $slug][0]{_id, name, slug, mainlogo{asset->{_id, url}}, ingredient[]{unit, wholenumber, fraction, ingredient->{
    name
}}, instructions}`

export default oneRecipe=()=>{

}

export const getStaticPaths = async() => {
    const path = await sanityClient.fetch(
        `*[_type == "recipe" && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    ) 
    return {
        path,
        fallback: true
    }
}

export const getStaticProps = async({params})=>{
    const {slug} = params
    const recipe = await sanityClient.fetch(recipeQuery, {slug})
    return {props: {data: {recipe}}}
}