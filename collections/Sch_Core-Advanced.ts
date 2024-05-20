import { CollectionConfig } from 'payload/types'

const Sch_CoreAdvanced: CollectionConfig = {
    slug: 'school-core-criteria',
    labels: {
        singular: 'Core Criteria',
        plural: 'Core Criteria',
    },
    admin: {
        useAsTitle: 'title',
        group: 'Schools',
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
export default Sch_CoreAdvanced