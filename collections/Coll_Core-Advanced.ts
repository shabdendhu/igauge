import { CollectionConfig } from 'payload/types'

const Coll_CoreAdvanced: CollectionConfig = {
    slug: 'college-core-criteria',
    labels: {
        singular: 'Core Criteria',
        plural: 'Core Criteria',
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
export default Coll_CoreAdvanced