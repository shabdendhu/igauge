import { CollectionConfig } from "payload/types";

const Coll_CategoryName: CollectionConfig = {
  slug: "college-category-name",
  labels: {
    singular: "Category Name",
    plural: "Category Names",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "category_name",
    group: "Colleges",
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
export default Coll_CategoryName;
