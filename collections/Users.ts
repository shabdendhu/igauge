import type { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "phoneNumber",
      type: "text",
      required: true,
    },
    {
      name: "gender",
      type: "select",
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
        {
          label: "Other",
          value: "other",
        },
      ],
      required: true,
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
      required: true,
    },
    {
      name: "state",
      type: "text",
      required: true,
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "userCategory",
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
        {
          label: "Guest",
          value: "guest",
        },
      ],
      required: true,
    },
    // {
    //   name: "bookmarkedInstitutions",
    //   type: "array",
    //   label: "Bookmarked Institutions",
    //   fields: [
    //     {
    //       name: "institution",
    //       type: "relationship",
    //       relationTo: "institutions",
    //       required: true,
    //     },
    //   ],
    // },
    // Email field is added by default by Payload for auth collections
  ],
};
