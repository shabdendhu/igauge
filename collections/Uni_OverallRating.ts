import { CollectionConfig } from "payload/types";

const Uni_OverallRating: CollectionConfig = {
  slug: "university-overall-rating",
  labels: {
    singular: "Overall Rating",
    plural: "Overall Ratings",
  },
  access: {
    read: () => true, // Allow public read access
  },
  admin: {
    useAsTitle: "badges_name",
    group: "Universities",
  },
  fields: [
    {
      name: "badges_name",
      type: "text",
      required: true,
      label: "Badges Name",
    },
    {
      name: "badges_image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Badges Image",
    },
  ],
};
export default Uni_OverallRating;
