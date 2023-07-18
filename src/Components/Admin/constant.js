const ADMIN_STATIC = Object.freeze({
    homepageLinks: [
        { label: 'Visitors Contact', to: 'visitors-contact' },
        { label: 'Donations', to: 'donations' }
    ],
    monthsArray: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    visitorsContactPage: {
        filters: [
            { placeholder: 'Active', key: 'active', type: 'checkbox', attr: { defaultChecked: true } },
            { placeholder: 'Name', key: 'name', type: 'text' },
            { placeholder: 'Mobile', key: 'mobile', type: 'number' },
            { placeholder: 'Date', key: 'day', type: 'number' },
            { placeholder: 'Month', key: 'month', type: 'select' },
            { placeholder: 'Year', key: 'year', type: 'number' },
        ]
    }
});

export default ADMIN_STATIC;
