import { CollectionConfig } from 'payload/types'

const SubjectName: CollectionConfig = {
    slug: 'product-categories',
    admin: {
        useAsTitle: 'product_category_name',
    },
    fields: [
        {
            name: 'product_category_name',
            type: 'text',
            required: true,
            label: 'Product Category Name',
        }

    ],
}
export default SubjectName