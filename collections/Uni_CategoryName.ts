import { CollectionConfig } from 'payload/types'

const Uni_CategoryName: CollectionConfig = {
    slug: 'university-category-name',
    labels: {
        singular: 'Category Name',
        plural: 'Category Names',
    },
    admin: {
        useAsTitle: 'category_name',
        group: 'Universities',
    },
    fields: [
        {
            name: 'category_name',
            type: 'text',
            required: true,
            label: 'Badges Name',
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
export default Uni_CategoryName