export default {
    name: "recipes",
    title: "recipes",
    type: "document",
    fields: [
        {
            name: "name",
            title: "recipe name",
            type: "string"
        },
        {
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "name",
                maxLength:96
            }
        },
        {
            name: "chef",
            title: "chef",
            type: "reference",
            to:{type: "chef"}
        },
        {
            name: "mainlogo",
            title: "Recipe Main Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "ingredients",
            title: "Ingredients",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "ingredients",
                            title: "Ingredients",
                            type: "reference",
                            to: [{type: "ingredients"}]
                        },
                        {
                            name: "wholenumber",
                            title: "whole Number",
                            type: "number"
                        },
                        {
                            name: "fraction",
                            title: "fraction",
                            type: "string",
                            options: {
                                list: ["1/2","1/3","1/4","3/4","2/3"]
                            }
                        },
                        {
                            name: "unit",
                            title: "Unit",
                            type: "string",
                            options: {
                                list: ["grams", "cup", "Tea Spoon"]
                            }
                        }
                    ],
                    preview: {
                        select: {
                            title: "ingredients.name",
                            name: "ingredients.name",
                            media: "ingredients.image",
                            wholeNumber: "wholenumber",
                            fraction: "fraction",
                            unit: "unit"
                        },
                        prepare({
                            title,
                            subtitle,
                            media,
                            wholeNumber= "(No whole number set)",
                            fraction = "(No fraction set)",
                            unit = "(No unit set)"
                        }){
                            return{
                                title,
                                subtitle: `${wholeNumber} ${fraction} ${unit}`,
                                media
                            }
                        }
                    }
                }
            ]
        },
        {
            name: "instructions",
            title: "Instructions",
            type: "array",
            of: [
                {type: "block"}
            ]
        }
    ]
}