import { CollectionConfig } from "payload/types";

const Uni_SubjectName: CollectionConfig = {
  slug: "university-subject-name",
  labels: {
    singular: "Subject Names",
    plural: "Subject Names",
  },
  access: {
    read: () => true, // Allow public read access
  },
  admin: {
    useAsTitle: "subject_name",
    group: "Universities",
  },
  fields: [
    {
      name: "subject_name",
      type: "text",
      required: true,
      label: "Subject Name",
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
export default Uni_SubjectName;
