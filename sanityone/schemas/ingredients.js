export default {
    name: "ingredients",
    title: "Ingredients",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Ingredient Name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            option: {
                hotspot: true
            }
        },
        {
            name: "notes",
            title: "Notes",
            type: "text"
        }
    ]
}