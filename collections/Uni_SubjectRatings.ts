import { CollectionConfig } from "payload/types";

const Uni_SubjectRatings: CollectionConfig = {
  slug: "university-subject-ratings",
  labels: {
    singular: "Subject Badge",
    plural: "Subject Badges",
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
      name: "ribbon_image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Ribbon Image",
    },
    {
      name: "rated_by",
      type: "select",
      options: [
        { label: "Indian University Rating", value: "university" },
        { label: 'Indian College Rating', value: 'college' },
        { label: 'Indian School Rating', value: 'school' },
      ],
      required: true,
    }
  ],
};
export default Uni_SubjectRatings;
