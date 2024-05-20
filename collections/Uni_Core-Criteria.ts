import { CollectionConfig } from 'payload/types'

const Uni_CoreAdvanced: CollectionConfig = {
    slug: 'university-core-criteria',
    labels: {
        singular: 'Core Criteria',
        plural: 'Core Criteria',
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
export default Uni_CoreAdvanced