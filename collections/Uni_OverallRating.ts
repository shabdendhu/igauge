import { CollectionConfig } from 'payload/types'

const Uni_OverallRating: CollectionConfig = {
    slug: 'univ-overall-rating',
    labels: {
        singular: 'Overall Rating',
        plural: 'Overall Ratings',
    },
    admin: {
        useAsTitle: 'badges_name',
        group: 'Universities',
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
export default Uni_OverallRating