import { CollectionConfig } from 'payload/types'

const Sch_OverallRating: CollectionConfig = {
    slug: 'school-overallRating',
    labels: {
        singular: 'Overall Rating',
        plural: 'Overall Ratings',
    },
    admin: {
        useAsTitle: 'badges_name',
        group: 'Schools',
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
export default Sch_OverallRating