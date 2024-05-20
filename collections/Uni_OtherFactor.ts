import { CollectionConfig } from 'payload/types'

const Uni_OtherFactor: CollectionConfig = {
    slug: 'university-other-factors',
    labels: {
        singular: 'Other Factor',
        plural: 'Other Factors',
    },
    admin: {
        useAsTitle: 'other_factors',
        group: 'Universities',
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
export default Uni_OtherFactor