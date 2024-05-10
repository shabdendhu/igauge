import { CollectionConfig } from "payload/types";

const Cities: CollectionConfig = {
  slug: "cities",
  admin: {
    useAsTitle: "city_name",
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
