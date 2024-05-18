import { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "page_name",
  },
  fields: [
    {
      name: "page_name",
      type: "text",
      required: true,
      label: "Page Name",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "content",
      type: "blocks",
      blocks: [
        {
          slug: "text",
          labels: {
            singular: "Text",
            plural: "Texts",
          },
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
            },
          ],
        },
        {
          slug: "animatedTextField",
          labels: {
            singular: "Animated Text Field",
            plural: "Animated Text Fields",
          },
          fields: [
            {
              name: "prefix",
              type: "text",
              label: "Prefix",
              admin: {
                position: "sidebar",
              },
            },
            {
              name: "suffix",
              type: "text",
              label: "Suffix",
              admin: {
                position: "sidebar",
              },
            },
            {
              name: "texts",
              type: "array",
              label: "Highlighted Text",
              fields: [
                {
                  name: "text",
                  type: "text",
                  required: true,
                  label: "Highlighted Text",
                },
              ],
            },
          ],
        },
        {
          slug: "image",
          labels: {
            singular: "Image",
            plural: "Images",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          slug: "rich_editor",
          labels: {
            singular: "Rich Editor",
            plural: "Rich Editors",
          },
          fields: [
            {
              name: "rich_content",
              type: "richText",
              required: true,
            },
          ],
        },
        {
          slug: "counter",
          labels: {
            singular: "Counter",
            plural: "Counters",
          },
          fields: [
            {
              type: "array",
              name: "counters",
              label: "Counters",
              required: true,
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "number",
                      type: "number",
                      label: "Counter Value",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                    {
                      name: "title",
                      type: "text",
                      label: "Counter Title",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          slug: "city",
          labels: {
            singular: "City",
            plural: "Cities",
          },
          fields: [
            {
              name: "cities",
              label: "Cities",
              type: "array",
              fields: [
                {
                  name: "city",
                  type: "group",
                  fields: [
                    {
                      name: "text",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "image",
                      type: "upload",
                      relationTo: "media",
                      required: true,
                    },
                    {
                      name: "institution_type",
                      type: "select",
                      options: [
                        { label: "School", value: "school" },
                        { label: "College", value: "college" },
                        { label: "University", value: "university" },
                        { label: "Autonomous College", value: "autonomous" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          slug: "category",
          labels: {
            singular: "Category",
            plural: "Categories",
          },
          fields: [
            {
              name: "categories",
              label: "Categories",
              type: "array",
              fields: [
                {
                  name: "category",
                  type: "group",
                  fields: [
                    {
                      name: "text",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "image",
                      type: "upload",
                      relationTo: "media",
                      required: true,
                    },
                    {
                      name: "institution_type",
                      type: "select",
                      options: [
                        { label: "School", value: "school" },
                        { label: "College", value: "college" },
                        { label: "University", value: "university" },
                        { label: "Autonomous College", value: "autonomous" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          slug: "home_context",
          labels: {
            singular: "Home Context",
            plural: "Home Contexts",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "button_url",
              type: "text",
              required: true,
            },
            {
              name: "array_field",
              type: "array",
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "number",
                      type: "number",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                    {
                      name: "title",
                      type: "text",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          slug: "context_with_button",
          labels: {
            singular: "Context With Button",
            plural: "Context With Button",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "button_url",
              type: "text",
              required: true,
            },
          ],
        },
        {
          slug: "faqs",
          labels: {
            singular: "FAQ",
            plural: "FAQs",
          },
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "questions_answers",
              type: "array",
              maxRows: 8,
              fields: [
                {
                  name: "question",
                  type: "text",
                  required: true,
                },
                {
                  name: "answer",
                  type: "textarea",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          slug: "call_to_action",
          labels: {
            singular: "Call To Action",
            plural: "Call To Actions",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
              label: "Title",
            },
            {
              name: "description",
              type: "textarea",
              required: true,
              label: "Description",
            },
            {
              name: "link",
              type: "text",
              required: true,
              label: "Link",
            },
          ],
        },
        {
          slug: "context_with_counter",
          labels: {
            singular: "Context With Counter",
            plural: "Context With Counter",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
              label: "Title",
            },
            {
              name: "description",
              type: "textarea",
              required: true,
              label: "Description",
            },
            {
              name: "counter",
              type: "array",
              maxRows: 3,
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "number",
                      type: "number",
                      label: "Counter Value",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                    {
                      name: "title",
                      type: "text",
                      label: "Counter Title",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          slug: "Icon_boxes",
          labels: {
            singular: "Icon Box",
            plural: "Icon Boxes",
          },
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              type: "array",
              name: "icon_boxes",
              label: "Icon Boxes",
              maxRows: 4,
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "image",
                      type: "upload",
                      relationTo: "media",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                    {
                      name: "title",
                      type: "text",
                      label: "Point Title",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                    {
                      name: "description",
                      type: "textarea",
                      label: "Description",
                      required: true,
                      admin: {
                        width: "50%",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          slug: "heading_description",
          labels: {
            singular: "Heading Description",
            plural: "Heading Descriptions",
          },
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
              label: "Heading",
            },
            {
              name: "description",
              type: "textarea",
              required: true,
              label: "Description",
            },
          ],
        },
        {
          slug: "about_hero_section",
          labels: {
            singular: "about Hero Section",
            plural: "about Hero Section",
          },
          fields: [
            {
              name: "thumbnail_image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "video_url",
              type: "text",
              required: true,
              label: "Video URL",
            },
            {
              name: "title",
              type: "text",
              required: true,
              label: "Title",
            },
          ],
        },
        {
          slug: "context_without_button",
          labels: {
            singular: "Context Without Button",
            plural: "Context Without Button",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
          ],
        },
        {
          slug: "context_with_points",
          labels: {
            singular: "Context With Points",
            plural: "Context With Points",
          },
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "textarea",
              required: true,
            },
            {
              name: "points",
              type: "array",
              maxRows: 4,
              label: "Points",
              fields: [
                {
                  name: "point",
                  type: "text",
                  required: true,
                  label: "Point",
                },
              ],
            },
          ],
        },
        {
          slug: "team",
          labels: {
            singular: "Team",
            plural: "Teams",
          },
          fields: [
            {
              name: "team",
              type: "array",
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "name",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "image",
                      type: "upload",
                      relationTo: "media",
                      required: true,
                    },
                    {
                      name: "designation",
                      type: "text",
                      required: true,
                    },
                    {
                      name: "facebook",
                      type: "text",
                      label: "Facebook URL",
                      admin: {
                        width: "25%",
                      },
                    },
                    {
                      name: "twitter",
                      type: "text",
                      label: "Twitter URL",
                      admin: {
                        width: "25%",
                      },
                    },
                    {
                      name: "linkedin",
                      type: "text",
                      label: "Linkedin URL",
                      admin: {
                        width: "25%",
                      },
                    },
                    {
                      name: "instagram",
                      type: "text",
                      label: "Instagram URL",
                      admin: {
                        width: "25%",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
