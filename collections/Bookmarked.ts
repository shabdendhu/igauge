import type { CollectionConfig } from "payload/types";

export const BookmarkedInstitutions: CollectionConfig = {
  slug: "bookmarked-institutions",
  admin: {
    useAsTitle: "institutionId",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "user", // Reference to the user
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "institutions", // Array of bookmarked institutions
      type: "array",
      fields: [
        {
          name: "institutionType",
          type: "select",
          options: [
            {
              label: "School",
              value: "schools",
            },
            {
              label: "College",
              value: "colleges",
            },
            {
              label: "University",
              value: "universities",
            },
          ],
          required: true,
        },
        {
          name: "institutionId", // Unique identifier for the institution
          type: "number",
          required: true,
        },
      ],
    },
  ],
};
