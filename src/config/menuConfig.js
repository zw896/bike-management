const menuList = [
    {
        title: 'Home',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: 'Buttons',
                key: '/ui/buttons',
            },
            {
                title: 'Modals',
                key: '/ui/modals',
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
            },
            {
                title: 'Notification',
                key: '/ui/notification',
            },
            {
                title: 'Message',
                key: '/ui/messages',
            },
            {
                title: 'Tab',
                key: '/ui/tabs',
            },
            {
                title: 'Gallery',
                key: '/ui/gallery',
            },
            {
                title: 'Carousel',
                key: '/ui/carousel',
            }
        ]
    },
    {
        title: 'Form',
        key: '/form',
        children: [
            {
                title: 'Log in',
                key: '/form/login',
            },
            {
                title: 'Sign up',
                key: '/form/reg',
            }
        ]
    },
    {
        title: 'Table',
        key: '/table',
        children: [
            {
                title: 'Basic',
                key: '/table/basic',
            },
            {
                title: 'Others',
                key: '/table/high',
            }
        ]
    },
    {
        title: 'Text',
        key: '/rich'
    },
    {
        title: 'City',
        key: '/city'
    },
    {
        title: 'Order',
        key: '/order',
        btnList: [
            {
                title: 'Details',
                key: 'detail'
            },
            {
                title: 'Finish',
                key: 'finish'
            }
        ]
    },
    {
        title: 'User',
        key: '/user'
    },
    {
        title: 'Map',
        key: '/bikeMap'
    },
    {
        title: 'Charts',
        key: '/charts',
        children: [
            {
                title: 'Bar',
                key: '/charts/bar'
            },
            {
                title: 'Pies',
                key: '/charts/pie'
            },
            {
                title: 'Line',
                key: '/charts/line'
            },
        ]
    },
    {
        title: 'Permission',
        key: '/permission'
    },
];
export default menuList;