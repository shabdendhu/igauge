import { CollectionConfig } from "payload/types";

const Coll_CategoryRatings: CollectionConfig = {
  slug: "collage-category-rating",
  labels: {
    singular: "Category Badge",
    plural: "Category Badges",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "badges_name",
    group: "Colleges",
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
        { label: 'Indian University & College Rating', value: 'university-college' },
      ],
      required: true,
      defaultValue: 'college',
    }
  ],
};
export default Coll_CategoryRatings;
