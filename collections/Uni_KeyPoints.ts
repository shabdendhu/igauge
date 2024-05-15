import { CollectionConfig } from 'payload/types'

const Uni_KeyPoints: CollectionConfig = {
    slug: 'uni-keypoints',
    labels: {
        singular: 'Keypoint',
        plural: 'Keypoints',
    },
    admin: {
        useAsTitle: 'KeyPoint_title',
        group: 'Universities',
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
export default Uni_KeyPoints