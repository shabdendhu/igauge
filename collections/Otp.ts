import type { CollectionConfig } from "payload/types";

export const OTPs: CollectionConfig = {
  slug: "otps",
  admin: {
    useAsTitle: "userId",
  },
  access: {
    // create: () => true,
    // read: () => true,
    // update: () => true,
    // delete: () => true,
  },
  fields: [
    {
      name: "userId",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "otp",
      type: "text",
      required: true,
    },
    {
      name: "expiresAt",
      type: "date",
      required: true,
    },
    {
      name: "isUsed",
      type: "checkbox",
      required: true,
      defaultValue: false,
    },
  ],
};

export default OTPs;
