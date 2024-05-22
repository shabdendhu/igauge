import { CollectionConfig } from "payload/types";

const Uni_OtherFactor: CollectionConfig = {
  slug: "university-other-factors",
  labels: {
    singular: "Other Factor",
    plural: "Other Factors",
  },
  access: {
    read: () => true, // Allow public read access
  },
  admin: {
    useAsTitle: "other_factors",
    group: "Universities",
  },
  fields: [
    {
      name: "other_factors",
      type: "text",
      required: true,
      label: "Other Factors Title",
    },
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Icon",
    },
  ],
};
export default Uni_OtherFactor;
