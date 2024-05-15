import { CollectionConfig } from 'payload/types'

const Coll_CategoryRatings: CollectionConfig = {
    slug: 'collage-category-rating',
    labels: {
        singular: 'Category Badge',
        plural: 'Category Badges',
    },
    admin: {
        useAsTitle: 'badges_name',
        group: 'College',
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
export default Coll_CategoryRatings