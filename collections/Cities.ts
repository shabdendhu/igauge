import { CollectionConfig } from "payload/types";

const Cities: CollectionConfig = {
  slug: "cities",
  admin: {
    useAsTitle: "city_name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "city_name",
      type: "text",
      required: true,
      label: "City Name",
    },
  ],
};
export default Cities;
