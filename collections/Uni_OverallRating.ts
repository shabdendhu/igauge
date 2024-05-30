import { CollectionConfig } from "payload/types";

const Uni_OverallRating: CollectionConfig = {
  slug: "university-overall-rating",
  labels: {
    singular: "Overall Rating",
    plural: "Overall Ratings",
  },
  admin: {
    useAsTitle: "badges_name",
    group: "Universities",
  },
  access: {
    read: () => true, // Allow public read access
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
    {
      name: "ribbon",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Ribbon",
    },
    {
      name: "rated_by",
      type: "select",
      options: [
        { label: "Indian University Rating", value: "university" },
        { label: "Indian College Rating", value: "college" },
        { label: "Indian School Rating", value: "school" },
        {
          label: "Indian University & College Rating",
          value: "university-college",
        },
      ],
      defaultValue: "university",
    },
  ],
};
export default Uni_OverallRating;
