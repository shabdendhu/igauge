import { CollectionConfig } from 'payload/types'

const Sch_OtherFactor: CollectionConfig = {
    slug: 'school-other-factors',
    labels: {
        singular: 'Other Factor',
        plural: 'Other Factors',
    },
    admin: {
        useAsTitle: 'other_factors',
        group: 'Schools',
    },
    fields: [
        
        {
            name: 'other_factors',
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
export default Sch_OtherFactor