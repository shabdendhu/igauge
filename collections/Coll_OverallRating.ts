import { CollectionConfig } from 'payload/types'

const Coll_OverallRating: CollectionConfig = {
    slug: 'college-overall-rating',
    labels: {
        singular: 'Overall Rating',
        plural: 'Overall Rating',
    },
    admin: {
        useAsTitle: 'badges_name',
        group: 'Colleges',
    },
    fields: [
        {
            name: 'badges_name',
            type: 'text',
            required: true,
            label: 'Badges Name',
        },
        {
            name: 'badges_image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Badges Image',
        }

    ],
}
export default Coll_OverallRating