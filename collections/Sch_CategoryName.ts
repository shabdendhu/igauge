import { CollectionConfig } from "payload/types";

const Sch_CategoryName: CollectionConfig = {
  slug: "school-category-name",
  labels: {
    singular: "Category Name",
    plural: "Category Names",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "category_name",
    group: "Schools",
  },
  fields: [
    {
      name: "category_name",
      type: "text",
      required: true,
      label: "Badges Name",
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
export default Sch_CategoryName;
