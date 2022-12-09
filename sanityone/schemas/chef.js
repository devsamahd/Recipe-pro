export default {
    name: "chef",
    title: "chef",
    type: "document",
    fields: [{
        name: "name",
        title: "chef's Name",
        type: "string",
    },
    {
        name: "image",
        title: "Image",
        type: "image",
        options: {
            hotspot:true
        }
    },
    {
        name: "bio",
        title: "Bio",
        type: "array",
        of: [
            {
                title: "Block",
                type: "block",
                styles:[{title: "Normal", value:"normal"}],
                lists:[]
            }
        ]
    }
]
}