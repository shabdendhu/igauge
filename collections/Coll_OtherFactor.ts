import { CollectionConfig } from "payload/types";

const Coll_OtherFactor: CollectionConfig = {
  slug: "college-other-factors",
  labels: {
    singular: "Other Factor",
    plural: "Other Factors",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "other_factors",
    group: "Colleges",
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
export default Coll_OtherFactor;
