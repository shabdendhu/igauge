import { CollectionConfig } from 'payload/types'
import {lexicalEditor} from '@payloadcms/richtext-lexical'


const Blogs: CollectionConfig = {
    slug: 'blogs',
    admin: {
        useAsTitle: 'blog_title',
    },
    fields: [
        {
            name: 'blog_title',
            type: 'text',
            required: true,
            label: 'Blog Title',
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            label: 'Slug',
            unique: true,
            admin: {
                position: 'sidebar',
            }
        },

        {
            name: 'blog_content',
            type: 'richText',
            required: true,
            label: 'Blog Content',
            editor: lexicalEditor({})
        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'blogs-category',
            hasMany: false,
            required: true,
            admin: {
                position: 'sidebar',
            }
        },
        {
            name: 'featured_image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Featured Image',
            filterOptions: {
                mimeType: { contains: 'image' },
            },
            admin: {
                position: 'sidebar',
            }
        },


    ],
    versions: {
        drafts: true,
        maxPerDoc: 25,
    },
}
export default Blogs