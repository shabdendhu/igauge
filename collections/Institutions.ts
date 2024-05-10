import { CollectionConfig } from "payload/types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const Institutions: CollectionConfig = {
  slug: "institutions",
  admin: {
    useAsTitle: "institution_name",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Main Content",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "institution_name",
                  type: "text",

                  admin: {
                    width: "50%",
                  },
                  label: "Institution Name",
                },
                {
                  name: "short_description",
                  type: "text",

                  admin: {
                    width: "50%",
                  },
                  label: "Short Description",
                },
                {
                  name: "website",
                  type: "text",

                  label: "Website",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "established_on",
                  type: "date",
                  label: "Established On",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "state",
                  type: "relationship",
                  relationTo: "states",
                  label: "State",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "city",
                  type: "relationship",
                  relationTo: "cities",
                  label: "City",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "type",
                  type: "radio",
                  label: "Public/Private",
                  options: [
                    {
                      label: "Public",
                      value: "public",
                    },
                    {
                      label: "Private",
                      value: "private",
                    },
                  ],
                  defaultValue: "public",
                  admin: {
                    layout: "horizontal",
                    width: "33%",
                  },
                },
                {
                  name: "institution_type",
                  type: "select",
                  label: "Institution Type",
                  hasMany: true,
                  options: [
                    {
                      label: "University",
                      value: "university",
                    },
                    {
                      label: "College",
                      value: "college",
                    },
                    {
                      label: "School",
                      value: "school",
                    },
                    {
                      label: "Autonomous College",
                      value: "Autonomous College",
                    },
                  ],
                  admin: {
                    width: "33%",
                  },
                },
                {
                  name: "subjects",
                  type: "relationship",
                  relationTo: "subjects",
                  hasMany: true,
                  label: "Subjects",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "product_category",
                  type: "relationship",
                  relationTo: "product-categories",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "fee_structure_url",
                  type: "text",

                  label: "Admission Page link",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "map_location",
                  type: "text",

                  label: "Map Location",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "source",
                  type: "text",
                  label: "Source URL",
                  admin: {
                    width: "25%",
                  },
                },
                {
                  name: "facebook_url",
                  type: "text",

                  label: "Facebook URL",
                  admin: {
                    width: "20%",
                  },
                },
                {
                  name: "twitter_url",
                  type: "text",

                  label: "Twitter URL",
                  admin: {
                    width: "20%",
                  },
                },
                {
                  name: "instagram_url",
                  type: "text",

                  label: "Instagram URL",
                  admin: {
                    width: "20%",
                  },
                },
                {
                  name: "linkedin_url",
                  type: "text",

                  label: "Linkedin URL",
                  admin: {
                    width: "20%",
                  },
                },
                {
                  name: "youtube_url",
                  type: "text",

                  label: "Youtube URL",
                  admin: {
                    width: "20%",
                  },
                },

                {
                  name: "keypoints",
                  type: "array",
                  label: "Keypoints",
                  minRows: 3,
                  maxRows: 9,
                  labels: {
                    singular: "keypoint",
                    plural: "keypoints",
                  },
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "keypoint_title",
                          type: "text",
                          label: "Keypoint Title",
                          admin: {
                            width: "50%",
                          },
                        },
                        {
                          name: "keypoint_value",
                          type: "text",
                          label: "Keypoint Value",
                          admin: {
                            width: "50%",
                          },
                        },
                      ],
                    },
                  ],
                  admin: {
                    width: "100%",
                  },
                },

                {
                  name: "overview",
                  type: "richText",

                  label: "Overview",
                  admin: {
                    width: "100%",
                  },
                  editor: lexicalEditor({}),
                },
              ],
            },
          ],
        },

        {
          name: "media",
          label: "Media",
          fields: [
            {
              type: "row",

              fields: [
                {
                  name: "logo",
                  type: "upload",
                  relationTo: "media",

                  label: "Logo",
                  filterOptions: {
                    mimeType: { contains: "image" },
                  },
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "featured_image",
                  type: "upload",
                  relationTo: "media",

                  label: "Featured Image",
                  filterOptions: {
                    mimeType: { contains: "image" },
                  },
                  admin: {
                    width: "50%",
                  },
                },
                {
                  name: "gallery",
                  type: "array",
                  label: "Gallery Array",
                  minRows: 3,
                  maxRows: 10,
                  labels: {
                    singular: "Item",
                    plural: "Items",
                  },
                  fields: [
                    {
                      name: "gallery_image",
                      type: "upload",
                      relationTo: "media",
                      label: "Gallery",
                      filterOptions: {
                        mimeType: { contains: "image" },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          name: "ratings",
          label: "Rating",
          fields: [
            {
              name: "overall_rating",
              type: "relationship",
              relationTo: "rating-badges",
              hasMany: false,
              label: "Overall Rating",
            },
            {
              name: "features",
              type: "array",
              label: "Features",
              minRows: 3,
              maxRows: 9,
              labels: {
                singular: "Item",
                plural: "Items",
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "feature_name",
                      type: "relationship",
                      relationTo: "features",
                      label: "Feature Name",
                      admin: {
                        width: "50%",
                      },
                    },
                    {
                      name: "subject_rating",
                      type: "relationship",
                      relationTo: "rating-badges",
                      hasMany: false,
                      // label: 'Subject Rating',
                      admin: {
                        width: "50%",
                      },
                    },
                  ],
                },
              ],
            },

            {
              name: "video",
              type: "text",
              label: "Youtube Video URL",
            },
          ],
        },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
};

export default Institutions;
