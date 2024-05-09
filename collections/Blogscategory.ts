import { CollectionConfig } from 'payload/types'

const Blogscategory: CollectionConfig = {
    slug: 'blogs-category',
    admin: {
        useAsTitle: 'blog_category_name',
    },
    fields: [
        {
            name: 'blog_category_name',
            type: 'text',
            required: true,
            label: 'Blog Category Name',
        }

    ],
}
export default Blogscategory