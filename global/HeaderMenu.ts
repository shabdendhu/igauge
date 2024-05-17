import { GlobalConfig } from 'payload/types';

const HeaderMenu: GlobalConfig = {
    slug: 'header-menu',
    admin: {
        // livePreview: {
        //     url: 'http://localhost:3000/',
        // }
    },
    fields: [
        {
            name: 'top_bar_menu',
            label: 'Top bar Menu',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    label: 'Menu Name',
                    type: 'text',
                    required: true,

                },
                {
                    name: 'link',
                    label: 'Menu Link',
                    type: 'text',
                    required: true,
                },
            ],
        },

        {
            name: 'mainItems',
            label: 'Main Menu',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    label: 'Menu Name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'link',
                    label: 'Menu Link',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'subItems',
                    label: 'Sub Menu',
                    type: 'array',
                    fields: [
                        {
                            name: 'name',
                            label: 'Sub Menu Name',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'link',
                            label: 'Sub Menu Link',
                            type: 'text',
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};

export default HeaderMenu;