import { CollectionConfig } from "payload/types";

const Features: CollectionConfig = {
  slug: "features",
  admin: {
    useAsTitle: "features_name",
  },
  fields: [
    {
      name: "features_name",
      type: "text",
      required: true,
      label: "Features Name",
    },
  ],
};
export default Features;
