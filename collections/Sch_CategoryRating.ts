import { CollectionConfig } from 'payload/types'

const Sch_CategoryRatings: CollectionConfig = {
    slug: 'school-category-rating',
    labels: {
        singular: 'Category Badge',
        plural: 'Category Badges',
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
export default Sch_CategoryRatings