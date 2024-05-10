import { CollectionConfig } from "payload/types";

const States: CollectionConfig = {
  slug: "states",
  admin: {
    useAsTitle: "state_name",
  },
  fields: [
    {
      name: "state_name",
      type: "text",
      required: true,
      label: "State Name",
    },
  ],
};
export default States;
