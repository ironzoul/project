export default {
    name: 'job',
    title: 'job',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Company/Organization',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Job Title',
            type: 'string',
            
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'block',
                    type: 'block',
                    styles: [ { title: 'Normal',value: 'normal'}],
                    lists: [],
                }
            ]
        }
    ]
}