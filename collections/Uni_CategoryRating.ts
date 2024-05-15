import { CollectionConfig } from 'payload/types'

const Uni_CategoryRatings: CollectionConfig = {
    slug: 'university-category-rating',
    labels: {
        singular: 'Category Badge',
        plural: 'Category Badges',
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
export default Uni_CategoryRatings