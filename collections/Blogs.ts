import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "blog_title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "blog_title",
          type: "text",
          required: true,
          label: "Blog Title",
          admin: {
            width: "50%",
          },
        },
        {
          name: "slug",
          type: "text",
          label: "Slug",
          unique: true,
          admin: {
            width: "50%",
          },
        },
        {
          name: "category",
          type: "relationship",
          relationTo: "blogs-category",
          hasMany: false,
          admin: {
            width: "33%",
          },
        },
        {
          name: "published_date",
          type: "date",
          label: "Published Date",
          admin: {
            width: "33%",
          },
        },
        {
          name: "featured_image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Featured Image",
          filterOptions: {
            mimeType: { contains: "image" },
          },
          admin: {
            width: "33%",
          },
        },
        {
          name: "excerpt",
          type: "textarea",
          required: true,
          label: "Excerpt",
          admin: {
            width: "100%",
          },
        },
        {
          name: "blog_content",
          type: "richText",
          required: true,
          label: "Blog Content",
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              HTMLConverterFeature({}),
            ],
          }),
          admin: {
            width: "100%",
          },
        },
        lexicalHTML("blog_content", { name: "blog_content_html" }),
      ],
    },
  ],
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};

export default Blogs;
