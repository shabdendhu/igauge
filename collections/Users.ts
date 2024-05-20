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
    },
    {
      name: "phoneNumber",
      type: "text",
      required: true,
      unique: true, // Ensure phone number is unique
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
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
    },
    {
      name: "state",
      type: "text",
    },
    {
      name: "city",
      type: "text",
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
    },
  ],
};
