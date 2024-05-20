import { CollectionConfig } from 'payload/types'

const Uni_Advanced: CollectionConfig = {
    slug: 'university-advanced-criteria',
    labels: {
        singular: 'Advanced Criteria',
        plural: 'Advanced Criteria',
    },
    admin: {
        useAsTitle: 'title',
        group: 'Universities',
    },
    fields: [
        
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Other Factors Title',
        },
        {
            name: 'icon',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Icon',
        },

    ],
}
export default Uni_Advanced