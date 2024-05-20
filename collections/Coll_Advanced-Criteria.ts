import { CollectionConfig } from 'payload/types'

const Coll_Advanced: CollectionConfig = {
    slug: 'college-advanced-criteria',
    labels: {
        singular: 'Advanced Criteria',
        plural: 'Advanced Criteria',
    },
    admin: {
        useAsTitle: 'title',
        group: 'Colleges',
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
export default Coll_Advanced