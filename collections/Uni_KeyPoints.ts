import { CollectionConfig } from "payload/types";

const Uni_KeyPoints: CollectionConfig = {
  slug: "university-keypoints",
  labels: {
    singular: "Keypoint",
    plural: "Keypoints",
  },
  access: {
    read: () => true, // Allow public read access
  },
  admin: {
    useAsTitle: "KeyPoint_title",
    group: "Universities",
  },
  fields: [
    {
      name: "KeyPoint_title",
      type: "text",
      required: true,
      label: "KeyPoint Title",
    },
  ],
};
export default Uni_KeyPoints;
