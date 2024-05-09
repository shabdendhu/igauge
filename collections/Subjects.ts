import { CollectionConfig } from 'payload/types'

const SubjectName: CollectionConfig = {
    slug: 'subjects',
    admin: {
        useAsTitle: 'subject_name',
    },
    fields: [
        {
            name: 'subject_name',
            type: 'text',
            required: true,
            label: 'Subject Name',
        }

    ],
}
export default SubjectName