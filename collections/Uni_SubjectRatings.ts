import { CollectionConfig } from 'payload/types'

const Uni_SubjectRatings: CollectionConfig = {
    slug: 'university-subject-ratings',
    labels: {
        singular: 'Subject Badge',
        plural: 'Subject Badges',
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
export default Uni_SubjectRatings