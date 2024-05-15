import { CollectionConfig } from 'payload/types'

const Coll_KeyPoints: CollectionConfig = {
    slug: 'col-keypoints',
    labels: {
        singular: 'Keypoint',
        plural: 'Keypoints',
    },
    admin: {
        useAsTitle: 'KeyPoint_title',
        group: 'Colleges',
    },
    fields: [
        {
            name: 'KeyPoint_title',
            type: 'text',
            required: true,
            label: 'KeyPoint Title',
        },

    ],
}
export default Coll_KeyPoints