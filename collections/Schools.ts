import { CollectionConfig } from "payload/types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const Schools: CollectionConfig = {
  slug: "schools",
  admin: {
    useAsTitle: "institution_name",
    group: 'Schools',
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
                  type: "text",
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
                    width: "25%",
                  },
                },
                {
                  name: "school_category",
                  type: "select",
                  label: "School Category",
                  options: [
                  {
                    label: "Central Board of Secondary Education",
                    value: "cbse",
                  },
                  {
                    label: "Indian Certificate of Secondary Education",
                    value: "icse",
                  },
                  {
                    label: "Council for the Indian School Certificate Examination",
                    value: "cisce",
                  },
                  {
                    label: "The International General Certificate of Secondary Education",
                    value: "igcse",
                  },
                  {
                    label: "State Board",
                    value: "state",
                  },
                  {
                    label: "International Baccalaureate",
                    value: "ib",
                  },
                  {
                    label: "Cambridge International Examinations",
                    value: "cie",
                  },
                  {
                   label: "National Institute of Open Schooling",
                    value: "nios",
                  },
                  ],
                  admin: {
                  width: "37.5%",
                  },
                  },
                  {
                    name: "residential",
                    type: "select",
                    label: "Residential/Non Residential/Day school",
                    options: [
                      {
                        label: "Residential",
                        value: "residential",
                      },
                      {
                        label: "Non Residential",
                        value: "non-residential",
                      },
                      {
                        label: "Day School",
                        value: "day-school",
                      },
                    ],
                    admin: {
                      width: "37.5%",
                    },
                  },
                {
                  name: "fee_structure_url",
                  type: "text",

                  label: "Admission Page URL",
                  admin: {
                    width: "33%",
                  },
                },
                {
                  name: "map_location",
                  type: "text",

                  label: "Map Location URL",
                  admin: {
                    width: "33%",
                  },
                },
                {
                  name: "source",
                  type: "text",
                  label: "Source",
                  admin: {
                    width: "33%",
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
                          type: "relationship",
                          relationTo: "sch-keypoints",
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
                {
                  name: "salient_features",
                  type: "array",
                  label: "Salient Features",
                  labels: {
                    singular: "Feature",
                    plural: "Features",
                  },
                  fields: [
                    {
                      type: "row",
                      fields: [
                        {
                          name: "salient_feature_title",
                          type: "text",
                          label: "Salient Feature Title",
                          admin: {
                            width: "100%",
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
                  name: "video",
                  type: "text",
                  label: "Youtube Video URL",
                  admin: {
                    width: "100%",
                  },
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
              relationTo: "school-overallRating",
              hasMany: false,
              label: "Overall Rating",
            },
            {
              name: "category-ratings",
              type: "array",
              label: "Catgeory Ratings",
              labels: {
                singular: "Item",
                plural: "Items",
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    
                    {
                      name: "category_rating",
                      type: "relationship",
                      relationTo: "school-category-rating",
                      hasMany: false,
                      label: "Category Rating",
                      admin: {
                        width: "100%",
                      },
                    },
                  ],
                },
              ],
            },

            {
              name: "subject_ratings",
              type: "array",
              label: "Subject Ratings",
              labels: {
                singular: "Item",
                plural: "Items",
              },
              fields: [
                {
                  type: "row",
                  fields: [
                    {
                      name: "subject_rating",
                      type: "relationship",
                      relationTo: "school-subject-rating-badges",
                      label: "Subject Rating",
                      admin: {
                        width: "100%",
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
  versions: {
    drafts: true,
  },
};

export default Schools;
