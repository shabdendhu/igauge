import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "event_title",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "event_title",
      type: "text",
      required: true,
      label: "Event Title",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      label: "Slug",
      unique: true,
      admin: {
        position: "sidebar",
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
    {
      name: "category",
      type: "relationship",
      relationTo: "blogs-category",
      hasMany: false,
      required: true,
      admin: {
        position: "sidebar",
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
        position: "sidebar",
      },
    },
    // New fields for Event Details
    {
      name: "event_details",
      type: "group",
      fields: [
        {
          name: "date",
          type: "date",
          required: true,
          label: "Event Date",
        },
        {
          name: "time",
          type: "text",
          required: true,
          label: "Event Time",
        },
        {
          name: "location",
          type: "text",
          required: true,
          label: "Event Location",
        },
        {
          name: "mode",
          type: "text",
          required: true,
          label: "Event Mode",
        },
      ],
    },
    {
      name: "event_description",
      type: "textarea",
      required: true,
      label: "Event Description",
    },
    {
      name: "additional_info",
      type: "group",
      fields: [
        {
          name: "action_button_text",
          type: "text",
          required: true,
          label: "Action Button Text",
        },
        {
          name: "action_button_url",
          type: "text",
          required: true,
          label: "Action Button URL",
        },
      ],
    },
  ],
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};

export default Events;
