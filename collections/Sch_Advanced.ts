import { CollectionConfig } from 'payload/types'

const Sch_Advanced: CollectionConfig = {
    slug: 'school-advanced-criteria',
    labels: {
        singular: 'Advanced Criteria',
        plural: 'Advanced Criteria',
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
            label: 'Advanced Criteria Title',
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
export default Sch_Advanced