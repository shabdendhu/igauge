import { CollectionConfig } from "payload/types";

const Coll_SubjectRatings: CollectionConfig = {
  slug: "college-rating-badges",
  labels: {
    singular: "Subject Badge",
    plural: "Subject Badges",
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
      name: "badges_image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Badges Image",
    },
  ],
};
export default Coll_SubjectRatings;
